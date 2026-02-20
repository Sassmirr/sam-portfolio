'use client'

import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-accent transition-colors">
          SG
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('chat')}
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            AI Assistant
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
          >
            Contact
          </button>
        </div>

        <button className="hidden md:inline-flex px-6 py-2 rounded-sm bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity">
          Hire Me
        </button>
      </nav>
    </header>
  )
}
