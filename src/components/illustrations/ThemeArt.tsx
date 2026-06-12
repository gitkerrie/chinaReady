type ArtProps = { className?: string };

/** Shared rounded banner background, brand-tinted. */
function Bg() {
  return <rect width="320" height="160" rx="16" fill="#fff1f0" />;
}

export function PaymentArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="Mobile payment by QR code" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Bg />
      {/* phone */}
      <rect x="118" y="34" width="64" height="100" rx="12" fill="#1f2937" />
      <rect x="125" y="44" width="50" height="80" rx="5" fill="#fff" />
      <g fill="#1f2937">
        <rect x="132" y="52" width="12" height="12" />
        <rect x="156" y="52" width="12" height="12" />
        <rect x="132" y="76" width="12" height="12" />
        <rect x="150" y="74" width="6" height="6" />
        <rect x="160" y="74" width="8" height="8" />
        <rect x="150" y="86" width="8" height="8" />
        <rect x="162" y="88" width="6" height="6" />
        <rect x="134" y="100" width="8" height="8" />
        <rect x="150" y="102" width="18" height="6" />
      </g>
      {/* coin */}
      <circle cx="74" cy="62" r="26" fill="#ff998c" />
      <circle cx="74" cy="62" r="18" fill="#f5391b" />
      <text x="74" y="69" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">¥</text>
      {/* card */}
      <g transform="rotate(-10 232 100)">
        <rect x="206" y="78" width="64" height="42" rx="6" fill="#f5391b" />
        <rect x="206" y="90" width="64" height="9" fill="#9c1612" />
        <rect x="213" y="106" width="22" height="6" rx="2" fill="#ffc2ba" />
      </g>
      {/* check sparkle */}
      <circle cx="196" cy="44" r="13" fill="#bd140d" />
      <path d="M190 44 l4 4 l8 -8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function InternetArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="Internet, SIM card and VPN connectivity" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Bg />
      {/* wifi arcs */}
      <g stroke="#f5391b" strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M104 96 a44 44 0 0 1 112 0" opacity="0.4" />
        <path d="M120 96 a30 30 0 0 1 80 0" opacity="0.7" />
        <path d="M136 96 a16 16 0 0 1 48 0" />
      </g>
      <circle cx="160" cy="102" r="8" fill="#bd140d" />
      {/* sim card */}
      <g transform="translate(40 54)">
        <path d="M0 8 a8 8 0 0 1 8 -8 h28 l16 16 v44 a8 8 0 0 1 -8 8 H8 a8 8 0 0 1 -8 -8 Z" fill="#ff998c" />
        <rect x="12" y="22" width="32" height="26" rx="4" fill="#bd140d" />
        <line x1="22" y1="22" x2="22" y2="48" stroke="#fff" strokeWidth="2" />
        <line x1="34" y1="22" x2="34" y2="48" stroke="#fff" strokeWidth="2" />
        <line x1="12" y1="35" x2="44" y2="35" stroke="#fff" strokeWidth="2" />
      </g>
      {/* shield (VPN) */}
      <g transform="translate(232 50)">
        <path d="M24 0 L48 10 V36 C48 54 24 64 24 64 C24 64 0 54 0 36 V10 Z" fill="#f5391b" />
        <path d="M14 32 l7 7 l13 -16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

export function TransportArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="Getting around by taxi, metro and train" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Bg />
      {/* rails */}
      <line x1="20" y1="128" x2="300" y2="128" stroke="#ffc2ba" strokeWidth="5" />
      {[40, 80, 120, 160, 200, 240, 280].map((x) => (
        <line key={x} x1={x} y1="122" x2={x} y2="134" stroke="#ff998c" strokeWidth="4" />
      ))}
      {/* high-speed train */}
      <g>
        <path d="M70 64 q40 -22 130 0 a10 10 0 0 1 10 10 v32 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 V74 a10 10 0 0 1 10 -10Z" fill="#f5391b" />
        <path d="M70 64 q-16 6 -10 22 h20 V66 Z" fill="#bd140d" />
        <rect x="96" y="74" width="26" height="18" rx="3" fill="#fff" opacity="0.85" />
        <rect x="130" y="74" width="26" height="18" rx="3" fill="#fff" opacity="0.85" />
        <rect x="164" y="74" width="26" height="18" rx="3" fill="#fff" opacity="0.85" />
        <circle cx="92" cy="118" r="9" fill="#1f2937" />
        <circle cx="188" cy="118" r="9" fill="#1f2937" />
      </g>
      {/* location pin */}
      <g transform="translate(240 36)">
        <path d="M22 0 a22 22 0 0 1 22 22 c0 16 -22 38 -22 38 C22 60 0 38 0 22 A22 22 0 0 1 22 0Z" fill="#bd140d" />
        <circle cx="22" cy="22" r="9" fill="#fff" />
      </g>
    </svg>
  );
}

