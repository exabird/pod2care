export default function OrthopedicIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <circle cx="200" cy="200" r="170" fill="url(#orthoGrad1)" opacity="0.1" />
      
      {/* Insole shape */}
      <path
        d="M120 100c20-15 60-20 100-15 45 6 80 25 95 55 15 35 10 80-15 120-20 32-55 55-95 60-35 5-70-5-95-30-30-30-35-75-15-115 15-30 45-55 75-65 15-5 35-8 50-10z"
        fill="url(#orthoGrad2)"
        stroke="#687a59"
        strokeWidth="3"
      />
      
      {/* Arch support curve */}
      <path
        d="M150 180c30-40 80-50 120-30"
        stroke="#516145"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M140 220c40-30 90-35 130-15"
        stroke="#516145"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      
      {/* Heel cup */}
      <ellipse cx="270" cy="260" rx="45" ry="35" fill="#849574" opacity="0.5" />
      
      {/* Metatarsal pad */}
      <ellipse cx="160" cy="150" rx="35" ry="25" fill="#849574" opacity="0.4" />
      
      {/* Measurement lines */}
      <g stroke="#687a59" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5">
        <line x1="100" y1="200" x2="300" y2="200" />
        <line x1="200" y1="90" x2="200" y2="310" />
      </g>
      
      {/* Ruler marks */}
      <g fill="#687a59" opacity="0.4">
        <rect x="95" y="196" width="10" height="8" rx="1" />
        <rect x="295" y="196" width="10" height="8" rx="1" />
        <rect x="196" y="85" width="8" height="10" rx="1" />
        <rect x="196" y="305" width="8" height="10" rx="1" />
      </g>
      
      {/* Tech dots */}
      <circle cx="180" cy="170" r="6" fill="#687a59" opacity="0.8" />
      <circle cx="220" cy="190" r="5" fill="#687a59" opacity="0.6" />
      <circle cx="250" cy="240" r="7" fill="#687a59" opacity="0.7" />
      <circle cx="160" cy="220" r="4" fill="#687a59" opacity="0.5" />
      
      {/* Corner decorations */}
      <path d="M60 60L80 60L80 80" stroke="#a5b396" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M340 60L320 60L320 80" stroke="#a5b396" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 340L80 340L80 320" stroke="#a5b396" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M340 340L320 340L320 320" stroke="#a5b396" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      <defs>
        <linearGradient id="orthoGrad1" x1="30" y1="30" x2="370" y2="370">
          <stop stopColor="#687a59" />
          <stop offset="1" stopColor="#d3c7b3" />
        </linearGradient>
        <linearGradient id="orthoGrad2" x1="100" y1="100" x2="320" y2="320">
          <stop stopColor="#e3e7de" />
          <stop offset="0.5" stopColor="#c8d1bf" />
          <stop offset="1" stopColor="#a5b396" />
        </linearGradient>
      </defs>
    </svg>
  )
}

