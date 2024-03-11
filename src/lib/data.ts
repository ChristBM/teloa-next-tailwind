import { draftMode } from 'next/headers'

const apiURL = `${process.env.API_URL}api`

const apiEndpoint: { [key: string]: string } = {
  'acquisition': 'acquisitions',
  'acquisition-multi-carrier': 'acquisition-multi-carriers'
}

export async function getData({ path, populate = '*', draft }: { path: string; populate?: string; draft?: boolean }) {
  // Draft Mode
  const { isEnabled } = draftMode()
  // Path
  const removeFirstSlash = path.replace(/^\//, '') // from: /en/landing/acquisition/net10-wireless --> to --> en/landing/acquisition/net10-wireless
  const splitPath = removeFirstSlash.split('/') // [ 'en', 'landing', 'acquisition', 'net10-wireless' ]
  // Filters
  const Language = `locale=${splitPath[0]}`;
  const CollectionEndpoint = apiEndpoint[splitPath[2]];
  const Path = `filters[path][$eq]=${path}`;
  const State = isEnabled || draft ? 'publicationState=preview&filters[publishedAt][$null]=true' : 'publicationState=live';
  // URL
  const myURL = `${apiURL}/${CollectionEndpoint}?${Language}&${State}&${Path}&${populate}`
  // Fetch
  const res = await fetch(myURL)
  // Error
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  // Data
  const { data } = await res.json()
  return data
}

export async function getCollection(apiID: string) {
  const res = await fetch(`${process.env.API_URL}api/content-type-builder/content-types`, { cache: 'no-store'})
  // Error
  if (!res.ok) return []
  // Data
  const { data } = await res.json()
  // Find collection by apiID
  const collection = data.find((item: any) => item.apiID === apiID)
  return collection
}
