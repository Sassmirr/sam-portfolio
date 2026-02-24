'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function HeroSection() {
  const [profileImageError, setProfileImageError] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="relative w-40 h-40 md:w-48 md:h-48">

            {/* Purple Luxury Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-60"
              style={{
                background: `radial-gradient(circle,
                  hsla(var(--luxury-purple-1),0.35) 0%,
                  transparent 70%)`
              }}
            />

            {/* Premium Glass Ring */}
            <div
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: 'rgba(124,58,237,0.35)',
                boxShadow: `
                  0 0 60px rgba(124,58,237,0.25),
                  inset 0 0 40px rgba(255,255,255,0.05)
                `
              }}
            />

            {/* Image Container */}
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

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tighter">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg,
                  hsl(var(--foreground)) 0%,
                  hsl(var(--luxury-purple-2)) 120%)`
              }}
            >
              Samir Gajjar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
            Full Stack Generative AI Engineer
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building production-ready AI systems and intelligent full-stack applications.
          Specializing in generative AI, RAG pipelines, and real-world AI deployment.
        </p>

        {/* Founder Badge */}
        <div className="flex justify-center">
          <div
            className="px-5 py-2 rounded-full text-sm font-medium text-muted-foreground"
            style={{
              border: '1px solid rgba(124,58,237,0.35)',
              background: 'rgba(124,58,237,0.08)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Final Year IT Engineer • Generative AI Intern • Open to AI Roles & Freelance
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">

          {/* Primary */}
          <button onClick={() => scrollToSection('chat')} className="neon-btn group flex items-center gap-2">
            Talk to My AI
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Glass */}
          <button onClick={() => scrollToSection('projects')} className="glass-card px-8 py-3 font-semibold rounded-xl transition-all hover:scale-[1.03]">
            View Projects
          </button>

          <button onClick={() => scrollToSection('contact')} className="glass-card px-8 py-3 font-semibold rounded-xl transition-all hover:scale-[1.03]">
            Hire Me
          </button>
        </div>

        {/* Tech Stack */}
        <div className="pt-10 space-y-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            Technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['Gemini', 'LangChain', 'Qdrant', 'MERN', 'Python', 'React'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground border border-border hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:border-purple-500/40 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-14 flex justify-center">
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