'use client'

import { Share2 } from 'lucide-react'
import Link from 'next/link'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-sage-100 sticky top-24">
      <h3 className="font-display font-semibold text-forest mb-4 flex items-center gap-2">
        <Share2 className="w-4 h-4 text-sage-500" />
        Partager cet article
      </h3>
      <div className="flex gap-2">
        <button 
          onClick={shareOnFacebook}
          className="flex-1 py-2 px-4 bg-[#1877f2] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Facebook
        </button>
        <button 
          onClick={shareOnTwitter}
          className="flex-1 py-2 px-4 bg-[#1da1f2] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Twitter
        </button>
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-sage-100">
        <p className="text-sm text-forest/60 mb-3">Une question sur ce sujet ?</p>
        <Link 
          href="/#contact"
          className="block w-full py-3 bg-sage-600 text-white text-center rounded-xl font-medium hover:bg-sage-700 transition-colors"
        >
          Prendre RDV
        </Link>
      </div>
    </div>
  )
}

