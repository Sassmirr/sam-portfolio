'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  // 🔥 scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['about', 'projects', 'chat', 'experience', 'gallery', 'contact']

      for (let id of sections) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'chat', label: 'AI Assistant' },
    { id: 'experience', label: 'Experience' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">

      {/* FLOATING GLASS NAV */}
      <div
        className={`
        mt-4 w-full max-w-7xl rounded-2xl transition-all duration-500
        ${isScrolled
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(124,58,237,0.15)]'
            : 'bg-transparent'}
        `}
      >

        <nav className="px-6 py-4 flex items-center justify-between">

          {/* 🔥 LOGO */}
          <div
            onClick={() => scrollToSection('about')}
            className="cursor-pointer relative group"
          >
            <span className="
              text-xl font-bold tracking-tight
              bg-gradient-to-r 
              from-[hsl(var(--luxury-purple-1))]
              via-[hsl(var(--luxury-purple-2))]
              to-[hsl(var(--luxury-purple-3))]
              bg-clip-text text-transparent
              animate-gradient-x
            ">
              Samir
            </span>

            {/* glow */}
            <span className="
              absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition
              bg-gradient-to-r 
              from-[hsl(var(--luxury-purple-1))]
              to-[hsl(var(--luxury-purple-3))]
            "/>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                relative text-sm font-medium transition-all duration-300
                ${activeSection === item.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'}
                `}
              >
                {item.label}

                {/* active indicator */}
                <span
                  className={`
                  absolute -bottom-2 left-0 right-0 h-[2px] rounded-full
                  transition-all duration-300
                  ${activeSection === item.id
                      ? 'opacity-100 bg-gradient-to-r from-[hsl(var(--luxury-purple-1))] to-[hsl(var(--luxury-purple-3))]'
                      : 'opacity-0'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* 🔥 HIRE BUTTON */}
            <button
              onClick={() => scrollToSection('contact')}
              className="
              hidden md:inline-flex
              neon-btn
              px-6 py-2 text-sm
              shadow-[0_0_20px_rgba(124,58,237,0.25)]
              "
            >
              Hire Me
            </button>

            {/* MOBILE MENU BTN */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* 🔥 MOBILE MENU */}
        {mobileOpen && (
          <div className="
          md:hidden px-6 pb-6 pt-4
          border-t border-white/10
          bg-black/70 backdrop-blur-xl
          rounded-b-2xl
          space-y-4
          animate-fade-in
          ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="neon-btn w-full mt-3"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </header>
  )
}