'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/#accueil' },
  { name: 'Services', href: '/#services' },
  { name: 'À propos', href: '/#apropos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cream/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-display font-bold text-lg">P</span>
            </div>
            <span className="font-display text-2xl font-semibold text-forest">
              Pod<span className="text-sage-600">2</span>care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-forest/80 hover:text-sage-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sage-500 hover:after:w-full after:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+33123456789" 
              className="flex items-center gap-2 text-sage-700 hover:text-sage-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
            <Link href="#contact" className="btn-primary">
              Prendre RDV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-forest hover:text-sage-600 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-cream/98 backdrop-blur-lg border-t border-sage-100 animate-fade-in">
            <div className="container-main py-6 space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-lg text-forest hover:text-sage-600 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-sage-100">
                <Link 
                  href="#contact" 
                  className="btn-primary w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

