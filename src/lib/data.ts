import { draftMode } from 'next/headers'
import { LandingCarrier, LandingType, Locale } from "@/common/definitions"

const api = process.env.API_URL

export async function getLanding({
  type, carrier, lng, publicationState = 'live'
}: { type: LandingType; carrier: LandingCarrier; lng: Locale; publicationState?: 'live' | 'preview'; }
) {
  const { isEnabled } = draftMode()

  const url = isEnabled || publicationState === 'preview'
    ? `${api}/landing-${type}s?locale=${lng}&publicationState=preview&filters[publishedAt][$null]=true&filters[carrier][$eq]=${carrier}&populate=title,logo,carrier_plan.logo`
    : `${api}/landing-${type}s?locale=${lng}&publicationState=live&filters[carrier][$eq]=${carrier}&populate=title,logo,carrier_plan.logo`

  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const { data } = await res.json() // data, meta

  if (data.length === 0) return null

  const { attributes } = data[0] // id, attributes

  const landing = {
    title: attributes.title,
    logo: attributes.logo.data.attributes.url,
    plans: attributes['carrier_plan'].map((plan: any) => ({
      id: plan.id,
      title: plan.text,
      prices: {
        actual: plan['new_price'],
        old: plan['old_price'],
        currency: plan.currency
      },
      logo: plan.logo.data.attributes.url,
    })),
  }

  return landing
}
