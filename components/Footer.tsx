import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest text-sage-100">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sage-500 rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">P</span>
              </div>
              <span className="font-display text-2xl font-semibold text-white">
                Pod<span className="text-sage-400">2</span>care
              </span>
            </Link>
            <p className="text-sage-300 leading-relaxed">
              Votre cabinet de podologie dédié à votre bien-être et à la santé de vos pieds.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
                <span className="text-sage-300">
                  123 Rue de la Santé<br />
                  75014 Paris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage-400 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-sage-300 hover:text-white transition-colors">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage-400 flex-shrink-0" />
                <a href="mailto:contact@pod2care.fr" className="text-sage-300 hover:text-white transition-colors">
                  contact@pod2care.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sage-400 flex-shrink-0" />
                <div className="text-sage-300">
                  <p>Lundi - Vendredi</p>
                  <p className="text-white">9h00 - 19h00</p>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-3">
                <Clock className="w-5 h-5 text-sage-400 flex-shrink-0 opacity-0" />
                <div className="text-sage-300">
                  <p>Samedi</p>
                  <p className="text-white">9h00 - 13h00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-sage-800/50 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-sage-800/50 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <Link href="#" className="block text-sage-300 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="block text-sage-300 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage-800">
        <div className="container-main py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage-400 text-sm">
            © {new Date().getFullYear()} Pod2care. Tous droits réservés.
          </p>
          <p className="text-sage-500 text-sm">
            Conçu avec soin pour votre bien-être
          </p>
        </div>
      </div>
    </footer>
  )
}

