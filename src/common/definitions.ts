export type Locale = 'en' | 'es'; // {lng}

export type LandingType = 'retention' | 'acquisition' | 'resurrection' // {type}

export const landingTypeParams: LandingType[] = ['retention' , 'acquisition' , 'resurrection']

export const TYPE: Record<LandingType, string> = {
  'retention': 'Retention',
  'acquisition': 'Acquisition',
  'resurrection': 'Resurrection',
}

export type LandingCarrier = 'net10-wireless' | 'lyca-mobile' | 't-mobile' // {carrier}

export const CARRIERS: Record<LandingCarrier, string> = {
  'net10-wireless': 'Net10 Wireless',
  'lyca-mobile': 'Lyca Mobile',
  't-mobile': 'T-Mobile',
}

export const landingCarrierParams:  LandingCarrier[] = ['net10-wireless' , 'lyca-mobile' , 't-mobile']
