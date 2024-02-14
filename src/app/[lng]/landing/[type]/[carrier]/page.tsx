import { Metadata } from "next";
import { notFound } from "next/navigation";

import { CARRIERS, LandingCarrier, LandingType, Locale, landingCarrierParams } from "@/common/definitions";
import AcquisitionDesign1 from "./(acquisition)/AcquisitionDesign1";
import AcquisitionDesign2 from "./(acquisition)/AcquisitionDesign2";
import AcquisitionDesign3 from "./(acquisition)/AcquisitionDesign3";
import ResurrectionDesign1 from "./(resurrection)/ResurrectionDesign1";
import RetentionDesign1 from "./(retention)/RetentionDesign1";
import RetentionDesign2 from "./(retention)/RetentionDesign2";

export const metadata: Metadata = {
  title: 'Carrier',
};

export async function generateStaticParams() {
  return landingCarrierParams.map((type) => ({ type }))
};

export default async function CarrierPage({
  params: { lng, type, carrier },
  searchParams: { design }
} : {
  params: { lng: Locale; type: LandingType; carrier: LandingCarrier; },
  searchParams: { design: string }
}) {
  if (CARRIERS[carrier] === undefined) return notFound()

  if (type === 'acquisition' && (design === undefined || design === '1')) return <AcquisitionDesign1 lng={lng} type={type} carrier={carrier} />
  if (type === 'acquisition' && design === '2') return <AcquisitionDesign2 />
  if (type === 'acquisition' && design === '3') return <AcquisitionDesign3 />

  if (type === 'resurrection' && (design === undefined || design === '1')) return <ResurrectionDesign1 />

  if (type === 'retention' && (design === undefined || design === '1')) return <RetentionDesign1 />
  if (type === 'retention' && design === '2') return <RetentionDesign2 />

  return notFound()
}
