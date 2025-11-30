'use client'

import { ArrowRight, Sparkles, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FootCareIllustration from '@/components/illustrations/FootCareIllustration'

export default function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream to-sand-50" />
      
      {/* Organic shapes */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-sage-200/40 organic-blob blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sand-200/50 organic-blob blur-2xl" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 grain" />
      
      <div className="container-main relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-sage-200 mb-6"
            >
              <Sparkles className="w-4 h-4 text-sage-600" />
              <span className="text-sm font-medium text-sage-700">Cabinet de podologie à Paris 14ème</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] text-forest mb-6">
              Prenez soin de{' '}
              <span className="relative inline-block">
                <span className="relative z-10">vos pieds</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path 
                    d="M2 8C50 2 150 2 198 8" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="text-sage-400"
                  />
                </svg>
              </span>
              ,{' '}
              <span className="text-sage-600">ils vous portent chaque jour</span>
            </h1>

            <p className="text-lg lg:text-xl text-forest/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Podologue diplômé d&apos;État avec plus de 10 ans d&apos;expérience, je vous accompagne 
              avec des soins personnalisés pour votre confort, votre mobilité et votre bien-être au quotidien.
              Spécialisé dans les semelles orthopédiques sur mesure et le suivi des patients diabétiques.
            </p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn-primary group">
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="btn-secondary">
                Découvrir nos soins
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-sage-200 border-2 border-cream flex items-center justify-center text-xs font-medium text-sage-700"
                    >
                      {['M', 'S', 'L', 'P'][i-1]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-forest/60">+500 patients satisfaits</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-sm text-forest/60 ml-1">4.9/5 sur Google</span>
              </div>
            </motion.div>

            {/* Key benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-sage-200"
            >
              <div className="text-center lg:text-left">
                <div className="w-10 h-10 mx-auto lg:mx-0 bg-sage-100 rounded-xl flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-sage-600" />
                </div>
                <p className="text-sm font-medium text-forest">Conventionné</p>
                <p className="text-xs text-forest/50">Secteur 1</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="w-10 h-10 mx-auto lg:mx-0 bg-sage-100 rounded-xl flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-sage-600" />
                </div>
                <p className="text-sm font-medium text-forest">RDV rapide</p>
                <p className="text-xs text-forest/50">Sous 48h</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="w-10 h-10 mx-auto lg:mx-0 bg-sage-100 rounded-xl flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-sage-600" />
                </div>
                <p className="text-sm font-medium text-forest">Diplômé d&apos;État</p>
                <p className="text-xs text-forest/50">Depuis 2014</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background circle */}
              <div className="absolute inset-8 bg-gradient-to-br from-sage-300 to-sage-400 rounded-full opacity-20 blur-2xl" />
              
              {/* Main illustration */}
              <FootCareIllustration className="w-full h-auto relative z-10" />

              {/* Floating cards */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-8 right-0 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-sage-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest">Disponible</p>
                    <p className="text-xs text-sage-600">Lun-Sam</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-20 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-sage-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest">Carte Vitale</p>
                    <p className="text-xs text-sage-600">Acceptée</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-sage-500">
          <span className="text-xs uppercase tracking-wider">Découvrir</span>
          <div className="w-6 h-10 border-2 border-sage-300 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-sage-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
