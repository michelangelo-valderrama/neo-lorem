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
  background: "#fff" /* zinc[900] */,
  textColor: {
    primary: zinc[900] /* "#fff" */,
    secondary: zinc[700] /* zinc[300] */,
    teriary: indigo[600] /* indigo[200] */,
    accent: {
      DEFAULT: purple[400] /* purple[300] */,
      indigo: indigo[400] /* indigo[300] */,
      sky: sky[400] /* sky[300] */,
    },
    blog: zinc[700] /* zinc[300] */,
  },
  textGradient: {
    sky: sky[200] /* sky[300] */,
    purple: purple[200] /* purple[400] */,
    pink: pink[200] /* pink[300] */,
  },
  borderColor: {
    gray: zinc[300] /* zinc[600] */,
    light: zinc[100] /* zinc[400] */,
    accent: purple[500] /* purple[400] */,
  },
  hrColor: zinc[200] /* zinc[800] */,
  quotesColor: {
    DEFAULT: zinc[500] /* zinc[400] */,
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
