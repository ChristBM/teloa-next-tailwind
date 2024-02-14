import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { languages } from '@/app/i18n/settings'
import { Locale } from '@/common/definitions';

export default async function LangBtn({ lng, actualPath }: { lng: Locale; actualPath: string; }) {
  const { t } = await useTranslation(lng)

  return (
    <>
      {languages.filter((l) => lng !== l).map((l) => {
        return (
          <span key={l}>
            <Link
              href={`/${l}${actualPath}`}
              className="flex items-center justify-center h-fit py-1 px-3 border border-solid rounded-2 bg-arroz text-base text-center capitalize font-semibold leading-6 text-ballena hover:bg-lenguado"
            >
              {t('languageSwitcher')}
            </Link>
          </span>
        )
      })}
    </>
  )
}
