import {
  zinc,
  purple,
  pink,
  sky,
  indigo,
  transparent,
  current,
} from "tailwindcss/colors"
import { lightTheme } from "../consts"

/* const colorLight = {
  transparent,
  current,
  background: "#fff",
  textColor: {
    primary: zinc[900],
    secondary: zinc[700],
    teriary: indigo[600],
    accent: {
      DEFAULT: purple[500],
      indigo: indigo[400],
      sky: sky[400],
    },
    blog: zinc[700],
  },
  textGradient: {
    sky: sky[200],
    purple: purple[200],
    pink: pink[200],
  },
  button: zinc[100],
  borderColor: {
    gray: zinc[300],
    light: zinc[100],
    accent: purple[500],
  },
  hrColor: zinc[200],
  quotesColor: {
    DEFAULT: zinc[500],
  },
}

const colorDark = {
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
  button: zinc[950],
  borderColor: {
    gray: zinc[600],
    light: zinc[400],
    accent: purple[400],
  },
  hrColor: zinc[800],
  quotesColor: {
    DEFAULT: zinc[400],
  },
}

export const colors = lightTheme ? colorLight : colorDark */

export const colors = {
  transparent,
  current,
  background: lightTheme ? "#fff" : zinc[900],
  textColor: {
    primary: lightTheme ? zinc[900] : "#fff",
    secondary: lightTheme ? zinc[600] : zinc[300],
    teriary: lightTheme ? indigo[600] : indigo[200],
    accent: {
      DEFAULT: lightTheme ? purple[500] : purple[300],
      indigo: lightTheme ? indigo[400] : indigo[300],
      sky: lightTheme ? sky[400] : sky[300],
    },
    blog: lightTheme ? zinc[700] : zinc[300],
  },
  textGradient: {
    sky: lightTheme ? sky[200] : sky[300],
    purple: lightTheme ? purple[200] : purple[400],
    pink: lightTheme ? pink[200] : pink[300],
  },
  button: lightTheme ? zinc[100] : zinc[950],
  borderColor: {
    gray: lightTheme ? zinc[300] : zinc[600],
    light: lightTheme ? zinc[200] : zinc[400],
    accent: lightTheme ? purple[500] : purple[400],
  },
  hrColor: lightTheme ? zinc[200] : zinc[800],
  quotesColor: {
    DEFAULT: lightTheme ? zinc[600] : zinc[400],
  },
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
