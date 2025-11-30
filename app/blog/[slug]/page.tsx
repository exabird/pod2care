import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '@/lib/blog-data'
import { Metadata } from 'next'
import ShareButtons from '@/components/ShareButtons'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Article non trouvé | Pod2care',
    }
  }
  
  return {
    title: `${article.title} | Pod2care`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  const allArticles = getAllArticles()
  const currentIndex = allArticles.findIndex(a => a.slug === slug)
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3)

  const articleUrl = `https://pod2care.fr/blog/${slug}`

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          {/* Back link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-forest/60 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-100 text-sage-700 rounded-full font-medium">
              <Tag className="w-3.5 h-3.5" />
              {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime} de lecture
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mb-6 leading-tight max-w-4xl">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-forest/70 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main content */}
            <article className="prose prose-lg prose-forest max-w-none
              prose-headings:font-display prose-headings:text-forest
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-forest/80 prose-p:leading-relaxed
              prose-li:text-forest/80
              prose-strong:text-forest prose-strong:font-semibold
              prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-sage-500 prose-blockquote:bg-sage-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
              prose-code:text-sage-700 prose-code:bg-sage-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-table:border-collapse
              prose-th:bg-sage-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:p-3 prose-td:border-t prose-td:border-sage-200
            ">
              <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              <ShareButtons title={article.title} url={articleUrl} />
            </aside>
          </div>
        </div>
      </section>

      {/* Author box */}
      <section className="pb-16">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="bg-sage-50 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-20 h-20 bg-sage-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display text-2xl font-bold">P2C</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-forest mb-2">
                  Cabinet Pod2care
                </h3>
                <p className="text-forest/70 leading-relaxed mb-4">
                  Podologue diplômé d&apos;État avec plus de 10 ans d&apos;expérience. 
                  Spécialisé dans les semelles orthopédiques sur mesure et le suivi des patients diabétiques.
                  Cabinet équipé des dernières technologies.
                </p>
                <Link 
                  href="/#apropos"
                  className="text-sage-600 font-medium hover:text-sage-700 transition-colors"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="pb-20">
          <div className="container-main">
            <h2 className="font-display text-2xl font-semibold text-forest mb-8">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  key={relatedArticle.slug}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-sage-100 p-6 hover:shadow-lg hover:shadow-sage-100/50 transition-all h-full">
                    <span className="inline-block px-2 py-1 bg-sage-100 text-sage-700 rounded text-xs font-medium mb-3">
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-display font-semibold text-forest mb-2 group-hover:text-sage-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-forest/60 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="pb-20">
        <div className="container-main">
          <div className="flex justify-between items-center pt-8 border-t border-sage-200">
            {currentIndex < allArticles.length - 1 ? (
              <Link 
                href={`/blog/${allArticles[currentIndex + 1].slug}`}
                className="flex items-center gap-2 text-forest/70 hover:text-sage-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Article précédent
              </Link>
            ) : <div />}
            
            {currentIndex > 0 ? (
              <Link 
                href={`/blog/${allArticles[currentIndex - 1].slug}`}
                className="flex items-center gap-2 text-forest/70 hover:text-sage-600 transition-colors"
              >
                Article suivant
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </main>
  )
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^\|(.+)\|$/gm, (match, content) => {
      const cells = content.split('|').map((cell: string) => cell.trim())
      return `<tr>${cells.map((cell: string) => `<td>${cell}</td>`).join('')}</tr>`
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table><tbody>$&</tbody></table>')
    .replace(/❌/g, '<span class="text-red-500">❌</span>')
    .replace(/⚠️/g, '<span class="text-amber-500">⚠️</span>')
}
