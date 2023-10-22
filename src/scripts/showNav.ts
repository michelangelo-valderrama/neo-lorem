import { $s } from "../utils"

/**
 * Muestra y esconde el elemento seleccionado según si se hace scroll para arriba o para abajo.
 * @param query - Selector para el elemento en el que aplicar la función.
 */
export function showNav(query: string) {
  const scrollElements = $s(query)

  let scrollBefore = document.documentElement.scrollTop
  let scrollDir: "up" | "down"

  function getScrollDirection() {
    const scrollNow = document.documentElement.scrollTop

    if (
      scrollNow > scrollBefore ||
      (scrollNow === scrollBefore && scrollNow !== 0)
    )
      scrollDir = "down"
    else scrollDir = "up"

    scrollBefore = scrollNow
    return scrollDir
  }

  return function scrollHandler() {
    const scrollDirection = getScrollDirection()

    if (scrollDirection === "down") {
      scrollElements.forEach((elem) => {
        elem?.classList.remove("up")
        elem?.classList.add("down")
      })
    } else {
      scrollElements.forEach((elem) => {
        elem?.classList.remove("down")
        elem?.classList.add("up")
      })
    }
  }
}
