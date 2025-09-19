'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  GraduationCap, 
  Code, 
  Brain, 
  Rocket, 
  Award, 
  TrendingUp,
  Calendar,
  MapPin,
  Zap
} from 'lucide-react'

const timelineData = [
  {
    year: '2023',
    title: 'Virtual BlackBoard',
    description: 'Built a computer vision application to enable virtual writing using real-time hand gesture tracking.',
    icon: Code,
    color: 'from-purple-400 to-pink-400',
    details: [
      'Developed with Python, OpenCV, and NumPy for gesture recognition',
      'Implemented real-time hand movement tracking for interactive input',
      'Converted detected gestures into text or drawings displayed dynamically'
    ],
    location: 'Mini Project',
    type: 'Development'
  },
  {
    year: '2024',
    title: 'Vidlingo – Auto Subtitle Generation App',
    description: 'Developed a Python application to generate and translate subtitles for videos using Google Speech-to-Text and Translate APIs.',
    icon: Code,
    color: 'from-green-400 to-emerald-400',
    details: [
      'Converted video audio into text using Google Speech-to-Text API',
      'Integrated Google Translate API for multilingual subtitle support',
      'Extracted audio from video files and processed speech recognition efficiently',
      'Generated synchronized subtitle (.srt) files with accurate audio timestamps'
    ],
    location: 'Major Project',
    type: 'Development'
  },
  {
    year: '2024',
    title: 'Internship at 0101Digitall',
    description: 'Professional experience building production-grade AI systems for equestrian sports',
    icon: Award,
    color: 'from-green-400 to-yellow-400',
    details: [
      'Equestrian AI - Real-time horse detection and tracking',
      'LLaMA-based Universal Search Agent',
      'Model optimization for edge inference',
      'Production deployment and monitoring'
    ],
    location: '0101Digitall',
    type: 'Professional'
  },
  {
    year: '2025',
    title: 'AI-powered Requirements Agent & Universal Search Agent (Internship at 0101Digitall)',
    description: 'Developed intelligent agents using LLaMA and NLP to automate requirement extraction and enable universal natural language search across APIs.',
    icon: Brain,
    color: 'from-indigo-400 to-violet-400',
    details: [
      'Automated requirement extraction from unstructured text using NLP with LLaMA',
      'Orchestrated and executed pre-created APIs based on natural language queries',
      'Implemented real-time workflows for delivering context-aware insights',
      'Utilized Python, Django, pandas, NumPy, and YOLO for backend processing and system integration'
    ],
    location: 'Major Project',
    type: 'Development'
  },
  {
    year: '2025',
    title: 'Equestrian AI (Internship at 0101Digitall)',
    description: 'Contributed to developing a computer vision system for horse movement analysis using deep learning models like YOLO and SSD.',
    icon: Zap,
    color: 'from-orange-400 to-amber-400',
    details: [
      'Developed and fine-tuned object detection and segmentation models for accurate horse identification',
      'Implemented horse gait tracking and visualization using Python, OpenCV, NumPy, and Matplotlib',
      'Integrated system with Django for real-time performance insights and gait analysis',
      'Collaborated on applying deep learning models (YOLO, SSD, TensorFlow, PyTorch) to equestrian video datasets'
    ],
    location: 'Internship – 0101Digitall',
    type: 'Research & Development'
  }
]

export function GrowthTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (isInView) {
      timelineData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index])
        }, index * 200)
      })
    }
  }, [isInView])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Learning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Specialization':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
      case 'Innovation':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30'
      case 'Professional':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Research':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Growth Timeline</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My journey from first project to advanced AI research and production systems
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-400 via-green-400 via-yellow-400 to-orange-400" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const Icon = item.icon
                const isVisible = visibleItems.includes(index)
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center border-4 border-background shadow-lg`}>
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                      <Card className="glass-strong border-white/20 rounded-2xl overflow-hidden group hover:glass-strong transition-all duration-300">
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                                  {item.title}
                                </h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                                  {item.type}
                                </span>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-white/60">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{item.year}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-white/80 mb-4 text-lg">
                            {item.description}
                          </p>

                          {/* Details */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {item.details.map((detail, detailIndex) => (
                                <motion.li
                                  key={detailIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.4, delay: (index * 0.1) + (detailIndex * 0.1) }}
                                  className="flex items-start space-x-2 text-sm text-white/70"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 mt-2 flex-shrink-0" />
                                  <span>{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <Card className="glass border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-white/60">Years Learning</div>
          </Card>
          <Card className="glass border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-white/60">Projects Built</div>
          </Card>
          <Card className="glass border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-white/60">Specializations</div>
          </Card>
          <Card className="glass border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1</div>
            <div className="text-white/60">Professional Experience</div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
