export const $ = (elem: string) => document.querySelector(elem)

/** Agrupa un array de objetos por un atributo.
 * @param array Array de objetos a agrupar.
 * @param key Atributo por el que agrupar.
 */
export const groupBy = (array: any[], key: string) => {
  return array.reduce((preValue, curValue) => {
    ;(preValue[curValue[key]] = preValue[curValue[key]] || []).push(curValue)
    return preValue
  }, {})
}

/** Convierte los encabezados en links a sí mismos. 
 * @param query Selector para el elemento en el que aplicar la función.
 */
export const createLinksInHeaders = (query: string) => {
  const htmlElement = $(query) as HTMLDivElement
  const newProse = htmlElement.innerHTML.replace(
    /<h([1-6])(.*?)id="(.*?)">(.*?)<\/h[1-6]>/g,
    (_, number, others, id, text) => {
      return `
          <h${number}${others}id="${id}">
          <a href="#${id}">${text}</a>
          </h${number}>
        `
    }
  )
  htmlElement.innerHTML = newProse
}
