'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const aiKnowledge = {
  projects: [
    "Equestrian AI — Real-time horse detection, segmentation, gait analysis and Kalman-filtered tracking",
    "Vidlingo — Auto subtitle generator with translation support using Google Speech-to-Text APIs",
    "Virtual Blackboard — Hand-gesture driven virtual writing surface using MediaPipe + OpenCV",
    "Universal Search & Requirements Agent — LLaMA-based agent to extract structured user stories"
  ],
  experience: [
    "0101Digitall — AI/ML Developer Intern (Dec 2024 - Mar 2025)",
    "Focus: Object detection, model optimization, LLaMA agents",
    "Worked on equestrian AI, real-time horse detection, segmentation, and tracking"
  ],
  skills: [
    "Python, PyTorch, TensorFlow, YOLO/SSD, OpenCV",
    "Django, LLaMA, NumPy/pandas, Computer Vision",
    "Real-time systems, Model optimization, Edge inference"
  ],
  education: [
    "IIT Ropar — Minor in AI (Present)",
    "Kamala Institute of Technology & Science — B.Tech CSE (2024)",
    "CGPA: 7.31"
  ]
}

const generateResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    return `Here are my key projects:\n\n${aiKnowledge.projects.map(p => `• ${p}`).join('\n')}\n\nEach project focuses on solving real-world problems with AI/ML solutions.`
  }
  
  if (lowerMessage.includes('experience') || lowerMessage.includes('internship')) {
    return `My professional experience:\n\n${aiKnowledge.experience.map(e => `• ${e}`).join('\n')}\n\nI specialize in converting research into production-ready AI systems.`
  }
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    return `My technical skills:\n\n${aiKnowledge.skills.map(s => `• ${s}`).join('\n')}\n\nI focus on building scalable, efficient AI solutions.`
  }
  
  if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
    return `My educational background:\n\n${aiKnowledge.education.map(e => `• ${e}`).join('\n')}\n\nCurrently pursuing AI specialization at IIT Ropar.`
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return `Hello! I'm Sai Eshwar's AI twin. I can tell you about his projects, experience, skills, and more. What would you like to know?`
  }
  
  return `I'm Sai Eshwar's AI twin! I can help you learn about his AI/ML projects, professional experience, technical skills, and educational background. Try asking about his work at 0101Digitall, his equestrian AI project, or his LLaMA-based agents!`
}

export function AITwin() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Sai Eshwar's AI twin. I can tell you about his projects, experience, and technical expertise. What would you like to know?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(inputValue)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section id="ai-twin" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet My AI Twin</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Chat with my AI persona to learn about my projects, experience, and technical expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-strong border-white/20 rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sai Eshwar's AI Twin</h3>
                  <p className="text-sm text-white/60">Ask me anything about his work!</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/60">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-r from-cyan-400 to-violet-400' 
                          : 'bg-white/10'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-black" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-400 to-violet-400 text-black'
                          : 'glass border border-white/20'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-60 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="glass border border-white/20 rounded-2xl px-4 py-3">
                      <div className="flex items-center space-x-1">
                        <div className="typing-dot w-2 h-2 bg-white/60 rounded-full" />
                        <div className="typing-dot w-2 h-2 bg-white/60 rounded-full" />
                        <div className="typing-dot w-2 h-2 bg-white/60 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex space-x-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my projects, experience, or skills..."
                  className="flex-1 glass border-white/20 rounded-xl"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  variant="gradient"
                  size="icon"
                  className="rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
