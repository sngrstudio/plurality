import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ locals }) => {
  const votes = await locals.runtime.env.VOTES.list()
  const votesAggregated = votes.keys
    .map((key) => (key.metadata as { choice: string; region: string }).choice)
    .flat()
    .reduce<{ [key: string]: number }>((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})

  return new Response(JSON.stringify(votesAggregated), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
