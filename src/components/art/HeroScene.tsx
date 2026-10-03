/**
 * Full-bleed hero artwork: a laden container vessel on a dusk horizon.
 * Layered so the page can parallax it behind the headline.
 */
export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCEDDE" />
          <stop offset="52%" stopColor="#F7E2C9" />
          <stop offset="80%" stopColor="#C7DEEE" />
          <stop offset="100%" stopColor="#97C6E0" />
        </linearGradient>
        <linearGradient id="hero-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6FA5C6" />
          <stop offset="30%" stopColor="#2F5670" />
          <stop offset="100%" stopColor="#172B3A" />
        </linearGradient>
        <linearGradient id="hero-scrim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FCEDDE" stopOpacity="0.92" />
          <stop offset="46%" stopColor="#FCEDDE" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FCEDDE" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hero-halo">
          <stop offset="0%" stopColor="#C07F45" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C07F45" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="1600" height="640" fill="url(#hero-sky)" />

      {/* sun */}
      <circle cx="1210" cy="272" r="240" fill="url(#hero-halo)" />
      <circle cx="1210" cy="272" r="118" fill="#C07F45" />
      <circle cx="1210" cy="272" r="158" fill="none" stroke="#C07F45" strokeOpacity="0.35" strokeWidth="2" />
      <circle cx="1210" cy="272" r="200" fill="none" stroke="#C07F45" strokeOpacity="0.18" strokeWidth="2" />

      {/* cloud bands */}
      <g fill="#FFFDF9" opacity="0.65">
        <rect x="150" y="150" width="330" height="16" rx="8" />
        <rect x="230" y="192" width="200" height="12" rx="6" />
        <rect x="700" y="110" width="260" height="14" rx="7" />
        <rect x="1290" y="452" width="240" height="12" rx="6" />
      </g>

      {/* birds */}
      <g stroke="#172B3A" strokeOpacity="0.5" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M876 176 q 14 -14 28 0 q 14 -14 28 0" />
        <path d="M936 214 q 11 -11 22 0 q 11 -11 22 0" />
        <path d="M1010 160 q 9 -9 18 0 q 9 -9 18 0" />
      </g>

      {/* trade corridor */}
      <path
        d="M60 470 Q 620 300 1540 400"
        fill="none"
        stroke="#C07F45"
        strokeWidth="3"
        strokeDasharray="16 22"
        className="animate-route"
        opacity="0.55"
      />

      {/* distant port */}
      <g stroke="#5E7486" strokeOpacity="0.45" strokeWidth="8" fill="none">
        <path d="M120 640 V520 H260" />
        <path d="M120 548 H260" />
        <path d="M300 640 V540 H420" />
        <path d="M300 566 H420" />
      </g>

      {/* sea */}
      <rect y="640" width="1600" height="260" fill="url(#hero-sea)" />
      <g stroke="#FFFDF9" strokeOpacity="0.16" strokeWidth="4" strokeLinecap="round">
        <line x1="80" y1="690" x2="330" y2="690" />
        <line x1="420" y1="742" x2="760" y2="742" />
        <line x1="900" y1="704" x2="1240" y2="704" />
        <line x1="1180" y1="806" x2="1520" y2="806" />
        <line x1="160" y1="828" x2="600" y2="828" />
      </g>

      {/* vessel */}
      <g className="animate-bob">
        {/* hull */}
        <path d="M742 578 L1364 562 L1348 654 L836 654 Z" fill="#172B3A" />
        <path d="M742 578 L1364 562 L1361 588 L748 604 Z" fill="#172B3A" />
        <rect x="760" y="596" width="580" height="8" fill="#C07F45" opacity="0.55" />
        {/* hatches + containers */}
        <g>
          <rect x="836" y="546" width="96" height="38" fill="#C07F45" />
          <rect x="940" y="546" width="96" height="38" fill="#FFFDF9" />
          <rect x="1044" y="546" width="96" height="38" fill="#97C6E0" />
          <rect x="1148" y="546" width="66" height="38" fill="#9D6532" />

          <rect x="866" y="504" width="96" height="38" fill="#97C6E0" />
          <rect x="970" y="504" width="96" height="38" fill="#C07F45" />
          <rect x="1074" y="504" width="96" height="38" fill="#FFFDF9" />

          <rect x="906" y="462" width="96" height="38" fill="#FFFDF9" />
          <rect x="1010" y="462" width="96" height="38" fill="#9D6532" />

          <rect x="946" y="420" width="96" height="38" fill="#97C6E0" />
        </g>
        {/* superstructure */}
        <rect x="1230" y="430" width="120" height="132" fill="#FFFDF9" />
        <g fill="#172B3A">
          <rect x="1244" y="446" width="92" height="10" />
          <rect x="1244" y="468" width="92" height="10" />
          <rect x="1244" y="490" width="92" height="10" />
          <rect x="1244" y="512" width="92" height="10" />
        </g>
        <rect x="1266" y="378" width="44" height="54" fill="#C07F45" />
        <rect x="1266" y="378" width="44" height="16" fill="#172B3A" />
        {/* bow mast */}
        <line x1="800" y1="576" x2="800" y2="488" stroke="#172B3A" strokeWidth="7" />
        <line x1="780" y1="500" x2="822" y2="500" stroke="#172B3A" strokeWidth="6" />
      </g>

      {/* reflection */}
      <ellipse cx="1060" cy="666" rx="330" ry="16" fill="#172B3A" opacity="0.35" />

      {/* left scrim for headline legibility */}
      <rect width="1600" height="900" fill="url(#hero-scrim)" />
    </svg>
  );
}
