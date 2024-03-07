import { draftMode } from 'next/headers'
import { LandingCarrier, LandingType, Locale } from "@/common/definitions"

const apiURL = `${process.env.API_URL}api`

const apiEndpoint: { [key: string]: string } = {
  'acquisition': 'acquisitions',
  'acquisition-multi-carrier': 'acquisition-multi-carriers'
}

export async function getLanding({
  type, carrier, lng, publicationState = 'live'
}: { type: LandingType; carrier?: LandingCarrier; lng: Locale; publicationState?: 'live' | 'preview'; }
) {
  const { isEnabled } = draftMode()

  const lngFilter = `locale=${lng}`;
  const carrierFilter = carrier ? `filters[carrier][$eq]=${carrier}` : '';
  const stateFilter = isEnabled || publicationState === 'preview'
    ? 'publicationState=preview&filters[publishedAt][$null]=true'
    : 'publicationState=live';
  const populate = carrier ? 'populate=title,logo,carrier_plan.logo' : 'populate=title,logos';

  const url = `${apiURL}/${apiEndpoint[type]}?${lngFilter}&${stateFilter}&${carrierFilter}&${populate}`;
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await res.json() // data, meta

  return data
}
