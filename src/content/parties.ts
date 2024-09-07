import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const parties = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/parties' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      longName: z.string(),
      logo: image()
    })
})
