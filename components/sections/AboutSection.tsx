'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Clock, Heart, Stethoscope } from 'lucide-react'
import AboutIllustration from '@/components/illustrations/AboutIllustration'

const stats = [
  { icon: Clock, value: '10+', label: "Années d'expérience" },
  { icon: Users, value: '500+', label: 'Patients suivis' },
  { icon: Award, value: '100%', label: 'Satisfaction' },
  { icon: GraduationCap, value: 'DE', label: "Diplômé d'État" },
]

const values = [
  {
    icon: Heart,
    title: 'Écoute & Bienveillance',
    description: 'Chaque patient est unique. Je prends le temps de comprendre vos besoins.',
  },
  {
    icon: Stethoscope,
    title: 'Expertise médicale',
    description: 'Formation continue et équipements de dernière génération.',
  },
  {
    icon: Users,
    title: 'Suivi personnalisé',
    description: "Un accompagnement sur le long terme pour garantir l'efficacité.",
  },
]

export default function AboutSection() {
  return (
    <section id="apropos" className="section-padding relative overflow-hidden bg-forest">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main illustration */}
              <AboutIllustration className="w-full h-auto" />

              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-forest">Certifié</p>
                    <p className="text-sm text-forest/60">Ordre des podologues</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-sage-600/20 text-sage-300 rounded-full text-sm font-medium mb-4">
              À propos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Une approche{' '}
              <span className="text-sage-400">humaine</span>{' '}
              de la podologie
            </h2>
            
            <div className="space-y-4 text-sage-200 leading-relaxed mb-10">
              <p>
                Passionné par mon métier depuis plus de 10 ans, je mets mon expertise 
                au service de votre bien-être. Diplômé de l&apos;Institut de Podologie de Paris,
                je me suis spécialisé dans la conception de semelles orthopédiques sur mesure
                et le suivi des patients diabétiques.
              </p>
              <p>
                Mon cabinet est équipé des dernières technologies : plateforme de baropodométrie,
                scanner 3D pour les empreintes, et logiciels de conception assistée par ordinateur.
              </p>
              <p className="font-medium text-white">
                Conventionné secteur 1, je suis agréé par la Sécurité sociale et 
                la plupart des mutuelles.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex gap-4 p-4 bg-sage-800/30 rounded-2xl"
                >
                  <div className="w-10 h-10 bg-sage-600/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-sage-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{value.title}</h4>
                    <p className="text-sm text-sage-300/80">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-sage-600/30 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-sage-400" />
                  </div>
                  <p className="font-display text-2xl lg:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-sage-300/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
