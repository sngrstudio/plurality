// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    ...(process.env.KEYSTATIC ? [keystatic()] : [])
  ],
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: 'compile'
  }),
  vite: {},
  experimental: {
    contentLayer: true,
    serverIslands: true
  }
})
