import { SITE } from "./src/consts"
import { defineConfig, passthroughImageService } from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) => page !== `${SITE.URL}/404`,
    }),
  ],
})
