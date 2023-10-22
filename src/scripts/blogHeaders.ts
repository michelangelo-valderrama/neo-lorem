import { $ } from "../utils"

/**
 * Convierte los encabezados en links a sí mismos.
 * @param query - Selector para el elemento en el que aplicar la función.
 */
export default function createLinksInHeaders(query: string) {
  const htmlElement = $(query) as HTMLDivElement
  const newHtml = htmlElement.innerHTML.replace(
    /<h([1-6])(.*?)id="(.*?)">(.*?)<\/h[1-6]>/g,
    (_, number, others, id, text) => {
      return `
          <h${number}${others}id="${id}">
          <a href="#${id}"><span class="text-textColor-accent">§</span> ${text}</a>
          </h${number}>
        `
    }
  )
  htmlElement.innerHTML = newHtml
}