import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const poll = defineAction({
  accept: 'form',
  input: z.record(z.string()),
  handler: async (input, context) => {
    // const { VOTES } = context.locals.runtime.env
    // await VOTES.put('test', JSON.stringify(input))
    const id = input

    // const votesData = await VOTES.get('test')
    console.log(id)
  }
})
