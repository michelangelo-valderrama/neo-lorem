import { $ } from "../utils"

/**
 * Muestra y esconde el elemento seleccionado según si se hace scroll para arriba o para abajo.
 * @param query - Selector para el elemento en el que aplicar la función.
 */
export function showNav(query: string) {
  const $scrollElem = $(query)
  let scrollBefore = document.documentElement.scrollTop
  let scrollDir: "up" | "down"
  function getScrollDirection() {
    const scrollNow = document.documentElement.scrollTop
    if (
      scrollNow > scrollBefore ||
      (scrollNow === scrollBefore && scrollNow !== 0)
    ) {
      scrollDir = "down"
    } else {
      scrollDir = "up"
    }
    scrollBefore = scrollNow
    return scrollDir
  }
  return function scrollHandler() {
    const scrollDirection = getScrollDirection()
    if (scrollDirection === "down") {
      $scrollElem?.classList.remove("up")
      $scrollElem?.classList.add("down")
    } else {
      $scrollElem?.classList.remove("down")
      $scrollElem?.classList.add("up")
    }
  }
}
