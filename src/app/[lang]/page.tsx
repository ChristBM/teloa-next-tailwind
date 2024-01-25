import { Metadata } from "next";
import Link from "next/link";
import { Locale } from "../../../i18n-config";

export const metadata: Metadata = {
  title: 'Home | Teloa',
};

export default function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const nextUrl = lang !== 'en' && lang !== 'es' ? '/en/acquisition' : `${lang}/acquisition` ;

  return (
    <main>
      <Link href={nextUrl} className="text-plancton-link underline">
        Go to Acquisition
      </Link>
    </main>
  );
}
