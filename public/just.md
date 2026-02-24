this file is just there to just keep the folders from collapsing !!
remove it you want.
const prompt=previously :
const prompt = `
You are the AI assistant of Samir Gajjar on his personal portfolio website.

You are speaking directly to a visitor or recruiter browsing his site.

PERSONALITY:
- Smart
- Confident
- Natural
- Conversational
- Helpful
- Slightly persuasive like a personal AI agent

IMPORTANT RULES:
- Speak naturally like a human assistant
- DO NOT speak in third person like "Samir possesses"
- Speak like you represent him directly
- Avoid robotic or academic tone
- Avoid markdown formatting or bullet overload
- Keep answers clear and engaging
- If recruiter asks hiring questions, answer persuasively
- If asked about skills/projects, explain like a real developer
- Keep responses concise but impressive

ABOUT SAMIR:
Use the portfolio context below to answer.

PORTFOLIO CONTEXT:
${context}

VISITOR QUESTION:
${question}

Now respond naturally as Samir's AI assistant:
`;

old hero.tsx:
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
          <button className="neon-btn group px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            Talk to My AI
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="neon-btn px-8 py-3 bg-secondary text-foreground font-semibold rounded-sm hover:bg-muted transition-colors">
            View Projects
          </button>
          <button className="neon-btn px-8 py-3 border border-border text-foreground font-semibold rounded-sm hover:bg-secondary transition-colors">
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

