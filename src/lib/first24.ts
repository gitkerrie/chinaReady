export type ChecklistItem = {
  title: string;
  detail: string;
  /** Optional link to the related guide slug for more depth. */
  guideSlug?: string;
};

export type ChecklistPhase = {
  phase: string;
  description: string;
  items: ChecklistItem[];
};

export const first24Hours: ChecklistPhase[] = [
  {
    phase: "Before you board (do this at home)",
    description:
      "A handful of things are far easier — or only possible — before you enter China. Don't skip these.",
    items: [
      {
        title: "Install and test a VPN",
        detail:
          "Most VPN apps can't be downloaded inside China. Install a reputable paid VPN now and confirm it connects.",
        guideSlug: "internet-sim",
      },
      {
        title: "Buy an eSIM (or arrange roaming)",
        detail:
          "An eSIM activated on arrival gets you online instantly, before you find a SIM shop.",
        guideSlug: "internet-sim",
      },
      {
        title: "Install Alipay and/or WeChat Pay and bind a card",
        detail:
          "Set these up while you still have easy app-store access, and bind a Visa/Mastercard.",
        guideSlug: "payment",
      },
      {
        title: "Download offline maps + a translation app",
        detail:
          "Get Amap or offline Google/Apple Maps, plus Google Translate's offline Chinese pack or Baidu Translate.",
        guideSlug: "language",
      },
      {
        title: "Confirm your visa / transit eligibility & onward ticket",
        detail:
          "Check your visa-free transit window and that you have a qualifying onward ticket.",
        guideSlug: "visa-entry",
      },
    ],
  },
  {
    phase: "At the airport (first hour on the ground)",
    description: "You've landed. Here's the order of operations.",
    items: [
      {
        title: "Clear immigration & customs",
        detail:
          "Have your arrival card and passport ready. Keep your hotel address handy in Chinese.",
        guideSlug: "visa-entry",
      },
      {
        title: "Get online",
        detail:
          "Activate your eSIM or buy a physical SIM at an airport telecom counter (passport needed).",
        guideSlug: "internet-sim",
      },
      {
        title: "Open DiDi and head to the official ride zone",
        detail:
          "Use DiDi (English) or the airport metro/train. Ignore anyone offering you a private 'taxi'.",
        guideSlug: "transport",
      },
    ],
  },
  {
    phase: "Getting into the city & settling in",
    description: "Almost there. Lock these in and you're ready to explore.",
    items: [
      {
        title: "Pay your way into the city",
        detail:
          "Pay the taxi/train with Alipay or WeChat QR. Keep a little cash as backup.",
        guideSlug: "payment",
      },
      {
        title: "Check in & register your stay",
        detail:
          "Hotels register you automatically. Staying privately? Register at the local police station within 24h.",
        guideSlug: "visa-entry",
      },
      {
        title: "Save emergency numbers",
        detail: "Police 110, Ambulance 120, Fire 119. Note your hotel's name in Chinese.",
        guideSlug: "safety-emergency",
      },
    ],
  },
];
