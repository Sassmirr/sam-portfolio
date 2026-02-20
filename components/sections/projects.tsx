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
              className="group p-8 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 space-y-4 flex flex-col"
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