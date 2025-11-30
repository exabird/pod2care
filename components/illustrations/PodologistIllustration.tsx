export default function PodologistIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background shape */}
      <path
        d="M50 100c0-30 25-55 55-55h190c30 0 55 25 55 55v250c0 80-65 145-145 145h-10c-80 0-145-65-145-145V100z"
        fill="url(#podGrad1)"
        opacity="0.15"
      />
      
      {/* Head */}
      <circle cx="200" cy="110" r="55" fill="#d3c7b3" stroke="#886f59" strokeWidth="3" />
      
      {/* Hair */}
      <path
        d="M150 90c5-25 25-45 50-45s45 20 50 45c-15-15-35-20-50-20s-35 5-50 20z"
        fill="#5b4b40"
      />
      
      {/* Face */}
      <circle cx="180" cy="105" r="4" fill="#5b4b40" /> {/* Left eye */}
      <circle cx="220" cy="105" r="4" fill="#5b4b40" /> {/* Right eye */}
      <path d="M190 125c5 8 15 8 20 0" stroke="#886f59" strokeWidth="2" strokeLinecap="round" fill="none" /> {/* Smile */}
      
      {/* Body / Lab coat */}
      <path
        d="M130 175c0-15 30-25 70-25s70 10 70 25v120c0 20-15 35-35 35h-70c-20 0-35-15-35-35V175z"
        fill="white"
        stroke="#e3e7de"
        strokeWidth="2"
      />
      
      {/* Coat collar */}
      <path d="M170 155l30 30l30-30" stroke="#687a59" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Coat buttons */}
      <circle cx="200" cy="220" r="5" fill="#687a59" />
      <circle cx="200" cy="250" r="5" fill="#687a59" />
      <circle cx="200" cy="280" r="5" fill="#687a59" />
      
      {/* Stethoscope */}
      <path
        d="M150 170c-10 10-15 30-10 50"
        stroke="#516145"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="140" cy="225" r="12" fill="#687a59" />
      <circle cx="140" cy="225" r="6" fill="#414d38" />
      
      {/* Arms */}
      <path
        d="M130 190c-20 10-35 30-40 55"
        stroke="#d3c7b3"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path
        d="M270 190c20 10 35 30 40 55"
        stroke="#d3c7b3"
        strokeWidth="20"
        strokeLinecap="round"
      />
      
      {/* Hands */}
      <circle cx="88" cy="250" r="18" fill="#d3c7b3" stroke="#bfab92" strokeWidth="2" />
      <circle cx="312" cy="250" r="18" fill="#d3c7b3" stroke="#bfab92" strokeWidth="2" />
      
      {/* Tool in hand */}
      <rect x="300" y="235" width="8" height="40" rx="4" fill="#687a59" />
      <circle cx="304" cy="235" r="8" fill="#849574" />
      
      {/* Medical cross badge */}
      <g transform="translate(165, 175)">
        <circle cx="15" cy="15" r="15" fill="#687a59" />
        <rect x="11" y="6" width="8" height="18" rx="1" fill="white" />
        <rect x="6" y="11" width="18" height="8" rx="1" fill="white" />
      </g>
      
      {/* Foot being examined */}
      <g transform="translate(60, 350)">
        <ellipse cx="50" cy="40" rx="45" ry="30" fill="#e4ddd0" stroke="#bfab92" strokeWidth="2" />
        <ellipse cx="15" cy="25" rx="10" ry="12" fill="#d3c7b3" stroke="#bfab92" strokeWidth="1.5" />
        <ellipse cx="30" cy="15" rx="8" ry="14" fill="#d3c7b3" stroke="#bfab92" strokeWidth="1.5" />
        <ellipse cx="48" cy="10" rx="7" ry="15" fill="#d3c7b3" stroke="#bfab92" strokeWidth="1.5" />
        <ellipse cx="65" cy="15" rx="6" ry="12" fill="#d3c7b3" stroke="#bfab92" strokeWidth="1.5" />
        <ellipse cx="80" cy="22" rx="5" ry="10" fill="#d3c7b3" stroke="#bfab92" strokeWidth="1.5" />
      </g>
      
      {/* Sparkles */}
      <circle cx="320" cy="120" r="4" fill="#687a59" opacity="0.6" />
      <circle cx="80" cy="140" r="3" fill="#687a59" opacity="0.5" />
      <circle cx="340" cy="300" r="5" fill="#a5b396" opacity="0.6" />
      
      <defs>
        <linearGradient id="podGrad1" x1="50" y1="50" x2="350" y2="450">
          <stop stopColor="#687a59" />
          <stop offset="1" stopColor="#c8d1bf" />
        </linearGradient>
      </defs>
    </svg>
  )
}

