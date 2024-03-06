import { Metadata } from "next";
import Link from "next/link";

import { useTranslation } from "../i18n";
import { Locale } from "@/common/definitions";

export const metadata: Metadata = {
  title: 'Home | Teloa',
};

export default async function Home({ params: { lng } }: { params: { lng: Locale }}) {
  const { t } = await useTranslation(lng)

  return (
    <main>
      <h1>{t('title')}</h1>

      <Link href={`${lng}/landing/acquisition/net10-wireless`} className="text-plancton-link underline">
        {t('to-acquisition-page-net10-wireless')}
      </Link>

      <br/>

      <Link href={`${lng}/landing/acquisition/lyca-mobile`} className="text-plancton-link underline">
        {t('to-acquisition-page-lyca-mobile')}
      </Link>

      <br/>

      <Link href={`${lng}/landing/acquisition-multicarrier`} className="text-plancton-link underline">
        {t('to-acquisition-multi-carrier')}
      </Link>

      <br/>

      <Link href={`${lng}/landing/promotion`} className="text-plancton-link underline">
        {t('to-promotion')}
      </Link>

      <br/>

      <Link href={`${lng}/landing/promotion-multicarrier`} className="text-plancton-link underline">
        {t('to-promotion-multi-carrier')}
      </Link>
    </main>
  );
}
