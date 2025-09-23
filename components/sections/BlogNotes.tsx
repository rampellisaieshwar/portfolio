// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { 
//   BookOpen, 
//   Brain, 
//   Calendar, 
//   Tag, 
//   ArrowRight,
//   ExternalLink,
//   Clock,
//   Zap
// } from 'lucide-react'

// const blogCategories = [
//   { id: 'all', label: 'All Posts', icon: BookOpen },
//   { id: 'laws', label: '48 Laws', icon: BookOpen },
//   { id: 'ml', label: 'ML Theories', icon: Brain },
//   { id: 'equestrian', label: 'Equestrian AI', icon: Zap },
// ]

// const blogPosts = [
//   {
//     id: 1,
//     title: 'The 48 Laws of Power - Enriched Notes',
//     excerpt: 'My comprehensive analysis and personal insights on Robert Greene\'s masterpiece, with real-world applications in tech and AI.',
//     content: 'A deep dive into power dynamics, strategy, and human psychology. I\'ve applied these principles to understand team dynamics, project management, and leadership in tech environments...',
//     category: 'laws',
//     date: '2024-12-15',
//     readTime: '12 min read',
//     tags: ['Psychology', 'Strategy', 'Leadership', 'Power Dynamics'],
//     featured: true,
//     status: 'Published'
//   },
//   {
//     id: 2,
//     title: 'Understanding Attention Mechanisms in Transformers',
//     excerpt: 'Breaking down the mathematical intuition behind self-attention and how it enables modern LLMs to understand context.',
//     content: 'The attention mechanism is the heart of modern transformer architectures. Let me walk you through the mathematical intuition and practical implications...',
//     category: 'ml',
//     date: '2024-12-10',
//     readTime: '8 min read',
//     tags: ['Transformers', 'Attention', 'Mathematics', 'LLMs'],
//     featured: true,
//     status: 'Published'
//   },
//   {
//     id: 3,
//     title: 'Equestrian AI: Challenges in Real-time Horse Detection',
//     excerpt: 'Technical deep-dive into building production-grade computer vision systems for equestrian sports.',
//     content: 'Building AI systems for equestrian sports presents unique challenges. From varying lighting conditions to rapid motion, here\'s how we solved them...',
//     category: 'equestrian',
//     date: '2024-12-05',
//     readTime: '15 min read',
//     tags: ['Computer Vision', 'YOLO', 'Real-time', 'Equestrian'],
//     featured: false,
//     status: 'Published'
//   },
//   {
//     id: 4,
//     title: 'The Intuition Behind Gradient Descent',
//     excerpt: 'Why gradient descent works and how to visualize optimization landscapes in high dimensions.',
//     content: 'Gradient descent is often taught as a black box, but understanding the intuition behind it is crucial for debugging and improving models...',
//     category: 'ml',
//     date: '2024-11-28',
//     readTime: '6 min read',
//     tags: ['Optimization', 'Mathematics', 'Deep Learning', 'Intuition'],
//     featured: false,
//     status: 'Published'
//   },
//   {
//     id: 5,
//     title: 'Law 1: Never Outshine the Master - Tech Applications',
//     excerpt: 'How the first law of power applies to working with senior developers and tech leads.',
//     content: 'In tech environments, this law isn\'t about being subservient, but about understanding power dynamics and building trust...',
//     category: 'laws',
//     date: '2024-11-20',
//     readTime: '5 min read',
//     tags: ['Power Laws', 'Tech Culture', 'Career', 'Psychology'],
//     featured: false,
//     status: 'Published'
//   },
//   {
//     id: 6,
//     title: 'Building LLaMA Agents: Lessons Learned',
//     excerpt: 'Practical insights from building production LLaMA-based agents for enterprise applications.',
//     content: 'After months of building and deploying LLaMA agents, here are the key lessons I\'ve learned about prompt engineering, fine-tuning, and deployment...',
//     category: 'ml',
//     date: '2024-11-15',
//     readTime: '10 min read',
//     tags: ['LLaMA', 'Agents', 'Production', 'Lessons Learned'],
//     featured: false,
//     status: 'Draft'
//   }
// ]

// export function BlogNotes() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

//   const filteredPosts = activeCategory === 'all' 
//     ? blogPosts 
//     : blogPosts.filter(post => post.category === activeCategory)

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'Published':
//         return 'text-green-400 bg-green-400/10'
//       case 'Draft':
//         return 'text-yellow-400 bg-yellow-400/10'
//       default:
//         return 'text-gray-400 bg-gray-400/10'
//     }
//   }

