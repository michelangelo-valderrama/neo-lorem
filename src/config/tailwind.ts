import {
  neutral,
  purple,
  pink,
  sky,
  indigo,
  transparent,
  current,
} from 'tailwindcss/colors'
import {} from 'tailwindcss/'

export const colors = {
  transparent,
  current,
  background: neutral[950],
  textColor: {
    primary: neutral[50],
    secondary: neutral[400],
    teriary: indigo[200],
    accent: {
      DEFAULT: purple[300],
      indigo: indigo[300],
      sky: sky[300],
    },
  },
  textGradient: {
    sky: sky[300],
    purple: purple[400],
    pink: pink[300],
  },
  borderColor: {
    gray: neutral[800],
    light: neutral[400],
    accent: purple[400],
  },
  hrColor: neutral[800],
  quotesColor: {
    DEFAULT: neutral[900],
  },
  preColor: neutral[700],
}

export const fontFamily = {
  sans: [
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
    'Noto Color Emoji',
  ],
  serif: [
    'Source Serif Pro',
    'ui-serif',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
}
