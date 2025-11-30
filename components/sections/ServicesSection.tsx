'use client'

import { motion } from 'framer-motion'
import { Footprints, Shield, Heart, Sparkles, ArrowRight, Activity, Baby, Dumbbell } from 'lucide-react'
import Link from 'next/link'
import OrthopedicIllustration from '@/components/illustrations/OrthopedicIllustration'

const services = [
  {
    icon: Footprints,
    title: 'Soins de pédicurie',
    description: 'Traitement expert des cors, durillons, ongles incarnés, mycoses et autres affections cutanées pour retrouver confort et mobilité.',
    features: ['Cors & durillons', 'Ongles incarnés', 'Verrues plantaires', 'Mycoses', 'Hyperkératose'],
    price: 'À partir de 35€',
    duration: '30-45 min',
    color: 'sage',
  },
  {
    icon: Shield,
    title: 'Semelles orthopédiques',
    description: 'Semelles sur mesure conçues par scanner 3D pour corriger les troubles posturaux et soulager les douleurs articulaires.',
    features: ['Analyse posturale complète', 'Scanner 3D', 'Conception CAO', 'Suivi personnalisé', 'Garantie adaptation'],
    price: 'À partir de 150€',
    duration: '45-60 min',
    color: 'sand',
  },
  {
    icon: Heart,
    title: 'Bilan podologique',
    description: "Examen complet de vos pieds, de votre posture et de votre démarche pour identifier les déséquilibres et établir un plan de soins.",
    features: ['Examen biomécanique', 'Baropodométrie', 'Analyse de la marche', 'Bilan articulaire', 'Recommandations'],
    price: 'À partir de 60€',
    duration: '60 min',
    color: 'sage',
  },
  {
    icon: Sparkles,
    title: 'Suivi diabétique',
    description: 'Programme de suivi spécialisé grade 1 à 3 pour les patients diabétiques avec soins préventifs et éducation thérapeutique.',
    features: ['Bilan annuel obligatoire', 'Soins préventifs', 'Éducation thérapeutique', 'Prévention des plaies', 'Coordination médicale'],
    price: 'Prise en charge SS',
    duration: '30-45 min',
    color: 'sand',
  },
  {
    icon: Activity,
    title: 'Podologie du sport',
    description: 'Prise en charge spécifique des sportifs : prévention des blessures, optimisation de la performance et récupération.',
    features: ['Bilan sportif', 'Semelles sport', 'Prévention blessures', 'Strapping', 'Conseil équipement'],
    price: 'À partir de 60€',
    duration: '45-60 min',
    color: 'sage',
  },
  {
    icon: Baby,
    title: 'Podologie pédiatrique',
    description: "Suivi du développement du pied de l'enfant, dépistage précoce des anomalies et traitement adapté à chaque âge.",
    features: ['Dépistage précoce', 'Pieds plats/creux', 'Troubles de la marche', 'Semelles enfant', 'Conseil chaussage'],
    price: 'À partir de 40€',
    duration: '30-45 min',
    color: 'sand',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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
            Une approche personnalisée pour chaque patient, alliant expertise technique, 
            technologies de pointe et accompagnement bienveillant. Du nourrisson au senior,
            du sédentaire au sportif de haut niveau.
          </p>
        </motion.div>

        {/* Featured illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-sage-200/30 rounded-full blur-3xl" />
            <OrthopedicIllustration className="w-64 h-64 relative z-10" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative p-6 lg:p-8 rounded-3xl border transition-all duration-500 hover:shadow-xl ${
                service.color === 'sage' 
                  ? 'bg-gradient-to-br from-sage-50 to-white border-sage-100 hover:border-sage-200 hover:shadow-sage-200/50' 
                  : 'bg-gradient-to-br from-sand-50 to-white border-sand-100 hover:border-sand-200 hover:shadow-sand-200/50'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                service.color === 'sage' ? 'bg-sage-500' : 'bg-sand-500'
              }`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
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
                {service.features.slice(0, 4).map((feature) => (
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-8 bg-sage-50 rounded-3xl border border-sage-100"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 mx-auto bg-sage-500 rounded-2xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-display font-semibold text-forest mb-1">Conventionné Sécurité Sociale</h4>
              <p className="text-sm text-forest/60">Secteur 1 - Tarifs opposables - Carte Vitale acceptée</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-sage-500 rounded-2xl flex items-center justify-center mb-3">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-display font-semibold text-forest mb-1">Équipements modernes</h4>
              <p className="text-sm text-forest/60">Scanner 3D, baropodométrie, conception CAO</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-sage-500 rounded-2xl flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-display font-semibold text-forest mb-1">Prise en charge mutuelle</h4>
              <p className="text-sm text-forest/60">Devis gratuit - Tiers payant possible</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
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
