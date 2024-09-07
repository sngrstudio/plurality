import { glob } from 'astro/loaders'
import { defineCollection, z, reference } from 'astro:content'

export const candidates = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/candidates' }),
  schema: ({ image }) =>
    z.object({
      campaignName: z.string(),
      slogan: z.string().optional(),
      image: image().optional(),
      logo: image().optional(),
      region: reference('regions'),
      candidate: z.array(
        z.object({
          name: z.string(),
          party: reference('parties').optional(),
          status: z.enum(['candidate', 'running-mate'])
        })
      ),
      parties: z.array(
        z.object({
          party: reference('parties'),
          status: z.enum(['declaring', 'supporting'])
        })
      )
    })
})
