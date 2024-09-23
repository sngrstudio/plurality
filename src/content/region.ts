import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const region = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/region' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.enum(['main', 'local']),
      logo: image(),
      wikipedia: z.string().optional(),
      size: z.number().optional()
    })
})
