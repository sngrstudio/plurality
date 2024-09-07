import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const candidates = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: './src/data/candidates' }),
  schema: ({ image }) =>
    z.object({
      campaignName: z.string(),
      coalitionName: z.string().optional(),
      slogan: z.string().optional(),
      image: image().optional(),
      logo: image().optional(),
      region: z.string(),
      candidate: z.array(
        z.object({
          name: z.string(),
          party: z.string().optional(),
          status: z.enum(['candidate', 'running-mate'])
        })
      ),
      parties: z.array(
        z.object({
          party: z.string(),
          status: z.enum(['declaring', 'supporting'])
        })
      )
    })
})
