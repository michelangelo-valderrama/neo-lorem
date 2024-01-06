---
title: 'Implementando i18n en Astro'
description: 'Pequeña guía de cómo implementar i18n en Astro para tener páginas en múltiples idiomas.'
pubDate: '2024-01-06'
tags:
  - Astro
  - i18n
  - Programación
previus:
  link: crear-shortcut-de-pico-8-en-linux.md
  text: Crear shortcut de Pico 8 en Linux
---

Nuevo artículo, nuevo tutorial.

Aquí una “guía” de como implementar i18n en Astro. ¿Pero no existen ya librerias para eso? Pues sí, pero cuando yo las quise implementar no funcionaban, así que tocó crearse la propia. Además, hacerlo tú mismo te hace menos dependiente de terceros.

Tener una página en muchos idiomas es siempre un fastidio, pero a veces es una necesidad si una quiere que su página web sea más accesible. Pero yo me vi en esta necesidad porque me tocó migrar la web de IF7SPORTS de Angular a Astro. ¿Por qué se usó Angular para una página estática? Ni idea, pero tardaba 6 segundos en cargar y eso no era bueno. En el blog de la web escribí un muy pequeño artículo sobre la migración, os lo dejo [aquí](https://if7sports.com/es/blog/presenting-our-new-website/). La web también tenía diferentes idiomas, pero se usaba un sistema que yo he denominado _sistema de idiomas en base a directorios_, donde básicamente tienes una carpeta por cada idioma (aunque el idioma por defecto puede ser la carpeta raíz), llegando a una estructura tal que así:

```
pages/
  index.html
  en/
    index.html
  fr/
    index.html
```

De ello aprendí algo muy importante:

> _“Ni de coña vuelvo a tener que copiar una página entera para que esté en otro puto idioma.”_

Siempre que se añadía cualquier cosa a la web había que realizarlo mínimo dos veces y era horrible, por eso decidí crear el sistema de idiomas de otra manera, uno que he denominado _sistema de idiomas en base a archivos_, donde tienes las traducciones en archivos separados.

> Si quereis basar vuestra sistema de traducción en directorios y comprobar en carne propia por qué es un atentado contra la humanidad os dejo la receta de oficial Astro de cómo hacerlo [aquí](https://docs.astro.build/en/recipes/i18n/).

Cosa importante a decir ahora es que todas las rutas tiene el idioma como prefijo, e.g. `/en/home` o `/es/home`, por lo que la ruta raiz no es ningún idioma, e.g. `/home` es un 404, esto puede ser o no importante dependiendo de lo que buscas. Si quieres intentar hacer que la ruta raiz sea el idioma por defecto te deseo buena suerte y que dios te acompañe :>

---

## Configuración y utilidades

1. Crea el directorio `src/i18n`, donde estarán todos los scripts y componentes exclusivos de los idiomas, excepto las traducciones.
2. Cree la carpeta `public/locales` y dentro de ella, crea un archivo `.json` por cada idioma que quieras. En mi caso serán el Inglés, Español y Francés.

   ```
   public/
     locales/
       en.json
       es.json
       fr.json
   ```

3. En `src/i18n/config.ts`, añade lo siguiente:

   ```ts
   import es from '../../public/locales/es.json'
   import en from '../../public/locales/en.json'
   import fr from '../../public/locales/fr.json'

   export const LANGUAGES = {
     en: 'English',
     es: 'Español',
     fr: 'Français'
   }

   export const LOCALES = {
     en: 'en-GB',
     es: 'es-ES',
     fr: 'fr-FR'
   }

   export const LANGUAGES_ARRAY = Object.keys(LANGUAGES)

   export const DEFAULT_LANGUAGE = 'en'

   export const TRANSLATIONS = { en, es, fr }

   export type Lang = keyof typeof TRANSLATIONS
   export type Page =
     keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANGUAGE]
   ```

En `config.ts` se importan las traducciones, se configuran los idiomas, sus _locales_ y se hacen demás cosas útiles.

4. En el archivo `src/i18n/utils.ts`, añade lo siguiente:

   ```ts
   import {
     DEFAULT_LANGUAGE,
     LANGUAGES,
     TRANSLATIONS,
     type Lang,
     type Page
   } from './config'

   /**
    * Obtiene el idioma por el pathname.
    * @param pathname
    */
   export function getLangFromPathname(pathname: string) {
     const [, lang] = pathname.split('/')
     return lang as Lang
   }

   /**
    * Obtiene el idioma por un objeto URL.
    * @param url
    */
   export const getLanguageFromUrl = (url: URL) =>
     getLangFromPathname(url.pathname)

   /**
    * Configura la función `t` para el idioma indicado.
    * @param lang - El idioma deseado.
    * @param defaultPage - Indica la página por defecto.
    */
   export function useTranslations(
     lang: Lang,
     defaultPage?: Page
   ) {
     /**
      * Devuelve el texto traducido en la página por defecto o en la especificada.
      * @param page - Especifica la página, e.g. `home`, `about`, etc. La clave es de un solo nivel, por tanto `home.title` no es válido.
      */
     return function t(page?: Page): any {
       const lang$ =
         lang in LANGUAGES ? lang : DEFAULT_LANGUAGE
       const page$ = page ?? defaultPage

       return page$ ? TRANSLATIONS[lang$][page$] : ''
     }
   }
   ```

5. Por último, puedes añadir algunos _import aliases_ útiles a tu archivo `tsconfig.json`.
   ```json
   {
   ...,
   "compilerOptions": {
     "baseUrl": ".",
     "paths": {
       "@i18n/*": ["src/i18n/*"],
       "@layouts/*": ["src/layouts/*"],
       "@components/*": ["src/components/*"]
     }
   }
   }
   ```

## Componentes

1. Para poder cambiar de idioma, crea el archivo `src/i18n/LanguagePicker.astro`. Yo os dejo dos opciones: un seleccionable o una lista.

   ```astro
   ---
   import { LANGUAGES, LOCALES, type Lang } from "./config"
   const url = Astro.url
   const origin = url.origin
   const [, lang, ...slug] = url.pathname.split("/")
   ---

   <!-- OPCIÓN 01 -->
   {
     lang in LANGUAGES && (
       <select
         id="lang-selector"
       >
         <option value="" disabled selected>
           {LANGUAGES[lang as Lang]}
         </option>
         {Object.entries(LANGUAGES).map(([l, label]) => (
           <>
             {l !== lang && (
               <option value={`${origin}/${l}/${slug.join("/")}`}>
                 {label}
               </option>
             )}
           </>
         ))}
       </select>
     )
   }

   <!-- OPCIÓN 02 -->
   <ul>
     {
       Object.entries(LANGUAGES).map(([l, label]) => (
         <li>
           <a
             href={`${origin}/${l}/${slug.join("/")}`}
             hreflang={LOCALES[l as keyof typeof LOCALES]}
           >
             {label}
           </a>
         </li>
       ))
     }
   </ul>

   <script>
     // solo para la opción 1
     function optionsAsLinks(selector: string) {
       const selectElem = document.querySelector(selector) as HTMLSelectElement
       selectElem.addEventListener("change", () => {
         const selectedIndex = selectElem.selectedIndex
         if (selectElem.options[selectedIndex].value) {
           const url = selectElem.options[selectedIndex].value
           window.location = url as string & Location
         }
       })
     }
     optionsAsLinks("#lang-selector")
   </script>
   ```

2. Hay ciertos casos en los que es útil poder establecer etiquetas html invariables a cada idioma sin tener que repetirlo en todos los `[language].json`, para eso en `src/i18n/Trans.astro` añade lo siguiente:

   ```astro
   ---
   import { DEFAULT_LANGUAGE, type Page } from "./config"
   import { getLanguageFromUrl, useTranslations } from "./utils"
   import { replaceTextTargetsByTemplate } from "./languageTarget"

   interface Props {
     page?: Page
     section: string
     class?: string
   }

   const { page, section, class: className } = Astro.props
   const lang = getLanguageFromUrl(Astro.url)
   const t = useTranslations(lang, page)

   const slot = await Astro.slots.render("default")
   const text = lang === DEFAULT_LANGUAGE ? slot : (t()[section] as string)
   ---

   <p class={className} set:html={replaceTextTargetsByTemplate(slot, text)} />
   ```

   Además, tienes que crear el archivo `src/i18n/languageTarget.ts`.

   ```ts
   /**
    * Obtiene las etiquetas de un texto HTML.
    * @param html
    * @returns Retorna un array con las etiquetas, que incluyen `<>` y `</>`.
    */
   function getHtmlTargets(html: string) {
     const targets: string[] = []
     let index = 0
     while (index < html.length) {
       if (html[index] === '<') {
         const endTarget = html.indexOf('>', index)

         if (endTarget !== -1) {
           const fullTarget = html.slice(
             index,
             endTarget + 1
           )
           targets.push(fullTarget)
           index = endTarget + 1
           continue
         }
       }
       index++
     }
     return targets
   }

   /**
    * Sustituye las etiquetas numerales (`<0></0>`, `<1></1>`, etc.) de un texto por las etiquetas de una plantilla.
    * > El texto y el plantilla han de tener el mismo número de etiquetas.
    * @param template
    * @param text
    */
   export function replaceTextTargetsByTemplate(
     template: string,
     text: string
   ) {
     if (!text) throw new Error('Text is undefined')

     const targets = getHtmlTargets(template)
     return text.replace(
       /<(\d+)>(.*?)<\/\1>/g,
       (_, pos, cont) => {
         const num = parseInt(pos)
         return `${targets[num * 2]}${cont}${
           targets[num * 2 + 1]
         }`
       }
     )
   }
   ```

3. Para el SEO, crea el archivo `src/i18n/I18nHeaders.astro` con lo siguiente:

   ```astro
   ---
   import { DEFAULT_LANGUAGE, LOCALES } from "./config"
   const [, , ...path] = Astro.url.pathname.split("/")
   ---

   <link
     rel="alternate"
     href={`${Astro.url.origin}${DEFAULT_LANGUAGE}/${path.join("/")}`}
     hreflang="x-default"
   />
   {
     Object.keys(LOCALES).map((l) => (
       <link
         rel="alternate"
         href={`${Astro.url.origin}${l}/${path.join("/")}`}
         hreflang={LOCALES[l as keyof typeof LOCALES]}
       />
     ))
   }

   <meta property="og:locale" content={LOCALES[DEFAULT_LANGUAGE]} />
   {
     Object.keys(LOCALES).map((l) => {
       if (l === DEFAULT_LANGUAGE) return
       return (
         <meta
           property="og:locale:alternate"
           content={LOCALES[l as keyof typeof LOCALES]}
         />
       )
     })
   }
   ```

## Plantillas

Para que el navegador sepa en que idioma se encuentra la página, es importante añadir el atributo `lang` en la etiqueta `html`, para ello añade lo siguiente en el archivo `src/layouts/BaseLayout.astro`:

```astro
---
import I18NHeaders from "@i18n/I18nHeaders.astro"
import { getLanguageFromUrl } from "@i18n/utils"

interface Props {
  title: string
}

const lang = getLanguageFromUrl(Astro.url)
---

<html lang={lang}>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
		<title>{Astro.props.title}</title>
		<I18NHeaders />
	</head>
	<body>
		<slot />
	</body>
</html>
```

## Páginas

### `index.astro`

Como comenté al principio, este sistema no está configurado para que la ruta raiz sea el idioma predeterminado, por lo tanto hay que redirigir al usuario añadiendo lo siguiente en `src/pages/index.astro`:

```astro
---
import { DEFAULT_LANGUAGE } from "@i18n/config"
---

<meta
	http-equiv="refresh"
	content={`0;url=/${DEFAULT_LANGUAGE}/`}
/>
```

El problema con esto es que las redirecciones por el lado del cliente son penalizantes para el SEO, por lo que una mejor opción sería usar el modo o `hybrid` de Astro y cambiar lo anterior por:

```astro
---
import { DEFAULT_LANGUAGE, LANGUAGES } from '@i18n/config'
export const prerender = false

const headers = Object.fromEntries(Astro.request.headers)
const userLanguage =
	headers['accept-language']?
	.split(',')[0]
	.split('-')[0]
const lang =
	userLanguage !== undefined && userLanguage in LANGUAGES
	? userLanguage
	: DEFAULT_LANGUAGE

return Astro.redirect(`/${lang}/`, 301)
---
```

### `[lang]`

Las páginas para cada idioma se generan gracias a las [rutas dinámicas](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode) de Astro, lo único malo es que hay que indicar en todas las páginas los idiomas en los que se va ha traducir.

1. Crea las traducciones en los `[languages].json`:

   ```json
   {
     "home": {
       "head_title": "Home",
       "title": "Welcome!",
       "subtitle": "This is an Astro test with i18n."
     }
   }
   ```

   ```json
   {
     "home": {
       "head_title": "Inicio",
       "title": "¡Bienvenido!",
       "subtitle": "Esto es un prueba de Astro con i18n."
     }
   }
   ```

   ```json
   {
     "home": {
       "head_title": "Début",
       "title": "Accueillir!",
       "subtitle": "Il s'agit d'un test Astro avec i18n."
     }
   }
   ```

2. Crea el directorio `src/pages/[lang]`.

   ```
   pages/
     index.astro
       [lang]/
   ```

3. En `src/pages/[lang]/index.astro` añade lo siguiente:

   ```astro
   ---
   import BaseLayout from "@layouts/BaseLayout.astro"
   import { LANGUAGES_ARRAY, type Lang } from "@i18n/config"
   import { useTranslations } from "@i18n/utils"

   export const getStaticPaths = () => {
     return LANGUAGES_ARRAY.map((lang) => ({
       params: { lang },
     }))
   }

   const { lang } = Astro.params
   const t = useTranslations(lang as Lang, "home")
   ---

   <BaseLayout title={t().head_title}>
     <h1>{t().title}</h1>
     <p>{t().subtitle}</p>
   </BaseLayout>
   ```

Ahora deberías poder ejecutar `npm run dev` y tener una página i18n.

Si quieres ver un ejemplo más completo puedes ir a este [repositorio](https://github.com/michelangelo-valderrama/test-astro-i18n/), que tiene un blog y usa traducciones en los componentes.
