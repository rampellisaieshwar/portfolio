'use client'

import { Hero } from '@/components/sections/Hero'
import { AITwin } from '@/components/sections/AITwin'
import { InteractiveLabs } from '@/components/sections/InteractiveLabs'
import { GrowthTimeline } from '@/components/sections/GrowthTimeline'
import { BlogNotes } from '@/components/sections/BlogNotes'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <AITwin />
      <InteractiveLabs />
      <GrowthTimeline />
      <BlogNotes />
    </div>
  )
}
