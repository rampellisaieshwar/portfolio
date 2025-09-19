# AI/ML Engineer Portfolio

A modern, interactive portfolio website built with Next.js, featuring an AI-powered chatbot, interactive labs, and iOS 26 glassmorphism design.

## Features

- **Landing Page**: Sleek hero section with iOS 26 glassmorphism design
- **AI Twin Chatbot**: Interactive chatbot that answers questions about projects and experience
- **Interactive Labs**: Three lab sections (Vision, LLM, Systems) with project showcases
- **Growth Timeline**: Animated timeline showing career progression
- **Blog/Notes**: Personal blog with categorized posts and featured articles

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom iOS 26 glassmorphism styles
- **UI Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and glassmorphism
│   ├── layout.tsx           # Root layout with navbar and footer
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── sections/            # Page sections
│   ├── Navbar.tsx           # Navigation component
│   └── Footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── me9.png              # Profile image
```

## Customization

### Adding New Blog Posts
Edit the `blogPosts` array in `components/sections/BlogNotes.tsx`

### Updating AI Twin Knowledge
Modify the `aiKnowledge` object in `components/sections/AITwin.tsx`

### Adding New Lab Projects
Update the `labContent` object in `components/sections/InteractiveLabs.tsx`

### Timeline Milestones
Edit the `timelineData` array in `components/sections/GrowthTimeline.tsx`

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform.

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this template for your own portfolio!
