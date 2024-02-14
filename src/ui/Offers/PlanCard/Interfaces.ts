export type PlanCardProps = {
  title: string;
  prices: {
    actual: number;
    old: number;
    currency: string;
  }
  logo: string;
}
