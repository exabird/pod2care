export default function FootCareIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.1" />
      
      {/* Foot outline */}
      <path
        d="M180 320c-30-10-50-40-55-80-5-45 10-90 40-120 25-25 60-35 90-25 35 12 55 50 50 95-3 30-15 60-35 85-15 20-35 35-60 45-10 3-20 3-30 0z"
        fill="url(#gradient2)"
        stroke="#687a59"
        strokeWidth="3"
      />
      
      {/* Toes */}
      <ellipse cx="145" cy="115" rx="18" ry="25" fill="#a5b396" stroke="#687a59" strokeWidth="2" />
      <ellipse cx="175" cy="95" rx="16" ry="28" fill="#a5b396" stroke="#687a59" strokeWidth="2" />
      <ellipse cx="205" cy="85" rx="15" ry="30" fill="#a5b396" stroke="#687a59" strokeWidth="2" />
      <ellipse cx="235" cy="95" rx="14" ry="26" fill="#a5b396" stroke="#687a59" strokeWidth="2" />
      <ellipse cx="260" cy="110" rx="12" ry="22" fill="#a5b396" stroke="#687a59" strokeWidth="2" />
      
      {/* Care hands */}
      <path
        d="M90 200c-10-5-15-15-10-25 5-12 20-15 30-8 8 5 12 15 10 25-3 12-18 18-30 8z"
        fill="#d3c7b3"
        stroke="#886f59"
        strokeWidth="2"
      />
      <path
        d="M310 220c10-5 15-15 10-25-5-12-20-15-30-8-8 5-12 15-10 25 3 12 18 18 30 8z"
        fill="#d3c7b3"
        stroke="#886f59"
        strokeWidth="2"
      />
      
      {/* Heart symbol */}
      <path
        d="M200 180c-5-15 10-30 25-25 10 3 15 15 10 25l-35 45-35-45c-5-10 0-22 10-25 15-5 30 10 25 25z"
        fill="#687a59"
        opacity="0.8"
      />
      
      {/* Sparkles */}
      <circle cx="120" cy="60" r="4" fill="#687a59" />
      <circle cx="290" cy="70" r="3" fill="#687a59" />
      <circle cx="330" cy="180" r="5" fill="#a5b396" />
      <circle cx="70" cy="260" r="4" fill="#a5b396" />
      
      {/* Plus signs for medical */}
      <g fill="#687a59" opacity="0.6">
        <rect x="55" y="145" width="20" height="4" rx="2" />
        <rect x="63" y="137" width="4" height="20" rx="2" />
        <rect x="325" y="265" width="16" height="3" rx="1.5" />
        <rect x="331.5" y="258.5" width="3" height="16" rx="1.5" />
      </g>
      
      <defs>
        <linearGradient id="gradient1" x1="20" y1="20" x2="380" y2="380">
          <stop stopColor="#687a59" />
          <stop offset="1" stopColor="#a5b396" />
        </linearGradient>
        <linearGradient id="gradient2" x1="140" y1="100" x2="280" y2="320">
          <stop stopColor="#c8d1bf" />
          <stop offset="1" stopColor="#a5b396" />
        </linearGradient>
      </defs>
    </svg>
  )
}

