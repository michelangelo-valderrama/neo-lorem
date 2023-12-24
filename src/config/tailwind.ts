import {
  zinc,
  purple,
  pink,
  sky,
  indigo
} from 'tailwindcss/colors'

const light = {
  background: {
    DEFAULT: '#fff',
    secondary: zinc[100]
  },
  textColor: {
    primary: zinc[900],
    secondary: zinc[600],
    teriary: indigo[600],
    accent: {
      DEFAULT: purple[500],
      indigo: indigo[400],
      sky: sky[400]
    },
    blog: zinc[700]
  },
  textGradient: {
    sky: sky[200],
    purple: purple[200],
    pink: pink[200]
  },
  button: {
    DEFAULT: zinc[100],
    light: zinc[300]
  },
  borderColor: {
    gray: zinc[200],
    light: zinc[300],
    accent: purple[500]
  },
  hrColor: zinc[300],
  quotesColor: {
    DEFAULT: zinc[500]
  },
  popover: zinc[700]
}

const dark = {
  background: {
    DEFAULT: zinc[900],
    secondary: zinc[800]
  },
  textColor: {
    primary: '#fff',
    secondary: zinc[300],
    teriary: indigo[200],
    accent: {
      DEFAULT: purple[300],
      indigo: indigo[300],
      sky: sky[300]
    },
    blog: zinc[300]
  },
  textGradient: {
    sky: sky[300],
    purple: purple[400],
    pink: pink[300]
  },
  button: {
    DEFAULT: zinc[800],
    light: zinc[600]
  },
  borderColor: {
    gray: zinc[800],
    light: zinc[600],
    accent: purple[400]
  },
  hrColor: zinc[800],
  quotesColor: {
    DEFAULT: zinc[400]
  },
  popover: zinc[700]
}

export const colors = { light, dark }

export const fontFamily = {
  sans: [
    'Karla',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ],
  serif: [
    'Source Serif Pro',
    'ui-serif',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif'
  ],
  mono: [
    'Cascadia',
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace'
  ]
}
