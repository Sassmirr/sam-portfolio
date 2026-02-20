'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function HeroSection() {
  const [profileImageError, setProfileImageError] = useState(false)
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
        {/* Profile image - circular premium styling */}
        <div className="flex justify-center mb-4">
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            {/* Outer glow layer */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent opacity-60 blur-xl" />

            {/* Premium border with subtle gradient effect */}
            <div className="absolute inset-0 rounded-full border border-accent/30 shadow-lg" style={{
              boxShadow: '0 0 40px rgba(218, 165, 32, 0.15), inset 0 0 30px rgba(255, 255, 255, 0.05)'
            }} />

            {/* Image container */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-secondary">
              {!profileImageError ? (
                <img
                  src="../images/IMG_5288.jpg"
                  alt="Samir Gajjar"
                  className="w-full h-full object-cover"
                  onError={() => setProfileImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold text-balance leading-tight tracking-tighter">
            Samir Gajjar
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
            Full Stack Generative AI Engineer
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building production-ready AI systems and intelligent full-stack applications. Specializing in generative AI, RAG pipelines, and real-world AI deployment.
        </p>

        {/* Availability Badge */}
        <div className="flex justify-center">
          <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm font-medium text-muted-foreground">
            Final Year IT Engineer • Generative AI Intern • Open to AI Roles & Freelance
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="group px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            Talk to My AI
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 bg-secondary text-foreground font-semibold rounded-sm hover:bg-muted transition-colors">
            View Projects
          </button>
          <button className="px-8 py-3 border border-border text-foreground font-semibold rounded-sm hover:bg-secondary transition-colors">
            Hire Me
          </button>
        </div>

        {/* Tech Strip */}
        <div className="pt-8 space-y-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Gemini', 'LangChain', 'Qdrant', 'MERN', 'Python', 'React'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground hover:border-accent/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
