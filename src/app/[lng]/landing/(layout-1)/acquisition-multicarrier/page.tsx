import { LandingCarrier, Locale } from "@/common/definitions";
import { getLanding } from "@/lib/data";
import { landingMultiCarrierData } from "@/lib/landingData";

const type = 'acquisition-multi-carrier'

export default async function AcquisitionMultiCarrierPage({
  params: { lng, carrier },
} : {
  params: { lng: Locale; carrier: LandingCarrier; },
}) {
  const data = await getLanding({ type, carrier, lng })
  const attributes = landingMultiCarrierData(data)

  return (
    <div>
      <h1>{attributes.title}</h1>
    </div>
  );
}
