export function JourneyArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 160"
      className={className}
      role="img"
      aria-label="The journey from plane to airport to city"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="480" height="160" rx="16" fill="#fff1f0" />

      {/* dashed journey path */}
      <path
        d="M40 120 Q150 40 240 96 T440 60"
        stroke="#ff998c"
        strokeWidth="3"
        strokeDasharray="3 9"
        strokeLinecap="round"
        fill="none"
      />

      {/* stop 1: plane */}
      <g transform="translate(34 86)">
        <circle cx="20" cy="20" r="26" fill="#f5391b" />
        <g transform="translate(8 10) rotate(-20 12 12)" fill="#fff">
          <path d="M0 12 L22 8 L26 11 L8 16 Z" />
          <path d="M16 9 L23 0 L26 1 L21 11 Z" />
          <path d="M10 14 L15 22 L18 21 L15 13 Z" />
        </g>
      </g>

      {/* stop 2: airport / terminal */}
      <g transform="translate(208 60)">
        <circle cx="24" cy="36" r="26" fill="#ff6147" />
        {/* control tower */}
        <rect x="20" y="22" width="8" height="30" fill="#fff" />
        <path d="M16 22 h16 l-3 -8 h-10 Z" fill="#fff" />
        <rect x="13" y="44" width="22" height="10" rx="2" fill="#fff" />
      </g>

      {/* stop 3: city */}
      <g transform="translate(404 32)">
        <circle cx="24" cy="28" r="26" fill="#f5391b" />
        <rect x="10" y="20" width="9" height="24" rx="1.5" fill="#fff" />
        <rect x="21" y="12" width="9" height="32" rx="1.5" fill="#fff" />
        <path d="M19 12 L25.5 5 L32 12 Z" fill="#fff" />
        <rect x="32" y="24" width="8" height="20" rx="1.5" fill="#fff" />
      </g>

      {/* step numbers */}
      <text x="54" y="112" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">1</text>
      <text x="232" y="100" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">2</text>
      <text x="428" y="64" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">3</text>
    </svg>
  );
}
