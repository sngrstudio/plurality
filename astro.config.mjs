import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'
import icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), ...(process.env.KEYSTATIC ? [keystatic()] : [])],
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    plugins: [icons({ compiler: 'jsx', jsx: 'react' })]
  },
  experimental: {
    contentLayer: true
  }
})
