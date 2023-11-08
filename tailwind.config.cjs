import { colors, fontFamily } from "./src/config/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        lorem: "860px",
      },
      typography: ({ theme }) => ({
        lorem: {
          css: {
            "--tw-prose-body": theme("colors.textColor.blog"),
            "--tw-prose-headings": theme("colors.textColor.primary"),
            // '--tw-prose-lead': theme('colors.pink[700]'),
            "--tw-prose-links": theme("colors.textColor.accent.DEFAULT"),
            "--tw-prose-bold": theme("colors.textColor.primary"),
            "--tw-prose-counters": theme("colors.textColor.primary"),
            "--tw-prose-bullets": theme("colors.textColor.primary"),
            "--tw-prose-hr": theme("colors.hrColor"),
            "--tw-prose-quotes": theme("colors.quotesColor.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.borderColor.gray"),
            "--tw-prose-captions": theme("colors.textColor.primary"),
            "--tw-prose-code": theme("colors.textColor.primary"),
            "--tw-prose-pre-code": theme("colors.textColor.primary"),
            "--tw-prose-pre-bg": theme("colors.preColor"),
            "--tw-prose-th-borders": theme("colors.borderColor.gray"),
            "--tw-prose-td-borders": theme("colors.borderColor.gray"),
            "--tw-prose-invert-body": theme("colors.textColor.blog"),
            "--tw-prose-invert-headings": theme("colors.textColor.primary"),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            "--tw-prose-invert-links": theme("colors.textColor.accent.DEFAULT"),
            "--tw-prose-invert-bold": theme("colors.textColor.primary"),
            "--tw-prose-invert-counters": theme("colors.textColor.primary"),
            "--tw-prose-invert-bullets": theme("colors.textColor.primary"),
            "--tw-prose-invert-hr": theme("colors.hrColor"),
            "--tw-prose-invert-quotes": theme("colors.quotesColor.DEFAULT"),
            "--tw-prose-invert-quote-borders": theme("colors.borderColor.gray"),
            "--tw-prose-invert-captions": theme("colors.textColor.primary"),
            "--tw-prose-invert-code": theme("colors.textColor.primary"),
            "--tw-prose-invert-pre-code": theme("colors.textColor.primary"),
            "--tw-prose-invert-pre-bg": theme("colors.preColor"),
            "--tw-prose-invert-th-borders": theme("colors.borderColor.gray"),
            "--tw-prose-invert-td-borders": theme("colors.borderColor.gray"),
          },
        },
        DEFAULT: {
          css: {
            ".aside": {
              '@apply before:content-["—"] after:content-["—"]': "",
            },
            "h1, h2, h3, h4, h5, h6": {
              a: {
                "@apply text-textColor-primary no-underline": "",
              },
            },
            pre: {
              code: {
                "@apply bg-transparent p-0 !important": "",
              },
            },
            a: {
              "@apply underline-offset-4": "",
            },
            sup: {
              "@apply ms-0.5": "",
              a: {
                "@apply bg-none": "",
                "&:hover": {
                  "@apply no-underline bg-none": "",
                },
                "&:before": {
                  content: "'[ '",
                },
                "&:after": {
                  content: "' ]'",
                },
              },
            },
          },
        },
      }),
    },
    colors,
    fontFamily,
  },
  plugins: [require("@tailwindcss/typography")],
}
