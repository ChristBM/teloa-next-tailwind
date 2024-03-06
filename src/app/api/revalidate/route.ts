import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const res = await request.json()
  console.log("🚀 ~ POST ~ res:", res)
  const secret = request.nextUrl.searchParams.get('secret')
  // const path = request.nextUrl.searchParams.get('tag')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // revalidatePath(path)
  return Response.json({ revalidated: true, now: Date.now() })
}
