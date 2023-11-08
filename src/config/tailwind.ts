import {
  zinc,
  purple,
  pink,
  sky,
  indigo,
  transparent,
  current,
} from "tailwindcss/colors"
import {} from "tailwindcss/"

export const colors = {
  transparent,
  current,
  background: zinc[900],
  textColor: {
    primary: "#fff",
    secondary: zinc[300],
    teriary: indigo[200],
    accent: {
      DEFAULT: purple[300],
      indigo: indigo[300],
      sky: sky[300],
    },
    blog: zinc[300],
  },
  textGradient: {
    sky: sky[300],
    purple: purple[400],
    pink: pink[300],
  },
  borderColor: {
    gray: zinc[600],
    light: zinc[400],
    accent: purple[400],
  },
  hrColor: zinc[800],
  quotesColor: {
    DEFAULT: zinc[400],
  },
  preColor: zinc[700],
}

export const fontFamily = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  serif: [
    "Source Serif Pro",
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
  mono: [
    "Cascadia",
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
}
