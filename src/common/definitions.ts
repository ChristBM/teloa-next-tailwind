export type Locale = 'en' | 'es'; // {lng}

export type LandingType = 'acquisition' | 'acquisition-multi-carrier' | 'promotion' | 'promotion-multi-carrier' // {type}

export type LandingCarrier = 'net10-wireless' | 'lyca-mobile' | 't-mobile' // {carrier}

export const CARRIERS: Record<LandingCarrier, string> = {
  'net10-wireless': 'net10-wireless',
  'lyca-mobile': 'lyca-mobile',
  't-mobile': 't-mobile',
}
