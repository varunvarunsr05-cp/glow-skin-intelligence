export default function SerumBottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 560"
      className={className}
      role="img"
      aria-label="GLOW Skin Intelligence Precision Serum bottle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glass */}
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B7AEA1" stopOpacity=".28" />
          <stop offset=".12" stopColor="#FFFFFF" stopOpacity=".88" />
          <stop offset=".3" stopColor="#F9F6F0" stopOpacity=".72" />
          <stop offset=".52" stopColor="#DCD5CA" stopOpacity=".42" />
          <stop offset=".74" stopColor="#FFFFFF" stopOpacity=".82" />
          <stop offset=".9" stopColor="#B5ADA2" stopOpacity=".25" />
          <stop offset="1" stopColor="#81786C" stopOpacity=".2" />
        </linearGradient>

        {/* Serum */}
        <linearGradient id="serum" x1="0" y1="0" x2=".2" y2="1">
          <stop offset="0" stopColor="#FFFDF8" />
          <stop offset=".3" stopColor="#F9EEDF" />
          <stop offset=".7" stopColor="#EED8BF" />
          <stop offset="1" stopColor="#DDBD98" />
        </linearGradient>

        {/* Metallic gold */}
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#624329" />
          <stop offset=".12" stopColor="#A87845" />
          <stop offset=".27" stopColor="#F0C995" />
          <stop offset=".42" stopColor="#FFF0D0" />
          <stop offset=".54" stopColor="#B47F49" />
          <stop offset=".7" stopColor="#EBC18D" />
          <stop offset=".86" stopColor="#79512F" />
          <stop offset="1" stopColor="#D1A36B" />
        </linearGradient>

        {/* Dropper */}
        <linearGradient id="dropper" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#BEB8AE" />
          <stop offset=".2" stopColor="#F4F1EB" />
          <stop offset=".45" stopColor="#FFFFFF" />
          <stop offset=".7" stopColor="#F8F5EF" />
          <stop offset=".9" stopColor="#D2CCC3" />
          <stop offset="1" stopColor="#9D968D" />
        </linearGradient>

        {/* Label */}
        <linearGradient id="label" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".55" stopColor="#FCFAF6" />
          <stop offset="1" stopColor="#EEE7DC" />
        </linearGradient>

        {/* Soft aura */}
        <radialGradient id="aura">
          <stop offset="0" stopColor="#E8C89F" stopOpacity=".3" />
          <stop offset=".55" stopColor="#E8C89F" stopOpacity=".08" />
          <stop offset="1" stopColor="#E8C89F" stopOpacity="0" />
        </radialGradient>

        <filter id="shadow" x="-50%" y="-40%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="16"
            floodColor="#4B3A2B"
            floodOpacity=".2"
          />
        </filter>

        <filter id="blur">
          <feGaussianBlur stdDeviation="10" />
        </filter>

        <clipPath id="bodyClip">
          <rect x="48" y="190" width="204" height="315" rx="38" />
        </clipPath>
      </defs>

      {/* Premium aura */}
      <ellipse
        cx="150"
        cy="280"
        rx="145"
        ry="210"
        fill="url(#aura)"
        filter="url(#blur)"
      />

      {/* Ground shadow */}
      <ellipse
        cx="150"
        cy="510"
        rx="100"
        ry="18"
        fill="#5E4A36"
        opacity=".16"
        filter="url(#blur)"
      />

      <g filter="url(#shadow)">
        {/* Dropper bulb */}
        <path
          d="M101 38C101 17 120 5 150 5C180 5 199 17 199 38V83H101V38Z"
          fill="url(#dropper)"
        />

        {/* Dropper highlight */}
        <path
          d="M113 36C113 21 126 12 146 11V72H113V36Z"
          fill="#FFFFFF"
          opacity=".52"
        />

        {/* Gold collar */}
        <rect
          x="90"
          y="72"
          width="120"
          height="38"
          rx="9"
          fill="url(#gold)"
        />

        <rect
          x="101"
          y="77"
          width="9"
          height="28"
          rx="4.5"
          fill="#FFEAC7"
          opacity=".7"
        />

        <rect
          x="190"
          y="77"
          width="8"
          height="28"
          rx="4"
          fill="#573A24"
          opacity=".3"
        />

        {/* Glass neck */}
        <rect
          x="113"
          y="104"
          width="74"
          height="96"
          rx="13"
          fill="url(#glass)"
          stroke="#B8B0A4"
          strokeWidth="1.3"
        />

        <rect
          x="124"
          y="110"
          width="10"
          height="79"
          rx="5"
          fill="#FFFFFF"
          opacity=".6"
        />

        {/* Main bottle */}
        <rect
          x="48"
          y="180"
          width="204"
          height="325"
          rx="38"
          fill="url(#glass)"
          stroke="#B2AA9E"
          strokeWidth="1.5"
        />

        {/* Serum */}
        <g clipPath="url(#bodyClip)">
          <rect
            x="53"
            y="255"
            width="194"
            height="255"
            fill="url(#serum)"
            opacity=".94"
          />

          {/* Serum surface */}
          <ellipse
            cx="150"
            cy="256"
            rx="96"
            ry="12"
            fill="#FFF9EF"
            opacity=".62"
          />

          <ellipse
            cx="150"
            cy="260"
            rx="88"
            ry="7"
            fill="#EEDAC1"
            opacity=".22"
          />
        </g>

        {/* Strong glass reflection */}
        <path
          d="M69 205C59 228 59 259 59 296V448C59 475 70 492 92 500"
          stroke="#FFFFFF"
          strokeWidth="14"
          strokeLinecap="round"
          opacity=".55"
        />

        {/* Secondary reflection */}
        <path
          d="M91 201C85 225 85 251 85 279"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".7"
        />

        {/* Right glass shadow */}
        <path
          d="M229 205C240 232 240 261 240 300V449C240 473 232 488 216 498"
          stroke="#948B80"
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".18"
        />

        {/* Bottle top rim */}
        <rect
          x="53"
          y="177"
          width="194"
          height="20"
          rx="10"
          fill="#FFFFFF"
          opacity=".42"
        />

        <rect
          x="61"
          y="181"
          width="178"
          height="9"
          rx="4.5"
          fill="#BFB7AB"
          opacity=".18"
        />

        {/* Premium label */}
        <rect
          x="70"
          y="282"
          width="160"
          height="154"
          rx="7"
          fill="url(#label)"
          stroke="#DCD4C8"
          strokeWidth="1"
        />

        {/* Fine label border */}
        <rect
          x="77"
          y="289"
          width="146"
          height="140"
          rx="4"
          fill="none"
          stroke="#E7DFD3"
          strokeWidth=".8"
        />

        {/* Logo */}
        <text
          x="150"
          y="331"
          textAnchor="middle"
          fill="#17191D"
          fontSize="34"
          fontWeight="500"
          letterSpacing="7"
          fontFamily="Inter, Arial, sans-serif"
        >
          GLOW
        </text>

        {/* Gold star */}
        <path
          d="M166 303L168 307.5L172.5 309.5L168 311.5L166 316L164 311.5L159.5 309.5L164 307.5L166 303Z"
          fill="#C9955B"
        />

        {/* Brand subtitle */}
        <text
          x="150"
          y="349"
          textAnchor="middle"
          fill="#292B2F"
          fontSize="7.2"
          fontWeight="600"
          letterSpacing="1.8"
          fontFamily="Inter, Arial, sans-serif"
        >
          SKIN INTELLIGENCE™
        </text>

        <line
          x1="96"
          y1="363"
          x2="204"
          y2="363"
          stroke="#D8D0C5"
          strokeWidth=".9"
        />

        {/* Product */}
        <text
          x="150"
          y="387"
          textAnchor="middle"
          fill="#24262A"
          fontSize="9"
          fontWeight="600"
          letterSpacing="1.1"
          fontFamily="Inter, Arial, sans-serif"
        >
          PRECISION SERUM
        </text>

        <text
          x="150"
          y="406"
          textAnchor="middle"
          fill="#69655E"
          fontSize="6.8"
          fontFamily="Inter, Arial, sans-serif"
        >
          Hydrate · Protect · Glow
        </text>

        <text
          x="150"
          y="423"
          textAnchor="middle"
          fill="#4D4943"
          fontSize="6.6"
          fontWeight="500"
          letterSpacing=".6"
          fontFamily="Inter, Arial, sans-serif"
        >
          30 ML / 1.01 FL OZ
        </text>

        {/* Bottom glass reflections */}
        <path
          d="M53 478C82 499 218 499 247 478"
          stroke="#FFFFFF"
          strokeWidth="5"
          opacity=".5"
        />

        <path
          d="M55 492C84 510 216 510 245 492"
          stroke="#9D958A"
          strokeWidth="1.8"
          opacity=".25"
        />
      </g>
    </svg>
  );
}