'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye, Brain, Server, Play, Code, Zap, Database } from 'lucide-react'

const labTabs = [
  { id: 'vision', label: 'Vision Lab', icon: Eye },
  { id: 'llm', label: 'LLM Lab', icon: Brain },
  { id: 'systems', label: 'Systems Lab', icon: Server },
]

const labContent = {
  vision: {
    title: 'Computer Vision Lab',
    description: 'Real-time object detection, segmentation, and tracking systems',
    projects: [

      {
        title: 'EquestrAIn',
        description: 'YOLO-based horse detection with real-time tracking and gait analysis',
        tech: 'PyTorch • YOLOv8 • OpenCV • Kalman Filter',
        status: 'In Development',
        demo: null
      },
      {
        title: 'Virtual Blackboard (Mini Project)',
        description: 'Hand gesture recognition for virtual writing using MediaPipe',
        tech: 'MediaPipe • OpenCV • Python',
        status: 'Demo Available',
        demo: 'https://github.com/rampellisaieshwar/virtual-blackboard'
      }
    ]
  },
  llm: {
    title: 'LLM & AI Agents Lab',
    description: 'Large Language Models and intelligent agent systems',
    projects: [
      {
        title: 'Story Generation System',
        description: 'AI-powered creative writing assistant with context awareness',
        tech: 'LLaMA 3.1 • LangChain • FastAPI',
        status: 'Beta',
        demo: null
      },
      {
        title: 'AI-powered Requirements Agent',
        description: 'Instance segmentation for dynamic object tracking',
        tech: 'TensorFlow • Mask R-CNN • CUDA',
        status: 'In Development',
        demo: null
      },
      {
        title: 'Universal Search Agent',
        description: 'LLaMA-based agent for extracting structured requirements from unstructured text',
        tech: 'LLaMA • Django • Transformers',
        status: 'Production Ready',
        demo: null
      },

    ]
  },
  systems: {
    title: 'Systems & Architecture Lab',
    description: 'Scalable backend systems and real-time data processing',
    projects: [
      {
        title: 'Vidlingo – Auto Subtitle Generation App (Major Project)',
        description: 'Instance segmentation for dynamic object tracking',
        tech: 'TensorFlow • Mask R-CNN • CUDA',
        status: 'Demo Available',
        demo: 'https://github.com/rampellisaieshwar/virtual-blackboard'
        }
    ]
  }
}

export function InteractiveLabs() {
  const [activeTab, setActiveTab] = useState('vision')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready':
        return 'text-green-400 bg-green-400/10'
        case 'Demo Available':
        return 'text-green-400 bg-green-400/10'
      case 'Beta':
        return 'text-yellow-400 bg-yellow-400/10'
      case 'In Development':
        return 'text-blue-400 bg-blue-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <section id="labs" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Interactive Labs</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore my technical projects across Computer Vision, LLMs, and Systems Architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Lab Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {labTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'gradient' : 'glass'}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </Button>
              )
            })}
          </div>

          {/* Lab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-strong border-white/20 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const Icon = labTabs.find(tab => tab.id === activeTab)?.icon || Eye
                      return <Icon className="w-6 h-6 text-cyan-400" />
                    })()}
                    <div>
                      <CardTitle className="text-2xl">{labContent[activeTab as keyof typeof labContent].title}</CardTitle>
                      <CardDescription className="text-white/70">
                        {labContent[activeTab as keyof typeof labContent].description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labContent[activeTab as keyof typeof labContent].projects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group"
                      >
                        <Card className="glass border-white/10 rounded-xl overflow-hidden hover:glass-strong transition-all duration-300 h-full">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg group-hover:text-cyan-400 transition-colors">
                                {project.title}
                              </CardTitle>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                            </div>
                            <CardDescription className="text-white/70 text-sm">
                              {project.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <div className="space-y-4">
                              {/* Tech Stack */}
                              <div>
                                <p className="text-xs text-white/60 mb-2">Tech Stack</p>
                                <div className="flex flex-wrap gap-1">
                                  {project.tech.split(' • ').map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/80"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Demo Button */}
                              <div className="pt-2">
                                {project.demo ? (
                                  <Button
                                    variant="glass"
                                    size="sm"
                                    className="w-full group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:text-black transition-all duration-300"
                                    onClick={() => window.open(project.demo, '_blank')}
                                  >
                                    <Play className="w-4 h-4 mr-2" />
                                    Run Demo
                                  </Button>
                                ) : (
                                  <Button
                                    variant="glass"
                                    size="sm"
                                    className="w-full opacity-50 cursor-not-allowed"
                                    disabled
                                  >
                                    <Code className="w-4 h-4 mr-2" />
                                    Coming Soon
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Lab Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card className="glass border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">6+ Projects</h3>
              <p className="text-white/60">Across Vision, LLM, and Systems</p>
            </Card>

            <Card className="glass border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-white/60">Real-world deployed solutions</p>
            </Card>

            <Card className="glass border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-white/60">Available on GitHub</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
