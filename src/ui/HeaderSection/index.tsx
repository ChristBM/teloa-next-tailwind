import Image from "next/image";
import { notFound } from "next/navigation";

import { useTranslation } from "@/app/i18n";
import { getData } from "@/lib/data";

import Offers from "@/ui/Offers";
import RechargeBtn from "@/ui/RechargeBtn";
import { LandingCarrier, LandingType, Locale } from "@/common/definitions";
import { landingData } from "@/lib/landingData";

export default async function HeaderSection({
  lng,
  type,
  carrier,
} : { lng: Locale; type: LandingType; carrier: LandingCarrier; }
) {
  const data = await getData({ path: `/${lng}/landing/${type}/${carrier}`, populate: 'populate=title,logo,carrier_plan.logo' })
  const landing = landingData(data)

  const { t } = await useTranslation(lng)

  if(!landing) return notFound()

  const { title, logo, plans } = landing

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

      <Offers plans={plans} />

      <RechargeBtn href={`/${lng}/recharges`} text={t('rechargeBtn')} />

      <div
        className="w-[328px] h-[82px] my-[48px] bg-tiburon"
      >
        stats here...
      </div>
    </section>
  )
}
