import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const res = await request.json()
  const path = res.entry.path
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  if (!path || path?.length === 0) {
    return new Response('Invalid path', { status: 400 })
  }

  revalidatePath(path)
  return Response.json({ revalidated: true, now: Date.now() })
}