//   return (
//     <section id="blog" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="gradient-text">Blog & Notes</span>
//           </h2>
//           <p className="text-xl text-white/70 max-w-2xl mx-auto">
//             My thoughts on AI/ML, power dynamics, and lessons learned from building production systems
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {blogCategories.map((category) => {
//               const Icon = category.icon
//               return (
//                 <Button
//                   key={category.id}
//                   variant={activeCategory === category.id ? 'gradient' : 'glass'}
//                   onClick={() => setActiveCategory(category.id)}
//                   className="px-6 py-3 rounded-xl transition-all duration-300"
//                 >
//                   <Icon className="w-4 h-4 mr-2" />
//                   {category.label}
//                 </Button>
//               )
//             })}
//           </div>

//           {/* Blog Posts Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <AnimatePresence>
//               {filteredPosts.map((post, index) => (
//                 <motion.div
//                   key={post.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <Card className="glass border-white/10 rounded-2xl overflow-hidden hover:glass-strong transition-all duration-300 h-full">
//                     <CardHeader className="pb-3">
//                       <div className="flex items-start justify-between mb-2">
//                         <div className="flex items-center space-x-2">
//                           {(() => {
//                             const category = blogCategories.find(cat => cat.id === post.category)
//                             const Icon = category?.icon || BookOpen
//                             return <Icon className="w-4 h-4 text-cyan-400" />
//                           })()}
//                           <span className="text-sm text-white/60 capitalize">{post.category}</span>
//                         </div>
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
//                           {post.status}
//                         </span>
//                       </div>
                      
//                       <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300 line-clamp-2">
//                         {post.title}
//                       </CardTitle>
                      
//                       <CardDescription className="text-white/70 text-sm line-clamp-3">
//                         {post.excerpt}
//                       </CardDescription>
//                     </CardHeader>

//                     <CardContent className="pt-0">
//                       <div className="space-y-4">
//                         {/* Meta Info */}
//                         <div className="flex items-center justify-between text-xs text-white/60">
//                           <div className="flex items-center space-x-1">
//                             <Calendar className="w-3 h-3" />
//                             <span>{new Date(post.date).toLocaleDateString()}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <Clock className="w-3 h-3" />
//                             <span>{post.readTime}</span>
//                           </div>
//                         </div>

//                         {/* Tags */}
//                         <div className="flex flex-wrap gap-1">
//                           {post.tags.slice(0, 3).map((tag) => (
//                             <span
//                               key={tag}
//                               className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/70"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                           {post.tags.length > 3 && (
//                             <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/70">
//                               +{post.tags.length - 3}
//                             </span>
//                           )}
//                         </div>

//                         {/* Read More Button */}
//                         <Button
//                           variant="glass"
//                           size="sm"
//                           className="w-full group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:text-black transition-all duration-300"
//                           onClick={() => setSelectedPost(post)}
//                         >
//                           Read More
//                           <ArrowRight className="w-4 h-4 ml-2" />
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Featured Post Highlight */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-16"
//           >
//             <Card className="glass-strong border-white/20 rounded-2xl overflow-hidden">
//               <div className="p-8">
//                 <div className="flex items-center space-x-2 mb-4">
//                   <Tag className="w-5 h-5 text-cyan-400" />
//                   <span className="text-sm font-medium text-cyan-400">Featured Article</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 gradient-text">
//                   The 48 Laws of Power - Enriched Notes
//                 </h3>
//                 <p className="text-white/70 mb-6 text-lg">
//                   My comprehensive analysis and personal insights on Robert Greene's masterpiece, 
//                   with real-world applications in tech and AI environments.
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-4 text-sm text-white/60">
//                     <div className="flex items-center space-x-1">
//                       <Calendar className="w-4 h-4" />
//                       <span>Dec 15, 2024</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Clock className="w-4 h-4" />
//                       <span>12 min read</span>
//                     </div>
//                   </div>
//                   <Button
//                     variant="gradient"
//                     className="px-6 py-2"
//                     onClick={() => setSelectedPost(blogPosts[0])}
//                   >
//                     Read Full Article
//                     <ExternalLink className="w-4 h-4 ml-2" />
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         </motion.div>

//         {/* Post Modal */}
//         <AnimatePresence>
//           {selectedPost && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//               onClick={() => setSelectedPost(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Card className="glass-strong border-white/20 rounded-2xl">
//                   <CardHeader>
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <CardTitle className="text-2xl mb-2">{selectedPost.title}</CardTitle>
//                         <div className="flex items-center space-x-4 text-sm text-white/60">
//                           <div className="flex items-center space-x-1">
//                             <Calendar className="w-4 h-4" />
//                             <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <Clock className="w-4 h-4" />
//                             <span>{selectedPost.readTime}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => setSelectedPost(null)}
//                       >
//                         ×
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="prose prose-invert max-w-none">
//                       <p className="text-white/80 leading-relaxed">
//                         {selectedPost.content}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }
