export type GuideItem = {
  text: string;
  /** Optional illustration — path relative to public/ */
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  /** Optional link to the official source / help page for verification. */
  source?: {
    url: string;
    label?: string; // defaults to "Official guide"
  };
};

export type GuideSection = {
  heading: string;
  /** Optional intro paragraph for the section. */
  body?: string;
  /** Optional illustration for the section as a whole. */
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  /** Optional official source for the section. */
  source?: {
    url: string;
    label?: string;
  };
  /** Ordered or unordered steps/points under the section. */
  items?: GuideItem[];
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
        source: {
          url: "https://www.alipayplus.com/consumer",
          label: "Alipay+ Consumer Guide",
        },
        items: [
          {
            text: "Download Alipay from the App Store / Google Play (do this before landing — see the Internet guide).",
            source: { url: "https://www.alipayplus.com/consumer", label: "Alipay+ Guide" },
          },
          {
            text: "Register with your foreign phone number and passport.",
            source: { url: "https://www.alipayplus.com/consumer", label: "Alipay+ Guide" },
          },
          {
            text: "Add a Visa, Mastercard, Diners, Discover or JCB card under 'Add a bank card'.",
            source: { url: "https://www.alipayplus.com/consumer", label: "Alipay+ Guide" },
          },
          {
            text: "For purchases under ~200 RMB you can use 'Tour Pass' / small-amount payments without full verification.",
          },
          {
            text: "To pay: open Alipay, tap 'Pay/Scan', and either scan the merchant's QR or show your payment code.",
          },
        ],
      },
      {
        heading: "WeChat Pay",
        body: "WeChat Pay works similarly and is sometimes the only option a small merchant offers, so having both is ideal.",
        source: {
          url: "https://pay.weixin.qq.com/index.php/public/wechatpay_en",
          label: "WeChat Pay Official",
        },
        items: [
          {
            text: "Inside WeChat go to 'Me' → 'Services' → 'Wallet' → add a foreign card.",
            source: { url: "https://pay.weixin.qq.com/index.php/public/wechatpay_en", label: "WeChat Pay Official" },
          },
          {
            text: "Verification with passport is required before larger payments.",
            source: { url: "https://pay.weixin.qq.com/index.php/public/wechatpay_en", label: "WeChat Pay Official" },
          },
          {
            text: "WeChat is also your main messaging app in China, so it's worth setting up regardless.",
          },
        ],
      },
      {
        heading: "Cash and foreign cards",
        items: [
          { text: "Cash is still accepted but increasingly rare; keep ¥100, ¥20 and ¥10 notes for taxis, markets and small shops." },
          { text: "Foreign credit cards (swipe/tap) are only reliably accepted at airports, big hotels and some department stores." },
          { text: "Exchange money at the airport or a bank branch; ATMs of Bank of China and ICBC usually accept foreign cards." },
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
          {
            text: "eSIM (easiest): buy from a provider like Airalo/Holafly before you fly; activate on arrival, no shop visit needed.",
            image: {
              src: "/guides/internet-sim/holafly-iphone-qr-install-1.png",
              alt: "Step 1: Install eSIM via QR code on iPhone — open Settings → Cellular → Add eSIM",
              caption: "iPhone eSIM setup (Holafly)",
            },
            source: { url: "https://support.apple.com/en-us/118669", label: "Apple eSIM Setup Guide" },
          },
          {
            text: "Physical SIM: buy at the airport or a China Mobile/Unicom shop — bring your passport for registration.",
          },
          {
            text: "Roaming: simplest but expensive; fine for a very short trip if your carrier has a China day-pass.",
          },
        ],
      },
      {
        heading: "VPN — set it up before you arrive",
        body: "China's firewall blocks many Western sites and, crucially, blocks the download pages of most VPN apps. If you wait until you land, you may be unable to install one.",
        source: {
          url: "https://www.expressvpn.com/support/",
          label: "ExpressVPN Support",
        },
        items: [
          {
            text: "Choose a paid, reputable VPN known to work in China and install it at home.",
            source: { url: "https://www.expressvpn.com/support/", label: "ExpressVPN Setup" },
          },
          {
            text: "Open it and confirm it connects successfully before your trip.",
            source: { url: "https://www.expressvpn.com/support/", label: "ExpressVPN Troubleshooting" },
          },
          {
            text: "If already in China, use alternative download links provided by your VPN provider.",
            image: {
              src: "/guides/internet-sim/holafly-iphone-activation-1.png",
              alt: "eSIM activation confirmation on iPhone — showing the cellular plan is ready",
              caption: "eSIM activation confirmation",
            },
            source: { url: "https://www.expressvpn.com/support/", label: "ExpressVPN Alt Downloads" },
          },
          {
            text: "Note: some international eSIMs route through foreign servers and bypass the firewall — check before relying on it.",
          },
        ],
      },
      {
        heading: "Which apps work / what to use instead",
        items: [
          { text: "Blocked without VPN: Google (Search, Maps, Gmail), WhatsApp, Instagram, Facebook, X, YouTube." },
          { text: "Work fine: WeChat, Alipay, Apple services, Microsoft, most booking sites." },
          { text: "Local replacements: Amap/Baidu Maps (navigation), Baidu (search), WeChat (messaging)." },
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
        source: { url: "https://www.didiglobal.com/en-US", label: "DiDi Official" },
        items: [
          {
            text: "Use the DiDi app (or 'DiDi' inside Alipay) — switch language to English in settings.",
            source: { url: "https://www.didiglobal.com/en-US", label: "DiDi Official" },
          },
          { text: "Enter your destination; the app shows the price upfront and you pay in-app." },
          { text: "From the airport: follow signs to the official taxi rank or the DiDi/ride-hail pickup zone — avoid touts offering rides." },
        ],
      },
      {
        heading: "Metro (subway)",
        items: [
          { text: "Ticket machines in major cities have an English option; pay by cash or QR." },
          { text: "Easiest: scan the Metro QR inside Alipay/WeChat at the gate — no ticket needed." },
          { text: "Apps like 'MetroMan' show offline maps and routes." },
        ],
      },
      {
        heading: "High-speed trains",
        source: { url: "https://www.trip.com/trains/", label: "Trip.com Trains" },
        items: [
          {
            text: "Book on Trip.com (English) — easier for foreigners than the official 12306 app.",
            source: { url: "https://www.trip.com/trains/", label: "Trip.com Trains" },
          },
          {
            text: "Bring your passport: it's your ticket. Tap your passport at the gate or collect a paper ticket at a counter.",
          },
          { text: "Arrive 30–45 min early for security and to find the right platform." },
        ],
      },
      {
        heading: "Bikes & navigation",
        items: [
          { text: "Shared bikes (Meituan/HelloBike) unlock via Alipay — scan the QR on the bike." },
          { text: "Google Maps is inaccurate in China; use Amap or Apple Maps for reliable directions." },
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
          {
            text: "Download the offline Chinese pack in Google Translate before you arrive (works without a VPN once offline).",
            source: { url: "https://support.google.com/translate/answer/6142468", label: "Google Translate Help" },
          },
          {
            text: "Baidu Translate works locally without a VPN and has strong camera translation.",
            source: { url: "https://fanyi.baidu.com/app/help", label: "Baidu Translate Help" },
          },
          {
            text: "Use camera mode to translate menus, signs and labels in real time.",
            source: { url: "https://support.google.com/translate/answer/6142469", label: "Google Camera Translate" },
          },
        ],
      },
      {
        heading: "Ordering food when the menu is a QR code",
        items: [
          { text: "Scan the QR (often in WeChat/Alipay) — then use your phone's translate to read the page." },
          { text: "If it's too complex, ask staff for a paper menu or point at dishes/photos." },
          { text: "Show a translated sentence like 'I am vegetarian' or 'no peanuts' for dietary needs." },
        ],
      },
      {
        heading: "Essential phrases",
        items: [
          { text: "Hello — 你好 (Nǐ hǎo)" },
          { text: "Thank you — 谢谢 (Xièxie)" },
          { text: "How much? — 多少钱？(Duōshao qián?)" },
          { text: "I don't want it spicy — 不要辣 (Bú yào là)" },
          { text: "Where is the toilet? — 厕所在哪里？(Cèsuǒ zài nǎlǐ?)" },
          { text: "I don't understand — 我听不懂 (Wǒ tīng bu dǒng)" },
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
        image: {
          src: "/guides/visa-entry/nia-slide-1.jpg",
          alt: "China entry facilitation policy overview — visa-free transit infographic from the National Immigration Administration",
          caption: "Source: National Immigration Administration of China",
        },
        source: {
          url: "https://en.nia.gov.cn/n147418/n147463/c191648/content.html",
          label: "NIA Entry Facilitation Policies",
        },
        items: [
          {
            text: "You need a confirmed onward ticket to a third country (not back to where you came from, in most cases).",
            image: {
              src: "/guides/visa-entry/nia-slide-3.jpg",
              alt: "Onward ticket requirement for visa-free transit",
            },
            source: { url: "https://en.nia.gov.cn/n147418/n147463/c156086/content.html", label: "NIA Transit Policies" },
          },
          {
            text: "Entry must be through an eligible port; stays are limited to specified provinces/cities.",
            image: {
              src: "/guides/visa-entry/nia-slide-4.jpg",
              alt: "Eligible ports of entry and permitted regions for visa-free transit",
            },
            source: { url: "https://s.nia.gov.cn/mps/tztgEn/202412/t20241201_1210.html", label: "NIA 240-Hour Expansion" },
          },
          {
            text: "Overstaying the transit window has penalties — count your hours carefully.",
            image: {
              src: "/guides/visa-entry/nia-slide-6.jpg",
              alt: "Transit stay duration limits and overstay penalties",
            },
          },
        ],
      },
      {
        heading: "Tourist (L) visa",
        image: {
          src: "/guides/visa-entry/nia-slide-8.jpg",
          alt: "Tourist visa application requirements and process",
          caption: "Source: National Immigration Administration of China",
        },
        source: {
          url: "https://us.china-embassy.gov.cn/eng/lsfw/zj/qz2021/",
          label: "Chinese Embassy (USA) Visa Info",
        },
        items: [
          {
            text: "Apply at a Chinese embassy/consulate or visa center before travel.",
            source: { url: "https://us.china-embassy.gov.cn/eng/lsfw/zj/qz2021/", label: "Chinese Embassy Visa Info" },
          },
          { text: "Typical documents: passport, photo, itinerary, hotel bookings and return flights." },
          { text: "Processing usually takes about a week; allow more time in busy seasons." },
        ],
      },
      {
        heading: "Arrival & accommodation registration",
        image: {
          src: "/guides/visa-entry/nia-slide-10.jpg",
          alt: "Arrival and accommodation registration process",
          caption: "Source: National Immigration Administration of China",
        },
        items: [
          {
            text: "Fill in the arrival card and pass immigration and customs.",
            source: { url: "https://s.nia.gov.cn/ArrivalCardFillingPC/", label: "NIA Online Arrival Card" },
          },
          { text: "Hotels register your stay automatically when you check in with your passport." },
          { text: "If you stay in an Airbnb or with friends, you must register at the local police station (派出所) within 24 hours." },
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
        source: {
          url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html",
          label: "US State Dept — China Advisory",
        },
        items: [
          { text: "Police — 110" },
          { text: "Ambulance / medical — 120" },
          { text: "Fire — 119" },
          { text: "Tourist hotline — 12301 (may have English operators in major cities)" },
          { text: "Operators may not speak English; ask hotel staff to call, or use a translation app." },
        ],
      },
      {
        heading: "Medical help",
        items: [
          { text: "For non-emergencies, large public hospitals and international clinics in big cities have foreigner services." },
          {
            text: "Beijing United Family Hospital: 400-8919-191 (toll-free, English-speaking).",
            source: { url: "https://www.gov.uk/foreign-travel-advice/china/health", label: "UK FCDO Health Advice" },
          },
          { text: "You'll usually pay upfront and claim back on travel insurance — keep receipts." },
          { text: "Bring any prescription medication with documentation; some drugs common abroad are restricted in China." },
        ],
      },
      {
        heading: "Common scams to avoid",
        source: {
          url: "https://www.gov.uk/foreign-travel-advice/china/safety-and-security",
          label: "UK FCDO Safety & Security",
        },
        items: [
          { text: "Tea house / bar scam: a friendly stranger invites you in, then you face a huge bill. Decline invitations from strangers." },
          { text: "Fake taxis: only use official taxis or DiDi; never accept rides from people approaching you at the airport." },
          { text: "'Art student' scam: pressure to buy overpriced 'student' artwork — politely walk away." },
        ],
      },
      {
        heading: "Practical tips",
        items: [
          { text: "Drink bottled or boiled water, not tap water." },
          { text: "Keep a photo of your passport and your hotel's name/address in Chinese." },
          { text: "Solo and female travelers generally report feeling safe; normal precautions apply." },
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
