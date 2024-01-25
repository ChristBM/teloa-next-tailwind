import Image from "next/image";
import RechargeBtn from "../RechargeBtn/RechargeBtn";
import Offers from "../Offers/Offers";
import { OffersProps } from "../Offers/Interfaces";

export default async function HeaderSection({ lang }: { lang: string }) {
  // here are the calls to the api to get the header depending on the selected language
  const logo = '/en/net10.svg'

  const title = lang === 'es'
    ? 'Recargas de Net10 Wireless con $5 de descuento'
    : 'Net10 Wireless refills with $5 discount';

  const cardData: OffersProps = {
    data: [
      {
        title: lang === 'es' ? 'Plan Net10 Ilimitado Plus' : 'Net10 Unlimited Plus Plan',
        prices: {
          actual: 70,
          old: 75,
          currency: '$'
        },
        logo,
      },
      {
        title: lang === 'es' ? 'Plan Net10 Balanceado' : 'Net10 Balanced Plan',
        prices: {
          actual: 50,
          old: 55,
          currency: '$'
        },
        logo,
      },
      {
        title: lang === 'es' ? 'Plan Net10 Paquete Inicial' : 'Net10 Starter Plan',
        prices: {
          actual: 30,
          old: 35,
          currency: '$'
        },
        logo,
      },
    ]
  }

  // ------- this is an example of data --------

  return (
    <section className="flex flex-col items-center w-full h-max px-3 gap-8">
      <div className="flex flex-col items-center w-full h-max mt-6 gap-4">
        <Image
          src={logo}
          alt="company logo"
          width={160}
          height={73}
          className="block h-auto w-auto mx-2"
        />

        <h1
          className="py-1 font-semibold text-2xl text-ballena text-center leading-10 dark:text-arroz desktop:text-4xl desktop:leading-11 desktop:font-bold"
        >
          {title}
        </h1>
      </div>

      <Offers data={cardData.data} />

      <RechargeBtn href={`/${lang}/recharges`} lang={lang} />

      <div
        className="w-[328px] h-[82px] my-[48px] bg-tiburon"
      >
        stats here...
      </div>
    </section>
  )
}
