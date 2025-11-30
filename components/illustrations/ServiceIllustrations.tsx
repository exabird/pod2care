// Illustrations réalistes pour les services

export function PedicureIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <rect width="200" height="160" rx="16" fill="url(#pedicureGrad)" />
      
      {/* Foot */}
      <ellipse cx="100" cy="100" rx="55" ry="35" fill="#e8dcd0" />
      <ellipse cx="55" cy="85" rx="12" ry="18" fill="#ddd0c4" />
      <ellipse cx="72" cy="75" rx="10" ry="20" fill="#ddd0c4" />
      <ellipse cx="90" cy="70" rx="9" ry="22" fill="#ddd0c4" />
      <ellipse cx="108" cy="75" rx="8" ry="18" fill="#ddd0c4" />
      <ellipse cx="123" cy="82" rx="7" ry="15" fill="#ddd0c4" />
      
      {/* Tool */}
      <rect x="140" y="50" width="6" height="50" rx="3" fill="#687a59" />
      <circle cx="143" cy="50" r="8" fill="#849574" />
      
      {/* Care effect */}
      <circle cx="85" cy="95" r="4" fill="#687a59" opacity="0.3" />
      <path d="M75 90 L95 100" stroke="#687a59" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      
      {/* Sparkles */}
      <circle cx="165" cy="35" r="3" fill="#687a59" opacity="0.5" />
      <circle cx="175" cy="45" r="2" fill="#a5b396" opacity="0.6" />
      <circle cx="30" cy="130" r="2" fill="#687a59" opacity="0.4" />
      
      <defs>
        <linearGradient id="pedicureGrad" x1="0" y1="0" x2="200" y2="160">
          <stop stopColor="#f6f7f4" />
          <stop offset="1" stopColor="#e3e7de" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function OrthopedicInsoleIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <rect width="200" height="160" rx="16" fill="url(#insoleGrad)" />
      
      {/* Insole shape */}
      <path 
        d="M50 45c15-10 45-15 70-10 30 6 55 20 65 45 10 30-5 55-35 65-25 8-55 0-75-20-25-25-30-60-25-80z" 
        fill="#c8d1bf" 
        stroke="#687a59" 
        strokeWidth="2"
      />
      
      {/* Arch support lines */}
      <path d="M70 80c25-20 50-25 75-10" stroke="#516145" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M65 100c30-15 55-15 80-5" stroke="#516145" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      
      {/* Pressure points */}
      <circle cx="80" cy="70" r="8" fill="#687a59" opacity="0.3" />
      <circle cx="120" cy="90" r="10" fill="#687a59" opacity="0.25" />
      <circle cx="140" cy="110" r="6" fill="#687a59" opacity="0.2" />
      
      {/* Measurement marks */}
      <path d="M40 80h10M150 80h10" stroke="#687a59" strokeWidth="1.5" opacity="0.4" />
      <path d="M100 35v10M100 125v10" stroke="#687a59" strokeWidth="1.5" opacity="0.4" />
      
      <defs>
        <linearGradient id="insoleGrad" x1="0" y1="0" x2="200" y2="160">
          <stop stopColor="#faf9f6" />
          <stop offset="1" stopColor="#e4ddd0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function DiagnosticIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <rect width="200" height="160" rx="16" fill="url(#diagGrad)" />
      
      {/* Clipboard */}
      <rect x="45" y="25" width="110" height="120" rx="8" fill="white" stroke="#c8d1bf" strokeWidth="2" />
      <rect x="75" y="20" width="50" height="15" rx="4" fill="#687a59" />
      
      {/* Checklist items */}
      <rect x="60" y="50" width="12" height="12" rx="2" stroke="#687a59" strokeWidth="2" fill="none" />
      <path d="M63 56l3 3 6-6" stroke="#687a59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="52" width="55" height="6" rx="3" fill="#e3e7de" />
      
      <rect x="60" y="75" width="12" height="12" rx="2" stroke="#687a59" strokeWidth="2" fill="none" />
      <path d="M63 81l3 3 6-6" stroke="#687a59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="77" width="45" height="6" rx="3" fill="#e3e7de" />
      
      <rect x="60" y="100" width="12" height="12" rx="2" stroke="#687a59" strokeWidth="2" fill="none" />
      <path d="M63 106l3 3 6-6" stroke="#687a59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="102" width="60" height="6" rx="3" fill="#e3e7de" />
      
      {/* Magnifying glass */}
      <circle cx="160" cy="45" r="18" stroke="#687a59" strokeWidth="3" fill="white" opacity="0.9" />
      <line x1="173" y1="58" x2="185" y2="70" stroke="#687a59" strokeWidth="3" strokeLinecap="round" />
      
      {/* Foot silhouette in magnifier */}
      <ellipse cx="160" cy="45" rx="8" ry="5" fill="#a5b396" opacity="0.6" />
      
      <defs>
        <linearGradient id="diagGrad" x1="0" y1="0" x2="200" y2="160">
          <stop stopColor="#f6f7f4" />
          <stop offset="1" stopColor="#e3e7de" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function DiabetesIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <rect width="200" height="160" rx="16" fill="url(#diabGrad)" />
      
      {/* Heart with plus */}
      <path 
        d="M100 130c-5-10-50-50-50-75 0-20 15-35 35-35 12 0 22 8 28 18 6-10 16-18 28-18 20 0 35 15 35 35 0 25-45 65-50 75-2 3-4 3-6 0z" 
        fill="#687a59" 
        opacity="0.2"
      />
      <path 
        d="M100 120c-4-8-40-40-40-60 0-16 12-28 28-28 10 0 18 6 22 14 4-8 12-14 22-14 16 0 28 12 28 28 0 20-36 52-40 60-1 2-3 2-4 0z" 
        fill="#687a59"
      />
      
      {/* Medical cross */}
      <rect x="92" y="55" width="16" height="40" rx="2" fill="white" />
      <rect x="80" y="67" width="40" height="16" rx="2" fill="white" />
      
      {/* Pulse line */}
      <path 
        d="M20 80h30l5-15 10 30 10-25 10 20 5-10h90" 
        stroke="#a5b396" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Sparkles */}
      <circle cx="30" cy="40" r="3" fill="#687a59" opacity="0.4" />
      <circle cx="170" cy="130" r="4" fill="#a5b396" opacity="0.5" />
      
      <defs>
        <linearGradient id="diabGrad" x1="0" y1="0" x2="200" y2="160">
          <stop stopColor="#faf9f6" />
          <stop offset="1" stopColor="#e4ddd0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function SportIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <rect width="200" height="160" rx="16" fill="url(#sportGrad)" />
      
      {/* Running shoe */}
      <path 
        d="M30 100c5-20 25-35 50-35h60c15 0 30 10 35 25 3 10 0 25-15 30H50c-20 0-25-10-20-20z" 
        fill="#687a59"
      />
      <path 
        d="M40 95c3-12 15-22 35-22h45c10 0 20 7 23 17" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none"
        opacity="0.5"
      />
      
      {/* Shoe details */}
      <circle cx="60" cy="95" r="6" fill="white" opacity="0.3" />
      <circle cx="85" cy="88" r="5" fill="white" opacity="0.3" />
      <circle cx="110" cy="85" r="4" fill="white" opacity="0.3" />
      
      {/* Speed lines */}
      <path d="M15 90h15" stroke="#a5b396" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 100h12" stroke="#a5b396" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 110h10" stroke="#a5b396" strokeWidth="2" strokeLinecap="round" />
      
      {/* Lightning bolt for energy */}
      <path 
        d="M160 25l-15 25h12l-8 25 20-30h-12l8-20z" 
        fill="#d3c7b3"
      />
      
      <defs>
        <linearGradient id="sportGrad" x1="0" y1="0" x2="200" y2="160">
          <stop stopColor="#f6f7f4" />
          <stop offset="1" stopColor="#e3e7de" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function PediatricIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className}>
      {/* Background */}
      <rect width="200" height="160" rx="16" fill="url(#pedGrad)" />
      
      {/* Baby foot */}
      <ellipse cx="100" cy="95" rx="40" ry="28" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="2" />
      
      {/* Tiny toes */}
      <ellipse cx="68" cy="78" rx="8" ry="12" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
      <ellipse cx="82" cy="70" rx="7" ry="14" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
      <ellipse cx="97" cy="66" rx="6" ry="15" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
      <ellipse cx="112" cy="70" rx="6" ry="13" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
      <ellipse cx="125" cy="76" rx="5" ry="11" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
      
      {/* Cute face on foot */}
      <circle cx="90" cy="92" r="3" fill="#687a59" />
      <circle cx="110" cy="92" r="3" fill="#687a59" />
      <path d="M95 102c3 4 7 4 10 0" stroke="#687a59" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Hearts */}
      <path d="M40 40c-1-3 3-6 6-4 2 1 3 3 3 5-1 5-6 10-9 12-3-2-8-7-9-12 0-2 1-4 3-5 3-2 7 1 6 4z" fill="#a5b396" opacity="0.6" />
      <path d="M160 50c-1-2 2-4 4-3 1 1 2 2 2 3-1 4-4 7-6 9-2-2-5-5-6-9 0-1 1-2 2-3 2-1 5 1 4 3z" fill="#a5b396" opacity="0.5" />
      
      {/* Ruler */}
      <rect x="150" y="100" width="30" height="8" rx="2" fill="#687a59" opacity="0.3" />
      <path d="M155 100v8M162 100v5M169 100v8M176 100v5" stroke="#687a59" strokeWidth="1" opacity="0.5" />
      
      <defs>
        <linearGradient id="pedGrad" x1="0" y1="0" x2="200" y2="160">
          <stop stopColor="#faf9f6" />
          <stop offset="1" stopColor="#f2efe8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