old about.tsx:
export function AboutSection() {
  const skills = [
    {
      category: 'Generative AI & ML',
      items: [
        { name: 'LLMs', level: 'Advanced' },
        { name: 'RAG Systems', level: 'Advanced' },
        { name: 'Prompt Engineering', level: 'Advanced' },
        { name: 'Semantic Search', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Express', level: 'Advanced' },
        { name: 'FastAPI', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Advanced' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
      ],
    },
    {
      category: 'AI Tools',
      items: [
        { name: 'Gemini API', level: 'Advanced' },
        { name: 'LangChain', level: 'Advanced' },
        { name: 'Qdrant', level: 'Advanced' },
        { name: 'Firebase', level: 'Intermediate' },
      ],
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">About</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Final-year B.Tech Information Technology student (graduating 2026) with hands-on experience building AI-driven full-stack systems.
            I specialize in generative AI applications that solve real-world problems rather than experimental demos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I've developed agentic RAG chatbots, voice-based AI systems, and intelligent web applications using modern AI stacks including Gemini, LangChain, Qdrant, and MERN.
            My focus is on building production-ready AI solutions with strong fundamentals in full-stack development.
          </p>

          {/* Credibility Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            <div className="p-4 rounded-lg bg-secondary border border-border/50">
              <p className="text-sm font-semibold text-accent mb-1">Built Multiple AI Applications</p>
              <p className="text-sm text-muted-foreground">Production-ready systems from concept to deployment</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary border border-border/50">
              <p className="text-sm font-semibold text-accent mb-1">Agentic RAG Systems</p>
              <p className="text-sm text-muted-foreground">Multi-step reasoning with semantic retrieval</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary border border-border/50">
              <p className="text-sm font-semibold text-accent mb-1">Full Stack + AI Integration</p>
              <p className="text-sm text-muted-foreground">Frontend, backend, and AI infrastructure</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary border border-border/50">
              <p className="text-sm font-semibold text-accent mb-1">Real-World Deployment</p>
              <p className="text-sm text-muted-foreground">Focus on production stability and scalability</p>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-lg bg-secondary border border-border hover:border-accent/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

old projects.tsx:
'use client'
import { ExternalLink, Github } from 'lucide-react'

export function ProjectsSection() {

  // 🔥 scroll to chat safely
  const scrollToChat = (e: React.MouseEvent) => {
    e.preventDefault()
    const chatSection = document.getElementById('chat')
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const projects = [
    // 1️⃣ Voice Agent
    {
      title: 'Voice Salon Booking AI Agent',
      description:
        'Voice-based conversational booking system with real-time responses and intelligent scheduling logic. Handles inquiries, bookings, rescheduling, and service recommendations naturally.',
      impact: 'Automates salon bookings with natural AI-driven voice interaction',
      tags: ['Voice AI', 'Generative AI', 'MERN', 'Real-time', 'Scheduling'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    // 2️⃣ Portfolio
    {
      title: 'Personal AI Portfolio Website',
      description:
        'A premium AI-powered portfolio featuring an agentic RAG assistant, real-time streaming responses, backend contact system, and intelligent recruiter-aware behavior.',
      impact: 'Transforms a traditional portfolio into an AI experience',
      tags: ['Next.js', 'Node.js', 'Gemini', 'Qdrant', 'RAG', 'AI Agent'],
      links: {
        demo: '#',
        github: '#',
      },
    },

    // 3️⃣ RAG chatbot (scroll demo)
    {
      title: 'Agentic RAG Chatbot',
      description:
        'Production-ready AI assistant with document ingestion and semantic retrieval. Supports context-aware responses and multi-session intelligence.',
      impact: 'Enables AI-powered document reasoning and intelligent search',
      tags: ['React', 'Node.js', 'LangChain', 'Qdrant', 'Gemini'],
      links: {
        demo: '#chat',
        github: 'https://github.com/Sassmirr/d-RAG.git',
        isChatDemo: true,
      },
    },

    // 4️⃣ Fitness
    {
      title: 'AI Fitness Trainer',
      description:
        'AI-powered fitness coaching system using computer vision for posture analysis and adaptive workout recommendations.',
      impact: 'Provides intelligent, personalized fitness guidance',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'React'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    // 5️⃣ Steganography
    {
      title: 'Steganography System',
      description:
        'Secure data hiding system with encryption support, enabling confidential information embedding within images.',
      impact: 'Enhances secure communication through image-based encryption',
      tags: ['Python', 'Cryptography', 'Image Processing'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    // 6️⃣ ANPR
    {
      title: 'ANPR + Face Recognition System',
      description:
        'Automated number plate recognition integrated with facial identification for intelligent security monitoring.',
      impact: 'Real-time surveillance and identity verification system',
      tags: ['Computer Vision', 'YOLO', 'Python', 'OpenCV'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    // 7️⃣ Bus booking
    {
      title: 'Bus Booking Webflow + Backend',
      description:
        'Full-stack bus booking platform with Webflow frontend and custom Node.js backend handling reservations and scheduling logic.',
      impact: 'Complete booking infrastructure with scalable backend architecture',
      tags: ['Node.js', 'MongoDB', 'Webflow', 'REST APIs'],
      links: {
        demo: 'https://bus-it-up.my.canva.site',
        github: 'https://github.com/Sassmirr/bus-booking-backend.git',
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Projects</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card group p-8 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 space-y-4 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {project.impact && (
                <p className="text-sm text-accent font-medium">
                  ✨ {project.impact}
                </p>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-border mt-auto">

                {/* Live demo */}
                {project.links.isChatDemo ? (
                  <a
                    href="#chat"
                    onClick={scrollToChat}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}

                {/* GitHub */}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  GitHub
                  <Github size={16} />
                </a>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

old ai-chat.tsx:
'use client'

import { useState } from 'react'
import { ChatInterface } from '../chat-interface'
import { ChevronUp, ChevronDown } from 'lucide-react'

export function AIChatSection() {
  return (
    <section id="chat" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">Ask My AI Assistant About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This AI assistant is trained on my resume, projects, and technical experience. Ask me anything about my work in generative AI, full-stack development, or career goals.
          </p>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
        </div>

        {/* Chat container - always visible */}
        <div className="h-96 md:h-[600px] rounded-lg overflow-hidden border border-border glow-accent">
          <ChatInterface />
        </div>
      </div>
    </section>
  )
}

old chat-interface.tsx:
'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: string
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const container = messagesContainerRef.current
    if (!container) return
    container.scrollTop = container.scrollHeight
  }

  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: "Hi! I'm Samir's AI assistant. Ask me anything about his projects, skills, or experience.",
        sender: 'ai',
        timestamp: formatTime(new Date()),
      },
    ])
  }, [])

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom()
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userText = input

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: formatTime(new Date()),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userText }),
      })

      if (!res.body) throw new Error("No stream")

      const reader = res.body.getReader()
      const decoder = new TextDecoder("utf-8")

      let fullText = ""

      const aiMessageId = (Date.now() + 1).toString()

      const aiMessage: Message = {
        id: aiMessageId,
        text: "",
        sender: "ai",
        timestamp: formatTime(new Date()),
      }

      setMessages(prev => [...prev, aiMessage])

      // 🔥 Smooth streaming buffer
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        fullText += chunk

        // typing effect speed control
        for (let i = 0; i < chunk.length; i++) {
          await new Promise(r => setTimeout(r, 8)) // speed here (lower=faster)

          setMessages(prev => {
            const updated = [...prev]
            const index = updated.findIndex(m => m.id === aiMessageId)
            if (index !== -1) {
              updated[index].text = fullText.slice(0, updated[index].text.length + 1)
            }
            return updated
          })
        }
      }

    } catch (err) {
      console.error(err)

      const errorMsg: Message = {
        id: Date.now().toString(),
        text: "⚠️ AI connection error.",
        sender: "ai",
        timestamp: formatTime(new Date()),
      }

      setMessages(prev => [...prev, errorMsg])
    }

    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-full bg-background rounded-lg border border-border overflow-hidden">

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${message.sender === 'user'
              ? 'bg-accent text-accent-foreground'
              : 'bg-secondary text-foreground border border-border'
              }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.text}
              </p>

              <span className="text-xs mt-1 block opacity-70">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary border border-border px-4 py-3 rounded-lg">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t border-border p-4 bg-secondary">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="neon-btn p-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}

