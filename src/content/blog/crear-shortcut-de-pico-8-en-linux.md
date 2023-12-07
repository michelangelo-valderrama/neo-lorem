---
title: Crear shortcut de Pico 8 en Linux
description: 'Creando un shortcut (también conocido como añadir una aplicación al menú de aplicaciones) de Pico 8 en Linux.'
pubDate: '2023-12-07'
mainImg: "crear-shortcut-de-pico-8-en-linux/pico-8.webp"
tags:
  - ubuntu
  - pico 8
  - tutorial
previus:
  {
    'link': 'firefox-developer-edition-para-ubuntu',
    'text': 'Descargar y configurar Firefox Developer Edition para Ubuntu'
  }
---

De Pico 8 ya hablé en mi artículo [**Introducción al Desarrollo de Videojuegos con PICO-8**](https://neolorem.dev/blog/introduccion-al-desarrollo-de-videojuegos-con-pico8), pero hoy vengo a escribir un muy breve, brevísimo, artículo sobre como crear un shortcut de Pico 8 en Ubuntu.

### Para empezar

Para empezar, si todavía no tiene comprado Pico 8, puede hacerlo en esta [página](https://www.lexaloffle.com/pico-8.php?#getpico8) (creada con PHP).

Una vez tenga descargado el programa, tendrá un directorio llamado `pico-8` con una imagen, unos textos y un par de ejecutables. Recomiendo leerse el `readme_linux.txt`, pero lo importante es que te asegures de poder ejecutar el ejecutable (valga la redundancia) con el siguiente comando:

```
sudo chmod u+x pico8
```

Ahora, pruebe a ejecutar el programa con:

```
./pico8
```

Si todo funciona, entonces pasamos a la siguiente face.

### Crear el shortcut

Para crear el shortcut, básicamente hay que hacer lo mismo que en mi artículo anterior, [**Descargar y configurar Firefox Developer Edition para Ubuntu**](https://neolorem.dev/blog/firefox-developer-edition-para-ubuntu), pero cambiando alguna cosilla.

Ejecuta el siguiente comando para empezar a escribir en el archivo de configuración para el shortcut:

```
vi ~/.local/share/applications/pico_8.desktop
```

Ahora copie en el archivo el siguiente texto:

```
[Desktop Entry]
Name=Pico 8
GenericName=Pico 8
Exec=/opt/pico-8/pico8 %u
Terminal=false
Icon=/opt/pico-8/lexaloffle-pico8.png
Type=Application
Categories=Application;Development;Game;
Comment=Pico 8 Game Engine.
```

Ahora debería aparecerle el shortcut de Pico 8 junto a sus demás aplicaciones.

![Screenshot de mi menú de apliaciones con el shortcut Pico 8](/images/blog/crear-shortcut-de-pico-8-en-linux/pico8-menu-de-aplicaciones.png)
