import {
  CreditCard,
  Wifi,
  TrainFront,
  Languages,
  Stamp,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "credit-card": CreditCard,
  wifi: Wifi,
  "train-front": TrainFront,
  languages: Languages,
  stamp: Stamp,
  "shield-alert": ShieldAlert,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? CreditCard;
  return <Cmp className={className} aria-hidden />;
}
