import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const candidate = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/candidate' }),
  schema: ({ image }) =>
    z.object({
      campaignName: z.string(),
      number: z.number(),
      image: image().optional(),
      logo: image().optional(),
      candidates: z.array(
        z.object({
          name: z.object({
            name: z.string(),
            slug: z.string()
          }),
          status: z.enum(['main-candidate', 'running-mate']),
          party: z.string().optional()
        })
      ),
      coalition: z.array(
        z.object({
          party: z.string(),
          status: z.enum(['parliament', 'non-parliament'])
        })
      )
    })
})
