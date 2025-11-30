export default function AboutIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" fill="none" className={className}>
      {/* Background blob */}
      <path 
        d="M50 80c0-35 30-60 60-60h180c35 0 60 25 60 60v280c0 90-70 160-160 160h-20c-90 0-160-70-160-160V80z" 
        fill="url(#aboutBgGrad)" 
      />
      
      {/* Professional podologist figure */}
      <g>
        {/* Head */}
        <circle cx="200" cy="120" r="60" fill="#e8dcd0" />
        
        {/* Hair */}
        <path 
          d="M145 95c8-30 30-45 55-45s47 15 55 45c-18-18-40-22-55-22s-37 4-55 22z" 
          fill="#4a3f35"
        />
        
        {/* Face details */}
        <ellipse cx="180" cy="115" rx="5" ry="6" fill="#4a3f35" />
        <ellipse cx="220" cy="115" rx="5" ry="6" fill="#4a3f35" />
        <path d="M190 138c5 8 15 8 20 0" stroke="#bfab92" strokeWidth="3" strokeLinecap="round" fill="none" />
        
        {/* Glasses */}
        <circle cx="180" cy="115" r="15" stroke="#687a59" strokeWidth="3" fill="none" />
        <circle cx="220" cy="115" r="15" stroke="#687a59" strokeWidth="3" fill="none" />
        <path d="M195 115h10" stroke="#687a59" strokeWidth="3" />
        
        {/* Lab coat body */}
        <path 
          d="M120 190c0-20 35-30 80-30s80 10 80 30v140c0 25-20 45-45 45h-70c-25 0-45-20-45-45V190z" 
          fill="white" 
          stroke="#e3e7de" 
          strokeWidth="2"
        />
        
        {/* Coat collar */}
        <path d="M165 165l35 35 35-35" stroke="#687a59" strokeWidth="4" fill="none" strokeLinecap="round" />
        
        {/* Coat buttons */}
        <circle cx="200" cy="235" r="6" fill="#687a59" />
        <circle cx="200" cy="270" r="6" fill="#687a59" />
        <circle cx="200" cy="305" r="6" fill="#687a59" />
        
        {/* Pocket */}
        <rect x="225" y="220" width="40" height="5" rx="2" fill="#e3e7de" />
        <rect x="230" y="225" width="30" height="35" rx="3" fill="none" stroke="#e3e7de" strokeWidth="2" />
        
        {/* Stethoscope */}
        <path 
          d="M145 185c-15 15-20 45-15 70" 
          stroke="#516145" 
          strokeWidth="5" 
          fill="none" 
          strokeLinecap="round"
        />
        <circle cx="130" cy="260" r="15" fill="#687a59" />
        <circle cx="130" cy="260" r="8" fill="#414d38" />
        
        {/* Arms */}
        <path 
          d="M120 210c-25 15-45 40-50 70" 
          stroke="#e8dcd0" 
          strokeWidth="25" 
          strokeLinecap="round"
        />
        <path 
          d="M280 210c25 15 45 40 50 70" 
          stroke="#e8dcd0" 
          strokeWidth="25" 
          strokeLinecap="round"
        />
        
        {/* Hands */}
        <circle cx="68" cy="285" r="20" fill="#e8dcd0" />
        <circle cx="332" cy="285" r="20" fill="#e8dcd0" />
        
        {/* Tool in hand */}
        <rect x="320" y="265" width="8" height="50" rx="4" fill="#687a59" />
        <ellipse cx="324" cy="265" rx="10" ry="8" fill="#849574" />
        
        {/* Medical badge */}
        <circle cx="155" cy="200" r="18" fill="#687a59" />
        <rect x="149" y="190" width="12" height="20" rx="1" fill="white" />
        <rect x="145" y="196" width="20" height="8" rx="1" fill="white" />
      </g>
      
      {/* Patient foot being examined */}
      <g transform="translate(50, 380)">
        <ellipse cx="60" cy="45" rx="55" ry="35" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="2" />
        <ellipse cx="15" cy="28" rx="12" ry="16" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
        <ellipse cx="35" cy="16" rx="10" ry="18" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
        <ellipse cx="55" cy="10" rx="9" ry="20" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
        <ellipse cx="75" cy="16" rx="8" ry="16" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
        <ellipse cx="92" cy="24" rx="7" ry="14" fill="#f2efe8" stroke="#d3c7b3" strokeWidth="1.5" />
      </g>
      
      {/* Decorative elements */}
      <circle cx="340" cy="100" r="5" fill="#687a59" opacity="0.4" />
      <circle cx="60" cy="150" r="4" fill="#a5b396" opacity="0.5" />
      <circle cx="350" cy="350" r="6" fill="#a5b396" opacity="0.4" />
      
      {/* Plus signs */}
      <g fill="#687a59" opacity="0.3">
        <rect x="50" y="250" width="16" height="4" rx="2" />
        <rect x="56" y="244" width="4" height="16" rx="2" />
        <rect x="330" y="400" width="12" height="3" rx="1.5" />
        <rect x="334.5" y="395.5" width="3" height="12" rx="1.5" />
      </g>
      
      <defs>
        <linearGradient id="aboutBgGrad" x1="50" y1="20" x2="350" y2="480">
          <stop stopColor="#e3e7de" stopOpacity="0.5" />
          <stop offset="1" stopColor="#c8d1bf" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  )
}

