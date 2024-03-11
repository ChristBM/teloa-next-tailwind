import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getData } from '@/lib/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const path = searchParams.get('path')

  if (secret !== process.env.DRAFT_SECRET || !path) {
    return new Response('Invalid token or path', { status: 401 })
  }

  const data = await getData({ path, draft: true })

  if (!data) return new Response('Invalid slug', { status: 401 })

  draftMode().enable()

  redirect(`${process.env.BASE_URL}${path}`)
}
