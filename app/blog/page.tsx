'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Search, Calendar, Clock, Tag } from 'lucide-react'
import { getAllArticles } from '@/lib/blog-data'
import BlogIllustration from '@/components/illustrations/BlogIllustration'
import { useState } from 'react'

const categories = ['Tous', 'Soins', 'Orthopédie', 'Prévention', 'Pathologies', 'Pédiatrie', 'Hygiène']

export default function BlogPage() {
  const articles = getAllArticles()
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white to-sage-50">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sand-200/30 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
                Blog & Conseils
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest mb-6 leading-tight">
                Questions fréquentes sur la{' '}
                <span className="text-sage-600">podologie</span>
              </h1>
              <p className="text-lg text-forest/60 leading-relaxed mb-8">
                Retrouvez nos articles pour mieux comprendre vos pieds, prévenir les pathologies
                et prendre soin de votre santé podologique au quotidien.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hidden lg:block"
            >
              <BlogIllustration className="w-full max-w-md mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-sage-600 text-white'
                    : 'bg-white text-forest/70 hover:bg-sage-50 border border-sage-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container-main">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-forest/60 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="group"
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white rounded-3xl border border-sage-100 overflow-hidden hover:shadow-xl hover:shadow-sage-200/30 transition-all duration-500 h-full flex flex-col">
                      {/* Image placeholder */}
                      <div className="h-48 bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ArticleIcon type={article.image} />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-sage-700">
                            <Tag className="w-3 h-3" />
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-forest/50 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </span>
                        </div>

                        <h2 className="font-display text-xl font-semibold text-forest mb-3 group-hover:text-sage-600 transition-colors line-clamp-2">
                          {article.title}
                        </h2>

                        <p className="text-forest/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-2 text-sage-600 font-medium text-sm group-hover:gap-3 transition-all">
                          Lire l&apos;article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-3xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
              Une question sur vos pieds ?
            </h2>
            <p className="text-sage-100 mb-8 max-w-xl mx-auto">
              N&apos;hésitez pas à prendre rendez-vous pour un bilan personnalisé.
              Je répondrai à toutes vos questions en consultation.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sage-700 font-semibold rounded-full hover:bg-sage-50 transition-colors">
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ArticleIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    ongle: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="30" ry="40" />
        <ellipse cx="50" cy="35" rx="20" ry="25" fill="white" opacity="0.5" />
      </svg>
    ),
    semelle: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <path d="M25 20c10-8 30-10 45-5 18 6 25 25 20 45-5 18-20 30-40 35-15 3-30-5-35-20-8-20-3-45 10-55z" />
      </svg>
    ),
    diabete: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="35" />
        <path d="M50 25v25l15 15" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
    ),
    talon: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20 70c0-25 15-45 35-50 15-4 30 5 35 20 5 18-5 35-25 45-15 8-35 5-45-15z" />
      </svg>
    ),
    mycose: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="35" />
        <circle cx="40" cy="40" r="8" fill="white" opacity="0.5" />
        <circle cx="60" cy="55" r="6" fill="white" opacity="0.5" />
        <circle cx="45" cy="65" r="5" fill="white" opacity="0.5" />
      </svg>
    ),
    enfant: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="55" rx="25" ry="30" />
        <circle cx="35" cy="35" r="8" />
        <circle cx="50" cy="30" r="7" />
        <circle cx="65" cy="35" r="6" />
      </svg>
    ),
    cors: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="30" ry="35" />
        <circle cx="50" cy="45" r="12" fill="white" opacity="0.5" />
      </svg>
    ),
    chaussures: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <path d="M15 60c5-15 20-25 40-25 25 0 35 15 35 30 0 10-5 15-15 15H25c-10 0-15-10-10-20z" />
      </svg>
    ),
    hallux: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="55" cy="50" rx="30" ry="35" />
        <circle cx="30" cy="40" r="15" />
      </svg>
    ),
    transpiration: (
      <svg className="w-20 h-20 text-sage-500/30" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="55" rx="30" ry="35" />
        <path d="M35 25c-2 8 0 15 5 15s7-7 5-15c-1-5-4-10-5-10s-4 5-5 10z" fill="white" opacity="0.5" />
        <path d="M55 20c-2 8 0 15 5 15s7-7 5-15c-1-5-4-10-5-10s-4 5-5 10z" fill="white" opacity="0.5" />
        <path d="M70 30c-2 8 0 15 5 15s7-7 5-15c-1-5-4-10-5-10s-4 5-5 10z" fill="white" opacity="0.5" />
      </svg>
    ),
  }
  
  return icons[type] || icons.semelle
}

