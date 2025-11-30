export default function BlogIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background shapes */}
      <circle cx="320" cy="80" r="60" fill="#687a59" opacity="0.1" />
      <circle cx="80" cy="220" r="50" fill="#a5b396" opacity="0.1" />
      
      {/* Main document/article */}
      <rect x="100" y="40" width="200" height="220" rx="12" fill="white" stroke="#e3e7de" strokeWidth="2" />
      
      {/* Article header image placeholder */}
      <rect x="115" y="55" width="170" height="70" rx="8" fill="url(#blogGrad1)" />
      <path d="M160 90l20-15 25 25 30-20 35 30v20H160V90z" fill="#516145" opacity="0.5" />
      <circle cx="175" cy="80" r="10" fill="#a5b396" />
      
      {/* Title lines */}
      <rect x="115" y="140" width="140" height="10" rx="5" fill="#363f30" />
      <rect x="115" y="158" width="100" height="6" rx="3" fill="#687a59" opacity="0.5" />
      
      {/* Content lines */}
      <rect x="115" y="180" width="170" height="4" rx="2" fill="#c8d1bf" />
      <rect x="115" y="192" width="150" height="4" rx="2" fill="#c8d1bf" />
      <rect x="115" y="204" width="165" height="4" rx="2" fill="#c8d1bf" />
      <rect x="115" y="216" width="120" height="4" rx="2" fill="#c8d1bf" />
      <rect x="115" y="228" width="155" height="4" rx="2" fill="#c8d1bf" />
      
      {/* Floating article cards */}
      <g transform="translate(40, 80)">
        <rect width="70" height="90" rx="8" fill="white" stroke="#e3e7de" strokeWidth="1.5" />
        <rect x="8" y="8" width="54" height="35" rx="4" fill="#a5b396" opacity="0.3" />
        <rect x="8" y="50" width="45" height="5" rx="2.5" fill="#687a59" />
        <rect x="8" y="60" width="35" height="3" rx="1.5" fill="#c8d1bf" />
        <rect x="8" y="68" width="50" height="3" rx="1.5" fill="#c8d1bf" />
        <rect x="8" y="76" width="30" height="3" rx="1.5" fill="#c8d1bf" />
      </g>
      
      <g transform="translate(290, 120)">
        <rect width="70" height="90" rx="8" fill="white" stroke="#e3e7de" strokeWidth="1.5" />
        <rect x="8" y="8" width="54" height="35" rx="4" fill="#d3c7b3" opacity="0.4" />
        <rect x="8" y="50" width="45" height="5" rx="2.5" fill="#687a59" />
        <rect x="8" y="60" width="35" height="3" rx="1.5" fill="#c8d1bf" />
        <rect x="8" y="68" width="50" height="3" rx="1.5" fill="#c8d1bf" />
        <rect x="8" y="76" width="30" height="3" rx="1.5" fill="#c8d1bf" />
      </g>
      
      {/* Magnifying glass - search */}
      <g transform="translate(310, 30)">
        <circle cx="25" cy="25" r="20" stroke="#687a59" strokeWidth="4" fill="none" />
        <line x1="40" y1="40" x2="55" y2="55" stroke="#687a59" strokeWidth="4" strokeLinecap="round" />
      </g>
      
      {/* Question marks */}
      <text x="55" y="60" fontSize="24" fill="#687a59" opacity="0.4" fontFamily="Georgia, serif">?</text>
      <text x="340" y="250" fontSize="20" fill="#a5b396" opacity="0.5" fontFamily="Georgia, serif">?</text>
      
      {/* Foot icon in article */}
      <g transform="translate(240, 70)">
        <ellipse cx="15" cy="12" rx="12" ry="8" fill="white" opacity="0.8" />
        <ellipse cx="6" cy="6" rx="3" ry="5" fill="white" opacity="0.8" />
        <ellipse cx="12" cy="3" rx="2.5" ry="5" fill="white" opacity="0.8" />
        <ellipse cx="18" cy="2" rx="2" ry="4.5" fill="white" opacity="0.8" />
        <ellipse cx="24" cy="4" rx="2" ry="4" fill="white" opacity="0.8" />
      </g>
      
      <defs>
        <linearGradient id="blogGrad1" x1="115" y1="55" x2="285" y2="125">
          <stop stopColor="#c8d1bf" />
          <stop offset="1" stopColor="#849574" />
        </linearGradient>
      </defs>
    </svg>
  )
}

