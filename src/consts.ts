export const SITE = {
  TITLE: "Neo Lorem",
  DESCRIPTION:
    "Llamadme Michelangelo. Soy alguien con muchos intereses, y que a veces se obseciona con algún tema en particular durante días o semanas sin ningún motivo",
  URL: "https://neolorem.dev",
  IMAGE: "/banner.png",
  IMAGE_ALT: "Banner Neo Lorem",
  IMAGE_WIDTH: "1200",
  IMAGE_HEIGHT: "675",
}

export let lightTheme = true
export const toggleTheme = () => {
  lightTheme = !lightTheme
  console.log(lightTheme)
}

export const URLS_MAP = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/blog",
    title: "blog",
  },
  {
    href: "/about",
    title: "about",
  },
]