export function LanguageArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="Language and translation" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Bg />
      {/* left speech bubble - 文 */}
      <g>
        <path d="M50 36 h96 a14 14 0 0 1 14 14 v36 a14 14 0 0 1 -14 14 H86 l-18 18 v-18 H50 a14 14 0 0 1 -14 -14 V50 A14 14 0 0 1 50 36Z" fill="#f5391b" />
        <text x="98" y="80" textAnchor="middle" fontSize="34" fill="#fff" fontWeight="bold">文</text>
      </g>
      {/* right speech bubble - A */}
      <g>
        <path d="M186 64 h84 a14 14 0 0 1 14 14 v30 a14 14 0 0 1 -14 14 h-44 l-16 16 v-16 h-24 a14 14 0 0 1 -14 -14 V78 A14 14 0 0 1 186 64Z" fill="#ff998c" />
        <text x="228" y="108" textAnchor="middle" fontSize="30" fill="#fff" fontWeight="bold">A</text>
      </g>
      {/* swap arrows */}
      <g stroke="#bd140d" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M158 52 h14 m0 0 l-5 -5 m5 5 l-5 5" />
      </g>
    </svg>
  );
}

export function VisaArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="Passport and visa entry" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Bg />
      {/* passport */}
      <g transform="rotate(-8 120 80)">
        <rect x="78" y="34" width="84" height="108" rx="8" fill="#9c1612" />
        <rect x="86" y="42" width="76" height="100" rx="4" fill="#bd140d" />
        <circle cx="124" cy="78" r="22" fill="none" stroke="#ffc2ba" strokeWidth="3" />
        <path d="M124 56 v44 M102 78 h44 M108 64 q16 14 32 0 M108 92 q16 -14 32 0" stroke="#ffc2ba" strokeWidth="2" fill="none" />
        <rect x="100" y="112" width="48" height="6" rx="3" fill="#ffc2ba" />
        <rect x="106" y="122" width="36" height="5" rx="2.5" fill="#ff998c" />
      </g>
      {/* approved stamp */}
      <g transform="rotate(12 232 88)">
        <circle cx="232" cy="88" r="40" fill="none" stroke="#f5391b" strokeWidth="5" />
        <circle cx="232" cy="88" r="31" fill="none" stroke="#f5391b" strokeWidth="2" />
        <text x="232" y="84" textAnchor="middle" fontSize="15" fill="#f5391b" fontWeight="bold">VISA</text>
        <text x="232" y="102" textAnchor="middle" fontSize="11" fill="#f5391b" fontWeight="bold">OK</text>
      </g>
    </svg>
  );
}

export function SafetyArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="Safety and emergency help" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Bg />
      {/* shield */}
      <g transform="translate(108 24)">
        <path d="M52 0 L104 22 V62 C104 96 52 116 52 116 C52 116 0 96 0 62 V22 Z" fill="#f5391b" />
        <path d="M52 12 L92 29 V61 C92 86 52 102 52 102 C52 102 12 86 12 61 V29 Z" fill="#bd140d" />
        {/* medical cross */}
        <rect x="44" y="38" width="16" height="44" rx="3" fill="#fff" />
        <rect x="30" y="52" width="44" height="16" rx="3" fill="#fff" />
      </g>
      {/* phone with 110 */}
      <g transform="translate(34 60)">
        <rect x="0" y="0" width="40" height="56" rx="9" fill="#1f2937" />
        <rect x="5" y="8" width="30" height="40" rx="3" fill="#fff" />
        <text x="20" y="34" textAnchor="middle" fontSize="14" fill="#bd140d" fontWeight="bold">110</text>
      </g>
    </svg>
  );
}
