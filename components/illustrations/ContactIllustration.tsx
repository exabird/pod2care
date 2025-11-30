export default function ContactIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className}>
      {/* Map background */}
      <rect width="400" height="300" rx="20" fill="#e3e7de" />
      
      {/* Streets pattern */}
      <g stroke="#c8d1bf" strokeWidth="8" strokeLinecap="round">
        <path d="M0 100h400" />
        <path d="M0 200h400" />
        <path d="M100 0v300" />
        <path d="M200 0v300" />
        <path d="M300 0v300" />
      </g>
      
      {/* Building blocks */}
      <rect x="20" y="20" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="120" y="20" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="220" y="20" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="320" y="20" width="60" height="60" rx="8" fill="#f6f7f4" />
      
      <rect x="20" y="120" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="320" y="120" width="60" height="60" rx="8" fill="#f6f7f4" />
      
      <rect x="20" y="220" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="120" y="220" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="220" y="220" width="60" height="60" rx="8" fill="#f6f7f4" />
      <rect x="320" y="220" width="60" height="60" rx="8" fill="#f6f7f4" />
      
      {/* Clinic location - highlighted building */}
      <rect x="120" y="120" width="80" height="60" rx="10" fill="#687a59" />
      <rect x="130" y="130" width="20" height="20" rx="3" fill="white" opacity="0.3" />
      <rect x="160" y="130" width="30" height="15" rx="2" fill="white" opacity="0.3" />
      <rect x="160" y="150" width="30" height="20" rx="2" fill="white" opacity="0.5" />
      
      {/* Location pin */}
      <g transform="translate(145, 60)">
        <path 
          d="M30 0C15 0 0 13 0 30c0 25 30 50 30 50s30-25 30-50c0-17-15-30-30-30z" 
          fill="#516145"
        />
        <circle cx="30" cy="28" r="12" fill="white" />
        <text x="30" y="34" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#516145">P</text>
        
        {/* Pulse effect circles */}
        <circle cx="30" cy="30" r="35" stroke="#687a59" strokeWidth="2" fill="none" opacity="0.3">
          <animate attributeName="r" from="30" to="50" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="30" r="35" stroke="#687a59" strokeWidth="2" fill="none" opacity="0.3">
          <animate attributeName="r" from="30" to="50" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Paris label */}
      <g transform="translate(230, 125)">
        <rect width="80" height="30" rx="15" fill="white" />
        <text x="40" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#363f30">Paris 14e</text>
      </g>
      
      {/* Metro icon */}
      <g transform="translate(125, 195)">
        <circle cx="12" cy="12" r="12" fill="#516145" />
        <text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">M</text>
      </g>
      
      {/* Trees/parks */}
      <circle cx="250" cy="150" r="20" fill="#849574" opacity="0.5" />
      <circle cx="270" cy="145" r="15" fill="#a5b396" opacity="0.5" />
      <circle cx="260" cy="165" r="12" fill="#849574" opacity="0.4" />
    </svg>
  )
}

