import { Metadata } from "next";
import { notFound } from "next/navigation";

import NavBar from "@/ui/NavBar";
import HeaderSection from "@/ui/HeaderSection";
import { CARRIERS, LandingCarrier, Locale } from "@/common/definitions";
import { getCollection } from "@/lib/data";

const type = 'acquisition'

export const metadata: Metadata = {
  title: 'Carrier',
};

export async function generateStaticParams() {
  const collection = await getCollection(type)

  return collection.schema.attributes.carrier.enum as LandingCarrier[]
};

export default async function AcquisitionCarrierPage({
  params: { lng, carrier },
} : {
  params: { lng: Locale; carrier: LandingCarrier; },
}) {
  if (CARRIERS[carrier] === undefined) return notFound()

  return (
    <div className="relative bg-gradient-header">
      <NavBar lng={lng} actualPath={`/landing/${type}/${carrier}`} />

      <HeaderSection lng={lng} type={type} carrier={carrier} />
    </div>
  )
}
