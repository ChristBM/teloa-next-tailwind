import Link from "next/link";
import { RechargeBtnProps } from "./Interfaces";

export default function RechargeBtn({ href, text }: RechargeBtnProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-[328px] px-4 py-3 rounded-3 bg-plancton hover:bg-plancton-link text-lg text-center font-semibold text-arroz leading-7 desktop:w-[296px]"
    >
      {text}
    </Link>
  )
}
