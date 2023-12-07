import { $ } from "../utils"

/**
 * Convierte los encabezados en links a sí mismos.
 * @param query - Selector para el elemento en el que aplicar la función.
 */
export default function createLinksInHeaders(query: string) {
  const htmlElement = $(query) as HTMLDivElement | null
  const newHtml = htmlElement?.innerHTML.replace(
    /<h([1-6])(.*?)id="(.*?)">(.*?)<\/h[1-6]>/g,
    (_, number, others, id, text) => {
      return `
          <h${number}${others}id="${id}">
          <a href="#${id}" class="font-semibold block"><span class="text-textColor-accent">§</span> ${text}</a>
          </h${number}>
        `
    }
  )
  if (htmlElement && newHtml) {
    htmlElement.innerHTML = newHtml
  }
}
