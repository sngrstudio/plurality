import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const regions = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/regions' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      type: z.enum(['province', 'regency', 'city']),
      logo: image().optional()
    })
})
