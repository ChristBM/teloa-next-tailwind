import { Locale } from "@/common/definitions";

export type Options = {
  lng?: Locale;
  ns?: string;
}

export const fallbackLng: Locale = 'en'
export const languages: Locale[] = [fallbackLng, 'es']
export const defaultNS: string = 'translations'
export const cookieName: string = 'i18next'

export function getOptions({
  lng = fallbackLng,
  ns = defaultNS
}: Options) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
