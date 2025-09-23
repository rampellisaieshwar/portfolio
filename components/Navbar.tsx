'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'AI Twin', href: '#ai-twin' },
  { name: 'Labs', href: '#labs' },
  { name: 'Timeline', href: '#timeline' },
  // { name: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong' : 'glass'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center">
              <span className="text-black font-bold text-sm">SE</span>
            </div>
            <span className="font-bold text-lg gradient-text">Sai Eshwar</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/rampellisaieshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:glass-strong transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/saieshwarrampelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:glass-strong transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rampellisaieshwar@gmail.com"
              className="p-2 rounded-lg glass hover:glass-strong transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-4 pt-4">
              <a
                href="https://github.com/rampellisaieshwar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:glass-strong transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/saieshwarrampelli/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:glass-strong transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:rampellisaieshwar@gmail.com"
                className="p-2 rounded-lg glass hover:glass-strong transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
