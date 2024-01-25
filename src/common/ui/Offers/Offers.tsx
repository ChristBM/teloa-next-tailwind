import { OffersProps } from "./Interfaces";
import PlanCard from "./PlanCard/PlanCard";

export default function Offers({ data }: OffersProps) {
  return (
    <ul className="flex flex-wrap gap-2 justify-center">

      {data.map((d, i) => (
        <PlanCard
          key={`card-${i}`}
          {...d}
        />
      ))}
    </ul>
  )
}
