import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rampelli Sai Eshwar — AI/ML Engineer',
  description: 'AI/ML Engineer specializing in Computer Vision, LLMs, and Real-Time Systems. Interactive portfolio with AI Twin chatbot featuring iOS 26 glassmorphism design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
