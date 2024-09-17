import { defineMiddleware } from 'astro:middleware'
import { nanoid } from 'nanoid'

export const onRequest = defineMiddleware(async ({ locals, cookies }, next) => {
  if (!cookies.has('user')) {
    const user = nanoid()
    cookies.set('user', user)
  }

  if (!locals.user) {
    locals.user = cookies.get('user')?.value as string
  }

  return next()
})
