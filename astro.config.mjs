import { SITE } from "./src/consts"
import { defineConfig, passthroughImageService } from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import preact from "@astrojs/preact"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    preact(),
    sitemap({
      filter: (page) => page !== `${SITE.URL}/404`,
    }),
  ],
  site: SITE.URL,
  image: {
    service: passthroughImageService(),
  },
})
