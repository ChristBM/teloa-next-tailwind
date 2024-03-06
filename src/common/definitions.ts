export type Locale = 'en' | 'es'; // {lng}

export type LandingType = 'acquisition' | 'acquisition-multi-carrier' | 'promotion' | 'promotion-multi-carrier' // {type}

export const landingTypeParams: LandingType[] = ['acquisition' , 'acquisition-multi-carrier', 'promotion', 'promotion-multi-carrier']

export const TYPE: Record<LandingType, string> = {
  'acquisition': 'acquisition',
  'acquisition-multi-carrier': 'acquisition-multi-carrier',
  'promotion': 'promotion',
  'promotion-multi-carrier': 'promotion-multi-carrier',
}

export type LandingCarrier = 'net10-wireless' | 'lyca-mobile' | 't-mobile' // {carrier}

export const CARRIERS: Record<LandingCarrier, string> = {
  'net10-wireless': 'net10-wireless',
  'lyca-mobile': 'lyca-mobile',
  't-mobile': 't-mobile',
}

export const landingCarrierParams:  LandingCarrier[] = ['net10-wireless' , 'lyca-mobile' , 't-mobile']
