import Image from "next/image";
import { PlanCardProps } from "./Interfaces";

export default function PlanCard({
  title,
  logo,
  prices: { actual, old, currency },
}: PlanCardProps) {
  return (
    <div className="flex w-[328px] h-20 py-2 pl-3 pr-1 gap-3 rounded-1 bg-arroz shadow-card-1 desktop:w-[280px]">
      <section className="flex flex-col items-start justify-center w-full h-fit">
        <p
          className="text-md text-ballena leading-5"
        >{title}</p>

        <p
          className="text-xl font-semibold text-ballena leading-8"
        >{`${currency}${actual}`}
          <span
            className="ml-sm text-base font-normal text-tiburon leading-6 line-through"
          >{`${currency}${old}`}</span>
        </p>
      </section>

      <section className="flex justify-center items-center w-14 h-14">
        <Image
          src={logo}
          alt="company logo"
          width={32}
          height={14}
          className="block"
        />
      </section>
    </div>
  )
}
