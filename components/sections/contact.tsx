'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

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
    setFormData((prev) => ({
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
        headers: {
          'Content-Type': 'application/json',
        },
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
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to AI engineering roles, internships, freelance AI projects, and collaborations. Let's build something meaningful together.
          </p>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:sgajjar3216@gmail.com"
            className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">Email</h3>
            <p className="text-sm text-muted-foreground">sgajjar3216@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/samir-gajjar-bb8625290"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://github.com/Sassmirr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github size={24} />
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">GitHub</h3>
            <p className="text-sm text-muted-foreground">Check my repositories</p>
          </a>
        </div>

        {/* FORM */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent/50"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent/50 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* success */}
          {success && (
            <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-center">
              <p className="text-green-400 font-medium">
                Message received. Samir will respond within 24 hours.
              </p>
            </div>
          )}

          {/* error */}
          {error && (
            <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-center">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
