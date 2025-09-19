'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-20 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center">
                <span className="text-black font-bold text-lg">SE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Rampelli Sai Eshwar</h3>
                <p className="text-sm text-white/60">AI/ML Engineer</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rampellisaieshwar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:glass-strong transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/saieshwarrampelli/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:glass-strong transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:rampellisaieshwar@gmail.com"
                className="p-3 rounded-xl glass hover:glass-strong transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-white/10 w-full">
              <p className="text-sm text-white/60 flex items-center justify-center space-x-2">
                <span>© {new Date().getFullYear()} Rampelli Sai Eshwar</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>Built with Next.js & Framer Motion</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
