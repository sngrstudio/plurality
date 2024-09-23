import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const poll = defineAction({
  accept: 'form',
  input: z.object({
    choice: z.array(z.string()),
    region: z.string()
  }),
  handler: async ({ choice, region }, { locals }) => {
    const { VOTES } = locals.runtime.env
    await VOTES.put(locals.user, '', {
      metadata: {
        choice,
        region
      }
    })
  }
})
