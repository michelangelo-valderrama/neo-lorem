/**
 * Selecciona el primer elemento que cumple con el selector.
 * @param selector - Selector o grupo de selectores.
 * @returns - Retorna el elemento HTML o null.
 */
export const $ = (selector: string) => document.querySelector(selector)

/**
 * Selecciona los elementos que cumplen con el selector.
 * @param selector - Selector o grupo de selectores.
 * @returns - Retorna una lista de nodos con los elementos HTML o estará vacio.
 */
export const $s = (selector: string) => document.querySelectorAll(selector)

/**
 * Agrupa un array de objetos por un atributo.
 * @param array - Array de objetos a agrupar.
 * @param key - Atributo por el que agrupar.
 * @returns - Retorna un objeto con las propiedades agrupadas.
 */
export const groupBy = (array: any[], key: string) => {
  return array.reduce((preValue, curValue) => {
    ;(preValue[curValue[key]] = preValue[curValue[key]] || []).push(curValue)
    return preValue
  }, {})
}

/**
 * Convierte los encabezados en links a sí mismos.
 * @param query - Selector para el elemento en el que aplicar la función.
 */
export const createLinksInHeaders = (query: string) => {
  const htmlElement = $(query) as HTMLDivElement
  const newHtml = htmlElement.innerHTML.replace(
    /<h([1-6])(.*?)id="(.*?)">(.*?)<\/h[1-6]>/g,
    (_, number, others, id, text) => {
      return `
          <h${number}${others}id="${id}">
          <a href="#${id}">${text}</a>
          </h${number}>
        `
    }
  )
  htmlElement.innerHTML = newHtml
}
