import { OffersProps } from "./Interfaces";
import PlanCard from "./PlanCard";

export default function Offers({ plans }: OffersProps) {
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {plans.map((d, i) => (
        <PlanCard
          key={`card-${i}`}
          {...d}
        />
      ))}
    </ul>
  )
}
