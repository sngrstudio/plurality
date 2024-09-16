import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const party = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/party' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image()
    })
})
