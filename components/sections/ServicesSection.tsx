'use client'

import { motion } from 'framer-motion'
import { Footprints, Shield, Heart, Sparkles, ArrowRight, Activity, Baby } from 'lucide-react'
import Link from 'next/link'
import { 
  PedicureIllustration, 
  OrthopedicInsoleIllustration, 
  DiagnosticIllustration, 
  DiabetesIllustration, 
  SportIllustration, 
  PediatricIllustration 
} from '@/components/illustrations/ServiceIllustrations'

const services = [
  {
    icon: Footprints,
    illustration: PedicureIllustration,
    title: 'Soins de pédicurie',
    description: 'Traitement expert des cors, durillons, ongles incarnés et mycoses pour retrouver confort et mobilité.',
    features: ['Cors & durillons', 'Ongles incarnés', 'Verrues plantaires', 'Mycoses'],
    price: 'À partir de 35€',
    duration: '30-45 min',
    color: 'sage',
  },
  {
    icon: Shield,
    illustration: OrthopedicInsoleIllustration,
    title: 'Semelles orthopédiques',
    description: 'Semelles sur mesure conçues par scanner 3D pour corriger les troubles posturaux.',
    features: ['Analyse posturale', 'Scanner 3D', 'Conception CAO', 'Garantie adaptation'],
    price: 'À partir de 150€',
    duration: '45-60 min',
    color: 'sand',
  },
  {
    icon: Heart,
    illustration: DiagnosticIllustration,
    title: 'Bilan podologique',
    description: "Examen complet de vos pieds et posture pour identifier les déséquilibres.",
    features: ['Examen biomécanique', 'Baropodométrie', 'Analyse de la marche', 'Recommandations'],
    price: 'À partir de 60€',
    duration: '60 min',
    color: 'sage',
  },
  {
    icon: Sparkles,
    illustration: DiabetesIllustration,
    title: 'Suivi diabétique',
    description: 'Programme spécialisé grade 1-3 avec soins préventifs et éducation thérapeutique.',
    features: ['Bilan annuel', 'Soins préventifs', 'Prévention plaies', 'Coordination médicale'],
    price: 'Prise en charge SS',
    duration: '30-45 min',
    color: 'sand',
  },
  {
    icon: Activity,
    illustration: SportIllustration,
    title: 'Podologie du sport',
    description: 'Prise en charge des sportifs : prévention, performance et récupération.',
    features: ['Bilan sportif', 'Semelles sport', 'Prévention blessures', 'Strapping'],
    price: 'À partir de 60€',
    duration: '45-60 min',
    color: 'sage',
  },
  {
    icon: Baby,
    illustration: PediatricIllustration,
    title: 'Podologie pédiatrique',
    description: "Suivi du développement du pied de l'enfant et dépistage précoce.",
    features: ['Dépistage précoce', 'Pieds plats/creux', 'Troubles marche', 'Semelles enfant'],
    price: 'À partir de 40€',
    duration: '30-45 min',
    color: 'sand',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-cream" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand-100/50 rounded-full blur-3xl" />
      
      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
            Nos expertises
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mb-4">
            Des soins complets adaptés à{' '}
            <span className="text-sage-600">tous vos besoins</span>
          </h2>
          <p className="text-lg text-forest/60 leading-relaxed">
            Une approche personnalisée alliant expertise technique, technologies de pointe 
            et accompagnement bienveillant.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const IllustrationComponent = service.illustration
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`group relative rounded-3xl border transition-all duration-500 hover:shadow-xl overflow-hidden ${
                  service.color === 'sage' 
                    ? 'bg-white border-sage-100 hover:border-sage-200 hover:shadow-sage-200/50' 
                    : 'bg-white border-sand-100 hover:border-sand-200 hover:shadow-sand-200/50'
                }`}
              >
                {/* Illustration */}
                <div className="relative overflow-hidden">
                  <IllustrationComponent className="w-full h-40 object-cover" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.color === 'sage' ? 'bg-sage-500' : 'bg-sand-500'
                  }`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-forest mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-forest/60 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-sage-100">
                    <span className={`text-sm font-semibold ${service.color === 'sage' ? 'text-sage-600' : 'text-sand-700'}`}>
                      {service.price}
                    </span>
                    <span className="text-xs text-forest/40">•</span>
                    <span className="text-sm text-forest/50">{service.duration}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-forest/70">
                        <svg className={`w-4 h-4 flex-shrink-0 ${service.color === 'sage' ? 'text-sage-500' : 'text-sand-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link 
                    href="#contact" 
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      service.color === 'sage' ? 'text-sage-600 hover:text-sage-700' : 'text-sand-700 hover:text-sand-800'
                    }`}
                  >
                    Prendre RDV
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-forest/60 mb-4">Besoin d&apos;un conseil personnalisé ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/blog" className="btn-secondary">
              Consulter notre blog santé
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
