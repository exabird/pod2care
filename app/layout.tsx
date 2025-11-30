import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pod2care | Cabinet de Podologie',
  description: 'Votre cabinet de podologie spécialisé dans les soins des pieds, semelles orthopédiques et bien-être. Prenez rendez-vous dès maintenant.',
  keywords: ['podologie', 'podologue', 'soins des pieds', 'semelles orthopédiques', 'Pod2care'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

