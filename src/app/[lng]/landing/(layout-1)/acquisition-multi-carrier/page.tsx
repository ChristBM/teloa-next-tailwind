import { Locale } from "@/common/definitions";
import { getData } from "@/lib/data";
import { landingMultiCarrierData } from "@/lib/landingData";

const type = 'acquisition-multi-carrier'

export default async function AcquisitionMultiCarrierPage({
  params: { lng },
} : {
  params: { lng: Locale },
}) {
  const data = await getData({ path: `/${lng}/landing/${type}`, populate: 'populate=title,logos' })
  const attributes = landingMultiCarrierData(data)

  return (
    <div>
      <h1>{attributes.title}</h1>
    </div>
  );
}
