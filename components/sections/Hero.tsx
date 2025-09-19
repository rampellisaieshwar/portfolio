'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Sparkles, Code, Brain } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto motion-fallback"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center motion-fallback"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl overflow-hidden glass-strong border-2 border-white/20">
                <Image
                  src="/me9.png"
                  alt="Rampelli Sai Eshwar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 motion-fallback"
          >
            <span className="gradient-text">Rampelli Sai Eshwar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto motion-fallback"
          >
            AI/ML Engineer | Computer Vision | LLMs | Real-Time Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto motion-fallback"
          >
            Building production-grade AI systems, optimizing models for edge inference, 
            and creating LLM-powered agents to automate developer workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 motion-fallback"
          >
            <Button
              size="lg"
              variant="gradient"
              className="text-lg px-8 py-4 rounded-xl"
              onClick={() => scrollToSection('#labs')}
            >
              <Code className="w-5 h-5 mr-2" />
              Explore Labs
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="text-lg px-8 py-4 rounded-xl"
              onClick={() => scrollToSection('#ai-twin')}
            >
              <Brain className="w-5 h-5 mr-2" />
              Meet My AI Twin
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="text-lg px-8 py-4 rounded-xl"
              onClick={() => scrollToSection('#blog')}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Blog/Notes
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center motion-fallback"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('#ai-twin')}
              className="p-3 rounded-full glass hover:glass-strong transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
