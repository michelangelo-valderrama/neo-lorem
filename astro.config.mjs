import { SITE } from './src/consts'
import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), preact()],
  site: SITE.URL,
  image: {
    service: passthroughImageService(),
  },
})
