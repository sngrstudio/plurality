import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const poll = defineAction({
  accept: 'form',
  input: z.object({
    id: z.string(),
    choice: z.array(z.string())
  }),
  handler: async ({ id, choice }, { locals }) => {
    const { VOTES } = locals.runtime.env
    await VOTES.put(id, JSON.stringify(choice))
  }
})
