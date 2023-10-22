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
