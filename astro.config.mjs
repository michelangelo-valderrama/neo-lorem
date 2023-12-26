import { SITE } from './src/consts'
import {
  defineConfig,
  passthroughImageService
} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  image: {
    service: passthroughImageService()
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  },
  integrations: [
    tailwind(),
    mdx(),
    preact(),
    sitemap({
      filter: (page) => page !== `${SITE.URL}/404`
    })
  ]
})
