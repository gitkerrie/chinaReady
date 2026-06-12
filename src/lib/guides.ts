export type GuideSection = {
  heading: string;
  /** Optional intro paragraph for the section. */
  body?: string;
  /** Ordered or unordered steps/points under the section. */
  items?: string[];
};

export type Faq = {
  q: string;
  a: string;
};

export type Guide = {
  slug: string;
  title: string;
  /** Short SEO-friendly summary (also used as meta description). */
  summary: string;
  /** Lucide icon name resolved in components/Icon.tsx */
  icon: string;
  /** Display order on the home grid. */
  order: number;
  /** ISO date string, shown as "Last updated". */
  lastUpdated: string;
  /** A high-intent long-tail phrase this page targets, e.g. "how to pay in China". */
  searchIntent: string;
  /** 3 quick takeaways shown at the top. */
  tldr: string[];
  /** Step-by-step / detailed sections. */
  sections: GuideSection[];
  /** Common pitfalls / FAQ. */
  faq: Faq[];
};

export const guides: Guide[] = [
  {
    slug: "payment",
    title: "Paying for Things in China",
    summary:
      "How to use Alipay and WeChat Pay as a foreigner, bind a foreign Visa/Mastercard, and when you still need cash.",
    icon: "credit-card",
    order: 1,
    lastUpdated: "2026-05-28",
    searchIntent: "how to pay in China as a foreigner",
    tldr: [
      "Install Alipay or WeChat Pay before you arrive and bind a Visa/Mastercard — almost everything is paid by QR code.",
      "You can pay without a Chinese bank account; foreign cards now work for most everyday purchases.",
      "Carry a little cash (small notes) as a backup for street vendors and rural areas.",
    ],
    sections: [
      {
        heading: "Alipay (the easiest option for tourists)",
        body: "Alipay's international version lets foreigners bind an overseas card and pay everywhere QR codes are accepted.",
        items: [
          "Download Alipay from the App Store / Google Play (do this before landing — see the Internet guide).",
          "Register with your foreign phone number and passport.",
          "Add a Visa, Mastercard, Diners, Discover or JCB card under 'Add a bank card'.",
          "For purchases under ~200 RMB you can use 'Tour Pass' / small-amount payments without full verification.",
          "To pay: open Alipay, tap 'Pay/Scan', and either scan the merchant's QR or show your payment code.",
        ],
      },
      {
        heading: "WeChat Pay",
        body: "WeChat Pay works similarly and is sometimes the only option a small merchant offers, so having both is ideal.",
        items: [
          "Inside WeChat go to 'Me' → 'Services' → 'Wallet' → add a foreign card.",
          "Verification with passport is required before larger payments.",
          "WeChat is also your main messaging app in China, so it's worth setting up regardless.",
        ],
      },
      {
        heading: "Cash and foreign cards",
        items: [
          "Cash is still accepted but increasingly rare; keep ¥100, ¥20 and ¥10 notes for taxis, markets and small shops.",
          "Foreign credit cards (swipe/tap) are only reliably accepted at airports, big hotels and some department stores.",
          "Exchange money at the airport or a bank branch; ATMs of Bank of China and ICBC usually accept foreign cards.",
        ],
      },
    ],
    faq: [
      {
        q: "My card keeps getting rejected when I try to bind it. Why?",
        a: "Most failures are because the app isn't updated to the latest international version, the card issuer is blocking a 'foreign' transaction (call them to whitelist it), or you exceeded the per-transaction limit. Try a different card brand (Visa vs Mastercard).",
      },
      {
        q: "Are there fees for foreigners?",
        a: "A small service fee (around 3%) may apply to single transactions above ~200 RMB on foreign cards. Below that there is usually no fee.",
      },
      {
        q: "Is there a daily or per-transaction limit?",
        a: "Yes. Foreign cards have per-transaction (~¥6,000) and annual limits. For big purchases, a hotel front desk card terminal is more reliable.",
      },
    ],
  },
  {
    slug: "internet-sim",
    title: "Internet, SIM Cards & VPN",
    summary:
      "How to stay connected in China: eSIM vs physical SIM, why you must install a VPN before you arrive, and which apps work.",
    icon: "wifi",
    order: 2,
    lastUpdated: "2026-06-02",
    searchIntent: "do I need a VPN in China",
    tldr: [
      "Install and test a VPN BEFORE you land — most VPN apps cannot be downloaded once you're in China.",
      "An eSIM bought before travel is the fastest way to get online the moment you arrive.",
      "Google, WhatsApp, Instagram and Facebook are blocked without a VPN — download offline maps in advance.",
    ],
    sections: [
      {
        heading: "Getting connected: eSIM vs physical SIM vs roaming",
        items: [
          "eSIM (easiest): buy from a provider like Airalo/Holafly before you fly; activate on arrival, no shop visit needed.",
          "Physical SIM: buy at the airport or a China Mobile/Unicom shop — bring your passport for registration.",
          "Roaming: simplest but expensive; fine for a very short trip if your carrier has a China day-pass.",
        ],
      },
      {
        heading: "VPN — set it up before you arrive",
        body: "China's firewall blocks many Western sites and, crucially, blocks the download pages of most VPN apps. If you wait until you land, you may be unable to install one.",
        items: [
          "Choose a paid, reputable VPN known to work in China and install it at home.",
          "Open it and confirm it connects successfully before your trip.",
          "Note: some international eSIMs route through foreign servers and bypass the firewall — check before relying on it.",
        ],
      },
      {
        heading: "Which apps work / what to use instead",
        items: [
          "Blocked without VPN: Google (Search, Maps, Gmail), WhatsApp, Instagram, Facebook, X, YouTube.",
          "Work fine: WeChat, Alipay, Apple services, Microsoft, most booking sites.",
          "Local replacements: Amap/Baidu Maps (navigation), Baidu (search), WeChat (messaging).",
        ],
      },
    ],
    faq: [
      {
        q: "Airport WiFi asks for a Chinese phone number to verify. What do I do?",
        a: "This is common. Use your eSIM/roaming data instead, or ask a staff member or hotel to help verify with their number.",
      },
      {
        q: "Is using a VPN legal for tourists?",
        a: "Tourists routinely use VPNs without issue. Use a personal, reputable service and avoid relying on free/unknown apps.",
      },
    ],
  },
  {
    slug: "transport",
    title: "Getting Around: Taxis, Metro & Trains",
    summary:
      "How to use DiDi in English, ride the metro, book high-speed trains, and navigate when Google Maps doesn't work.",
    icon: "train-front",
    order: 3,
    lastUpdated: "2026-05-30",
    searchIntent: "how to use DiDi taxi app in China",
    tldr: [
      "DiDi (China's Uber) has an English interface and takes foreign cards via Alipay — your main way to get around.",
      "Metro ticket machines have English; you can also pay with Alipay/WeChat QR at the gate.",
      "Book high-speed trains on Trip.com and collect/scan with your passport.",
    ],
    sections: [
      {
        heading: "Taxis & ride-hailing",
        items: [
          "Use the DiDi app (or 'DiDi' inside Alipay) — switch language to English in settings.",
          "Enter your destination; the app shows the price upfront and you pay in-app.",
          "From the airport: follow signs to the official taxi rank or the DiDi/ride-hail pickup zone — avoid touts offering rides.",
        ],
      },
      {
        heading: "Metro (subway)",
        items: [
          "Ticket machines in major cities have an English option; pay by cash or QR.",
          "Easiest: scan the Metro QR inside Alipay/WeChat at the gate — no ticket needed.",
          "Apps like 'MetroMan' show offline maps and routes.",
        ],
      },
      {
        heading: "High-speed trains",
        items: [
          "Book on Trip.com (English) — easier for foreigners than the official 12306 app.",
          "Bring your passport: it's your ticket. Tap your passport at the gate or collect a paper ticket at a counter.",
          "Arrive 30–45 min early for security and to find the right platform.",
        ],
      },
      {
        heading: "Bikes & navigation",
        items: [
          "Shared bikes (Meituan/HelloBike) unlock via Alipay — scan the QR on the bike.",
          "Google Maps is inaccurate in China; use Amap or Apple Maps for reliable directions.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I get a DiDi without speaking Chinese?",
        a: "Yes. The English app handles everything, and you can send the driver a templated message. The destination is set in-app so no spoken address is needed.",
      },
      {
        q: "Do I need to book trains in advance?",
        a: "Popular routes (and holidays) sell out, so book a few days ahead. Off-peak, same-day is usually fine.",
      },
    ],
  },
  {
    slug: "language",
    title: "Language & Communication",
    summary:
      "Best translation apps, how to handle Chinese-only QR menus, and essential phrases with pinyin for emergencies.",
    icon: "languages",
    order: 4,
    lastUpdated: "2026-05-20",
    searchIntent: "best translation app for China travel",
    tldr: [
      "A camera-translate app (Google Translate offline pack, or Baidu Translate) handles most menus and signs.",
      "Many restaurants use Chinese-only QR-code ordering — show staff your translated order or point at photos.",
      "Learn a few key phrases; locals are very helpful when you make an effort.",
    ],
    sections: [
      {
        heading: "Translation apps",
        items: [
          "Download the offline Chinese pack in Google Translate before you arrive (works without a VPN once offline).",
          "Baidu Translate works locally without a VPN and has strong camera translation.",
          "Use camera mode to translate menus, signs and labels in real time.",
        ],
      },
      {
        heading: "Ordering food when the menu is a QR code",
        items: [
          "Scan the QR (often in WeChat/Alipay) — then use your phone's translate to read the page.",
          "If it's too complex, ask staff for a paper menu or point at dishes/photos.",
          "Show a translated sentence like 'I am vegetarian' or 'no peanuts' for dietary needs.",
        ],
      },
      {
        heading: "Essential phrases",
        items: [
          "Hello — 你好 (Nǐ hǎo)",
          "Thank you — 谢谢 (Xièxie)",
          "How much? — 多少钱？(Duōshao qián?)",
          "I don't want it spicy — 不要辣 (Bú yào là)",
          "Where is the toilet? — 厕所在哪里？(Cèsuǒ zài nǎlǐ?)",
          "I don't understand — 我听不懂 (Wǒ tīng bu dǒng)",
        ],
      },
    ],
    faq: [
      {
        q: "Will people speak English?",
        a: "In big-city hotels and tourist sites, often yes. Day to day (taxis, small shops), assume no — a translation app bridges the gap easily.",
      },
    ],
  },
  {
    slug: "visa-entry",
    title: "Visas & Entry Rules",
    summary:
      "China's visa-free transit policy, how long you can stay, which cities are covered, and accommodation registration rules.",
    icon: "stamp",
    order: 5,
    lastUpdated: "2026-06-05",
    searchIntent: "China visa free transit 144 hours",
    tldr: [
      "Many nationalities can enter visa-free for short stays under transit policies — check the latest rules for your passport.",
      "Visa-free transit is limited to specific ports of entry and regions, and you must have an onward ticket to a third country.",
      "You must register your accommodation within 24 hours — hotels do this automatically; private stays require a police visit.",
    ],
    sections: [
      {
        heading: "Visa-free transit (the policy that changed everything)",
        body: "China expanded visa-free transit (commonly 144 hours / 6 days, with some areas allowing longer) for travelers passing through to a third country. Because the eligible nationalities, ports and regions change, always confirm the current rules before booking.",
        items: [
          "You need a confirmed onward ticket to a third country (not back to where you came from, in most cases).",
          "Entry must be through an eligible port; stays are limited to specified provinces/cities.",
          "Overstaying the transit window has penalties — count your hours carefully.",
        ],
      },
      {
        heading: "Tourist (L) visa",
        items: [
          "Apply at a Chinese embassy/consulate or visa center before travel.",
          "Typical documents: passport, photo, itinerary, hotel bookings and return flights.",
          "Processing usually takes about a week; allow more time in busy seasons.",
        ],
      },
      {
        heading: "Arrival & accommodation registration",
        items: [
          "Fill in the arrival card and pass immigration and customs.",
          "Hotels register your stay automatically when you check in with your passport.",
          "If you stay in an Airbnb or with friends, you must register at the local police station (派出所) within 24 hours.",
        ],
      },
    ],
    faq: [
      {
        q: "How accurate is this page?",
        a: "Visa rules change frequently. Treat this as orientation only and verify against your nearest Chinese embassy/consulate or official immigration sources before you travel. Note the 'Last updated' date above.",
      },
      {
        q: "What happens if I don't register a private stay?",
        a: "It can cause problems on exit or with police checks. It's a quick, free process at the local station — bring your passport and host's address.",
      },
    ],
  },
  {
    slug: "safety-emergency",
    title: "Safety & Emergencies",
    summary:
      "Emergency numbers, how to get medical help, common scams to avoid, and practical safety tips for travelers in China.",
    icon: "shield-alert",
    order: 6,
    lastUpdated: "2026-05-15",
    searchIntent: "emergency numbers and scams in China",
    tldr: [
      "Emergency numbers: Police 110, Ambulance 120, Fire 119. English support is limited — have a translation app ready.",
      "China is generally very safe for tourists, including at night in major cities.",
      "Watch for a few classic scams: the 'tea house', fake taxis, and 'art student' invitations.",
    ],
    sections: [
      {
        heading: "Emergency numbers",
        items: [
          "Police — 110",
          "Ambulance / medical — 120",
          "Fire — 119",
          "Operators may not speak English; ask hotel staff to call, or use a translation app.",
        ],
      },
      {
        heading: "Medical help",
        items: [
          "For non-emergencies, large public hospitals and international clinics in big cities have foreigner services.",
          "You'll usually pay upfront and claim back on travel insurance — keep receipts.",
          "Bring any prescription medication with documentation; some drugs common abroad are restricted in China.",
        ],
      },
      {
        heading: "Common scams to avoid",
        items: [
          "Tea house / bar scam: a friendly stranger invites you in, then you face a huge bill. Decline invitations from strangers.",
          "Fake taxis: only use official taxis or DiDi; never accept rides from people approaching you at the airport.",
          "'Art student' scam: pressure to buy overpriced 'student' artwork — politely walk away.",
        ],
      },
      {
        heading: "Practical tips",
        items: [
          "Drink bottled or boiled water, not tap water.",
          "Keep a photo of your passport and your hotel's name/address in Chinese.",
          "Solo and female travelers generally report feeling safe; normal precautions apply.",
        ],
      },
    ],
    faq: [
      {
        q: "Is it safe to walk around at night?",
        a: "Major Chinese cities are among the safer places to walk at night. Use common-sense precautions as you would anywhere.",
      },
    ],
  },
];

export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) => a.order - b.order);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
