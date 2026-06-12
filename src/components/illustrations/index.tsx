import {
  PaymentArt,
  InternetArt,
  TransportArt,
  LanguageArt,
  VisaArt,
  SafetyArt,
} from "./ThemeArt";

export { HeroArt } from "./HeroArt";
export { JourneyArt } from "./JourneyArt";

type ArtComponent = (props: { className?: string }) => JSX.Element;

const bySlug: Record<string, ArtComponent> = {
  payment: PaymentArt,
  "internet-sim": InternetArt,
  transport: TransportArt,
  language: LanguageArt,
  "visa-entry": VisaArt,
  "safety-emergency": SafetyArt,
};

/** Maps a guide slug to its themed illustration (mirrors Icon.tsx's map pattern). */
export function GuideArt({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Cmp = bySlug[slug] ?? PaymentArt;
  return <Cmp className={className} />;
}
