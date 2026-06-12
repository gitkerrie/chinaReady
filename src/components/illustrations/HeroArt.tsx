export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="A traveler arriving in a Chinese city, paying by phone QR code"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* sky / backdrop */}
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1f0" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" rx="24" fill="url(#heroSky)" />

      {/* sun */}
      <circle cx="380" cy="78" r="34" fill="#ffc2ba" />
      <circle cx="380" cy="78" r="22" fill="#ff998c" />

      {/* plane */}
      <g transform="rotate(-12 140 70)">
        <path d="M70 70 L150 58 L165 64 L120 78 Z" fill="#f5391b" />
        <path d="M126 66 L142 48 L150 50 L138 70 Z" fill="#bd140d" />
        <path d="M118 74 L130 90 L138 88 L130 72 Z" fill="#bd140d" />
      </g>
      <path
        d="M40 96 q40 -16 80 -8"
        stroke="#ffc2ba"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 8"
      />

      {/* city skyline */}
      <g>
        <rect x="60" y="200" width="48" height="120" rx="4" fill="#ffc2ba" />
        <rect x="118" y="160" width="56" height="160" rx="4" fill="#ff998c" />
        {/* pagoda-ish tower */}
        <rect x="190" y="140" width="44" height="180" rx="4" fill="#f5391b" />
        <path d="M186 140 L212 116 L238 140 Z" fill="#bd140d" />
        <rect x="250" y="180" width="52" height="140" rx="4" fill="#ff998c" />
        <rect x="312" y="150" width="46" height="170" rx="4" fill="#ffc2ba" />
        {/* windows */}
        {[170, 200, 230, 260, 290].map((y) =>
          [128, 144, 160].map((x) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="8" height="10" rx="1.5" fill="#fff" opacity="0.7" />
          ))
        )}
        {[160, 190, 220, 250, 280].map((y) =>
          [200, 216].map((x) => (
            <rect key={`t${x}-${y}`} x={x} y={y} width="8" height="10" rx="1.5" fill="#fff" opacity="0.8" />
          ))
        )}
      </g>

      {/* ground */}
      <rect x="40" y="318" width="400" height="10" rx="5" fill="#811816" opacity="0.15" />

      {/* traveler */}
      <g transform="translate(360 196)">
        {/* suitcase */}
        <rect x="44" y="74" width="34" height="46" rx="6" fill="#9c1612" />
        <rect x="56" y="66" width="10" height="12" rx="3" fill="#9c1612" />
        <line x1="61" y1="74" x2="61" y2="118" stroke="#fff" strokeWidth="2" opacity="0.4" />
        {/* body */}
        <rect x="6" y="44" width="34" height="56" rx="14" fill="#f5391b" />
        {/* head */}
        <circle cx="23" cy="28" r="15" fill="#ffd9b0" />
        <path d="M9 24 a14 14 0 0 1 28 0 q-14 -10 -28 0Z" fill="#5b3a29" />
        {/* arm holding phone */}
        <rect x="30" y="50" width="10" height="26" rx="5" fill="#ffd9b0" />
      </g>

      {/* phone with QR */}
      <g transform="translate(392 250)">
        <rect x="0" y="0" width="40" height="60" rx="8" fill="#1f2937" />
        <rect x="4" y="6" width="32" height="48" rx="3" fill="#fff" />
        {/* qr */}
        <g fill="#1f2937">
          <rect x="9" y="11" width="8" height="8" />
          <rect x="23" y="11" width="8" height="8" />
          <rect x="9" y="25" width="8" height="8" />
          <rect x="20" y="24" width="4" height="4" />
          <rect x="26" y="24" width="5" height="5" />
          <rect x="20" y="32" width="5" height="5" />
          <rect x="27" y="33" width="4" height="4" />
          <rect x="11" y="40" width="5" height="5" />
          <rect x="20" y="42" width="11" height="4" />
        </g>
      </g>
    </svg>
  );
}
