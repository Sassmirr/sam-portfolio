'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Instagram } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* 🔥 HEADER */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Let’s Build Something Serious
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open to AI engineering roles, freelance AI systems, and ambitious collaborations.
            <br />
            If you're building something meaningful — I'm in.
          </p>

          <div className="w-20 h-[2px] mx-auto rounded-full bg-gradient-to-r from-transparent via-[hsl(var(--luxury-purple-2))] to-transparent" />
        </div>

        {/* 🔥 CONTACT CARDS */}
        <div className="grid md:grid-cols-4 gap-6">

          {/* EMAIL */}
          <a
            href="mailto:sgajjar3216@gmail.com"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-[hsl(var(--luxury-purple-2))]/60 transition-all text-center"
          >
            <Mail
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-[hsl(var(--luxury-purple-2))] transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-xs text-muted-foreground">
              sgajjar3216@gmail.com
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/samir-gajjar-bb8625290"
            target="_blank"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-[#0A66C2]/70 transition-all text-center"
          >
            <Linkedin
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-[#0A66C2] transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1 group-hover:text-[#0A66C2] transition-colors">
              LinkedIn
            </h3>
            <p className="text-xs text-muted-foreground">
              Professional network
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Sassmirr"
            target="_blank"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-white/40 transition-all text-center"
          >
            <Github
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-white transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">
              GitHub
            </h3>
            <p className="text-xs text-muted-foreground">
              Code & projects
            </p>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/sassmirr"
            target="_blank"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-pink-500/60 transition-all text-center"
          >
            <Instagram
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-pink-500 transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1 group-hover:text-pink-500 transition-colors">
              Instagram
            </h3>
            <p className="text-xs text-muted-foreground">
              Lifestyle & personality
            </p>
          </a>

        </div>
        {/* 🔥 FORM */}
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-3xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[hsl(var(--luxury-purple-2))]/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[hsl(var(--luxury-purple-2))]/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[hsl(var(--luxury-purple-2))]/50"
                placeholder="Project / hiring / collaboration"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[hsl(var(--luxury-purple-2))]/50 resize-none"
                placeholder="Tell me what you're building or looking for..."
              />
            </div>

            <div className="text-center pt-4">
              <button type="submit" disabled={loading} className="neon-btn px-8 py-3">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* success */}
          {success && (
            <div className="mt-6 text-center p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-green-400 font-medium">
                Message received. Samir will respond within 24 hours.
              </p>
            </div>
          )}

          {/* error */}
          {error && (
            <div className="mt-6 text-center p-4 rounded-xl bg-red-500/10 border border-red-500/30">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* 🔥 Footer vibe */}
        <div className="text-center pt-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Samir Gajjar — Built with obsession.
          </p>
        </div>

      </div>
    </section>
  )
}