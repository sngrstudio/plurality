import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ locals }) => {
  const { VOTES } = locals.runtime.env
  const votes = await VOTES.list()
  const aggregate = votes.keys
    .map((key) => (key.metadata as { choice: string; region: string }).choice)
    .flat()
    .reduce<{ [key: string]: number }>((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})
  const result = Object.entries(aggregate).map(([choice, count]) => ({
    choice,
    count
  }))

  return new Response(JSON.stringify(result), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
