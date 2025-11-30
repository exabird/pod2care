'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "Enfin un podologue qui prend le temps d'écouter ! Mes semelles sur mesure ont changé ma vie, plus aucune douleur au dos.",
    author: 'Marie L.',
    role: 'Patiente depuis 3 ans',
    rating: 5,
  },
  {
    content: "Très professionnel et bienveillant. Le cabinet est accueillant et moderne. Je recommande vivement pour tous les problèmes de pieds.",
    author: 'Pierre D.',
    role: 'Patient diabétique',
    rating: 5,
  },
  {
    content: "Excellente prise en charge de mon ongle incarné. Soins rapides, efficaces et sans douleur. Merci pour votre gentillesse !",
    author: 'Sophie M.',
    role: 'Nouvelle patiente',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50 to-cream" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage-200/30 rounded-full blur-3xl" />
      
      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-sage-700 rounded-full text-sm font-medium mb-4 shadow-sm">
            Témoignages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mb-4">
            Ce que disent{' '}
            <span className="text-sage-600">nos patients</span>
          </h2>
          <p className="text-lg text-forest/60">
            La satisfaction de nos patients est notre meilleure récompense.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-sage-100 h-full hover:shadow-xl hover:shadow-sage-200/30 transition-shadow duration-500">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-500 transition-colors">
                  <Quote className="w-5 h-5 text-sage-600 group-hover:text-white transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-forest/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sage-200 rounded-full flex items-center justify-center">
                    <span className="font-medium text-sage-700">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-forest">{testimonial.author}</p>
                    <p className="text-sm text-forest/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-sm border border-sage-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="h-8 w-px bg-sage-200" />
            <div>
              <p className="font-display font-semibold text-forest">4.9/5</p>
              <p className="text-xs text-forest/50">sur Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

