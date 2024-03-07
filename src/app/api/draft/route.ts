import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getDraft } from '@/lib/getDraft'

const apiEndpoint: { [key: string]: string } = {
  'acquisition': 'acquisitions',
  'acquisition-multi-carrier': 'acquisition-multi-carriers'
}

const apiURL = `${process.env.API_URL}api`

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const path = searchParams.get('path')

  if (secret !== process.env.DRAFT_SECRET || !path) {
    return new Response('Invalid token or path', { status: 401 })
  }

  const removeFirstSlash = path.replace(/^\//, '')
  const splitPath = removeFirstSlash.split('/')
  const lngFilter = `locale=${splitPath[0]}`;
  const endpoint = apiEndpoint[splitPath[2]];
  const stateFilter = 'publicationState=preview&filters[publishedAt][$null]=true'

  let myURL = `${apiURL}/${endpoint}?${lngFilter}&${stateFilter}&filters[path][$eq]=${path}`

  const post = await getDraft(myURL)

  if (!post) return new Response('Invalid slug', { status: 401 })

  draftMode().enable()

  redirect(`${process.env.BASE_URL}${path}`)
}
