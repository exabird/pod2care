'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import ContactIllustration from '@/components/illustrations/ContactIllustration'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-sand-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sage-100/40 rounded-full blur-3xl" />
      
      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mb-4">
            Prenez{' '}
            <span className="text-sage-600">rendez-vous</span>
          </h2>
          <p className="text-lg text-forest/60">
            Notre équipe vous accueille du lundi au samedi. N&apos;hésitez pas à nous contacter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Illustration + Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Map */}
            <div className="mb-8 rounded-3xl overflow-hidden shadow-lg">
              <ContactIllustration className="w-full h-auto" />
            </div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-5 border border-sage-100 hover:shadow-lg hover:shadow-sage-100/50 transition-shadow">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest text-sm mb-1">Adresse</h3>
                    <p className="text-forest/60 text-sm">
                      123 Rue de la Santé<br />
                      75014 Paris
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      Voir sur Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 border border-sage-100 hover:shadow-lg hover:shadow-sage-100/50 transition-shadow">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest text-sm mb-1">Téléphone</h3>
                    <a 
                      href="tel:+33123456789" 
                      className="text-lg font-medium text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-5 border border-sage-100 hover:shadow-lg hover:shadow-sage-100/50 transition-shadow">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest text-sm mb-1">Email</h3>
                    <a 
                      href="mailto:contact@pod2care.fr" 
                      className="text-sage-600 hover:text-sage-700 transition-colors text-sm"
                    >
                      contact@pod2care.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-5 border border-sage-100 hover:shadow-lg hover:shadow-sage-100/50 transition-shadow">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sage-600" />
                  </div>
                  <div className="text-sm">
                    <h3 className="font-display font-semibold text-forest mb-1">Horaires</h3>
                    <p className="text-forest/60">Lun-Ven : <span className="text-forest">9h-19h</span></p>
                    <p className="text-forest/60">Sam : <span className="text-forest">9h-13h</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-3xl p-8 lg:p-10 text-white h-full flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
                  Réservez votre consultation
                </h3>
                <p className="text-sage-100 leading-relaxed">
                  Prenez rendez-vous en ligne facilement et rapidement. 
                  Choisissez le créneau qui vous convient le mieux.
                </p>
              </div>

              {/* Booking options */}
              <div className="space-y-4">
                <a 
                  href="https://www.doctolib.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-white text-sage-700 font-semibold rounded-2xl hover:bg-sage-50 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  Prendre RDV sur Doctolib
                </a>
                
                <div className="text-center text-sage-200 text-sm">ou</div>
                
                <a 
                  href="tel:+33123456789"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-sage-600 text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-sage-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Appeler le cabinet
                </a>
              </div>

              {/* Info badges */}
              <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Conventionné
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Carte Vitale
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Accès PMR
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