old experience.tsx:
export function ExperienceSection() {
  const experiences = [
    {
      title: 'Generative AI Intern',
      company: 'Current',
      duration: '2025 - 2026',
      description:
        'Working on AI-driven applications and real-world generative AI systems. Building production-ready solutions with focus on agentic systems and RAG pipelines.',
      highlights: ['Generative AI', 'LLM Integration', 'RAG Systems', 'Production Deployment'],
    },
    {
      title: 'MERN Stack & AI Intern',
      company: 'Softcolon Technologies',
      duration: 'July 2025',
      description:
        'Built agentic RAG chatbot using React, Node.js, LangChain, Qdrant, and Gemini API. Implemented document ingestion pipelines and semantic search capabilities.',
      highlights: ['React', 'Node.js', 'LangChain', 'Qdrant', 'RAG Systems'],
    },
    {
      title: 'B.Tech Information Technology',
      company: 'Final Year (Graduating 2026)',
      duration: '2022 - 2026',
      description:
        'Building a strong foundation in computer science with specialization in generative AI and full-stack development. Hands-on experience with multiple AI projects and modern web technologies.',
      highlights: ['Computer Science', 'AI/ML', 'Full Stack', 'Project Development'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.company} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-16 bg-border" aria-hidden="true" />
              )}

              {/* Timeline item */}
              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-background rounded-lg border border-border p-6 hover:border-accent/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                        <p className="text-accent font-semibold">{experience.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap md:text-right">
                        {experience.duration}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-accent border border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

old gallery.tsx:
'use client'

import { useState } from 'react'
import Image from 'next/image'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // 🔥 Replace these filenames with your real images inside /public/images
  const photos = [
    {
      src: '/images/IMG_5344.jpg',
      alt: 'Professional portrait',
      title: 'Professional Shoot',
    },
    {
      src: '/images/aesthetic.jpeg',
      alt: 'Office look',
      title: 'Travel',
    },
    {
      src: '/images/headshot.jpeg',
      alt: 'Confident tech look',
      title: 'Headshot',
    },
    {
      src: '/images/gym.jpeg',
      alt: 'Clean headshot',
      title: 'Fitness',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Beyond Engineering
          </h2>

          <p className="text-lg text-muted-foreground">
            A glimpse beyond the code
          </p>

          <div className="h-[2px] w-16 bg-white/20 mx-auto rounded-full" />
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative h-80 md:h-[420px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

              {/* Title bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm tracking-wide opacity-80">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal viewer */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full h-[70vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                fill
                className="object-contain"
              />

              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
              >
                ✕
              </button>

              {/* Navigation */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6">
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0 ? photos.length - 1 : selectedImage - 1
                    )
                  }
                  className="bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-lg"
                >
                  Prev
                </button>

                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === photos.length - 1 ? 0 : selectedImage + 1
                    )
                  }
                  className="bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

old contact.tsx:
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

          {/* Email */}
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

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/samir-gajjar-bb8625290"
            target="_blank"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-[hsl(var(--luxury-purple-2))]/60 transition-all text-center"
          >
            <Linkedin
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-[hsl(var(--luxury-purple-2))] transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <p className="text-xs text-muted-foreground">
              Professional network
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sassmirr"
            target="_blank"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-[hsl(var(--luxury-purple-2))]/60 transition-all text-center"
          >
            <Github
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-[hsl(var(--luxury-purple-2))] transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-xs text-muted-foreground">
              Code & projects
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sassmirr"
            target="_blank"
            className="glass-card group p-6 rounded-2xl border border-white/10 hover:border-[hsl(var(--luxury-purple-2))]/60 transition-all text-center"
          >
            <Instagram
              size={28}
              className="mx-auto mb-4 text-muted-foreground group-hover:text-[hsl(var(--luxury-purple-2))] transition-colors duration-300"
            />
            <h3 className="font-semibold mb-1">Instagram</h3>
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

old footer.tsx:
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Samir Gajjar</h3>
            <p className="text-muted-foreground text-sm">Full Stack Generative AI Engineer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/samir-gajjar-bb8625290"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Sassmirr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sgajjar3216@gmail.com"
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 Samir Gajjar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

old header.tsx:
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

        <div className="flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('chat')} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            AI Assistant
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        <button onClick={() => scrollToSection('contact')} className="neon-btn">
          Hire Me
        </button>
      </nav>
    </header>
  )
}

another header.tsx:
'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['about', 'projects', 'chat', 'experience', 'gallery', 'contact']

      for (let id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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

      <div
        className={`
          mt-4 w-full max-w-7xl rounded-2xl transition-all duration-300
          ${isScrolled
            ? 'bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg'
            : 'bg-transparent'
          }
        `}
      >
        <nav className="px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => scrollToSection('about')}
            className="text-xl font-bold tracking-tight cursor-pointer bg-gradient-to-r from-[hsl(var(--luxury-purple-1))] to-[hsl(var(--luxury-purple-3))] bg-clip-text text-transparent"
          >
            SG
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative text-sm font-medium transition-colors
                  ${activeSection === item.id
                    ? 'text-white'
                    : 'text-foreground/70 hover:text-white'}
                `}
              >
                {item.label}

                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[hsl(var(--luxury-purple-1))] to-[hsl(var(--luxury-purple-3))] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* Hire Button (desktop only) */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex neon-btn px-5 py-2 text-sm"
            >
              Hire Me
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4 border-t border-white/10 bg-background/95 backdrop-blur-xl rounded-b-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="neon-btn w-full mt-4"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

