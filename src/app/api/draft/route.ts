import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getDraft } from '@/lib/getDraft'

const apiEndpoint: { [key: string]: string } = {
  'acquisition': 'acquisitions',
  'acquisition-multi-carrier': 'acquisition-multi-carriers'
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const path = searchParams.get('path')
  const filters = searchParams.get('filters')

  if (secret !== process.env.DRAFT_SECRET || !path) {
    return new Response('Invalid token', { status: 401 })
  }

  const splitPath = path.split('/')
  const lngFilter = `locale=${splitPath[0]}`;
  const endpoint = apiEndpoint[splitPath[2]];
  const stateFilter = 'publicationState=preview&filters[publishedAt][$null]=true'

  let myURL = `${process.env.API_URL}/${endpoint}?${lngFilter}&${stateFilter}`

  if(filters && filters.length) {
    const splitFilters = filters.split(',')

    splitFilters.forEach((filter) => {
      const filterElements = filter.split('=')
      const name = filterElements[0]
      const value = filterElements[1]

      myURL = myURL + `&filters[${name}][$eq]=${value}`
    })
  }

  const post = await getDraft(myURL)

  if (!post) return new Response('Invalid slug', { status: 401 })

  draftMode().enable()

  redirect(`${process.env.BASE_URL}${path}`)
}
