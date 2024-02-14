import { LandingType, Locale, TYPE, landingCarrierParams, landingTypeParams } from "@/common/definitions";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Carrier',
};

export async function generateStaticParams() {
  return landingTypeParams.map((type) => ({ type }))
};

export default function LandingTypePage({
  params: { lng, type }
}: { params: { lng: Locale; type: LandingType };
}) {
  if (TYPE[type] === undefined) return notFound()

  return (
    <div>
      <h1>Landing: {type}</h1>

      <br />

      <h2>Carriers:</h2>

      <ul>
        {landingCarrierParams.map((carrier) => (
          <li key={carrier}>
            <Link
              href={`/${lng}/landing/${type}/${carrier}`}
              className="text-plancton-link underline"
            >
              {carrier}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
