import { Suspense } from "react";
import ModeBtn from "@/ui/ModeBtn";
import NavBar from "@/ui/NavBar";
import HeaderSection from "@/ui/HeaderSection";
import { LandingCarrier, LandingType, Locale } from "@/common/definitions";

export type Props = {
  lng: Locale;
  type: LandingType;
  carrier: LandingCarrier;
}

export default function AcquisitionDesign1({
  lng,
  type,
  carrier
}: Props) {
  return (
    <div className="relative bg-gradient-header">
      <div className="fixed w-max h-max right-4 bottom-4 z-10">
        <ModeBtn />
      </div>

      <NavBar lng={lng} actualPath={`/landing/${type}/${carrier}`} />

      <Suspense key={lng + 'header'} fallback={<p>Loading...</p>}>
        <HeaderSection lng={lng} type={type} carrier={carrier} />
      </Suspense>
    </div>
  )
}
