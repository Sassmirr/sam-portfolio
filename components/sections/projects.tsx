'use client'
import { ExternalLink, Github } from 'lucide-react'

export function ProjectsSection() {

  // smooth scroll to AI chat demo
  const scrollToChat = (e: React.MouseEvent) => {
    e.preventDefault()
    const chatSection = document.getElementById('chat')
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const projects = [
    {
      title: 'Voice Salon Booking AI Agent',
      description:
        'Conversational voice AI agent capable of handling bookings, rescheduling, and service queries in real time. Built to simulate a human receptionist using speech-to-text, text-to-speech, and generative reasoning.',
      impact: 'Replaces manual booking calls with autonomous AI interaction',
      tags: ['Voice AI', 'Generative AI', 'Real-time', 'MERN', 'Automation'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    {
      title: 'Personal AI Portfolio (This Website)',
      description:
        'A new-age AI portfolio featuring an embedded agentic assistant trained on my work, streaming responses, recruiter-aware intelligence, and backend contact pipeline.',
      impact: 'Transforms a traditional portfolio into an interactive AI experience',
      tags: ['Next.js', 'AI Agent', 'Gemini', 'Qdrant', 'RAG', 'Node'],
      links: {
        demo: '#',
        github: '#',
      },
    },

    {
      title: 'Agentic RAG Chatbot',
      description:
        'Production-ready retrieval augmented generation system with document ingestion, semantic search, and context-aware reasoning. Supports multi-session memory and intelligent responses.',
      impact: 'Enables intelligent document querying and AI reasoning',
      tags: ['RAG', 'LangChain', 'Gemini', 'Qdrant', 'React', 'Node'],
      links: {
        demo: '#chat',
        github: 'https://github.com/Sassmirr/d-RAG.git',
        isChatDemo: true,
      },
    },

    {
      title: 'AI Fitness Trainer',
      description:
        'Computer vision powered fitness assistant that tracks posture and movement while generating adaptive training suggestions using AI models.',
      impact: 'Brings real-time AI posture correction and fitness guidance',
      tags: ['Computer Vision', 'Python', 'OpenCV', 'TensorFlow', 'AI'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    {
      title: 'Steganography Encryption System',
      description:
        'Advanced secure data hiding system allowing encrypted information embedding within images for confidential communication.',
      impact: 'Enhances data security through visual cryptography',
      tags: ['Python', 'Cryptography', 'Security', 'Image Processing'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    {
      title: 'ANPR + Face Recognition',
      description:
        'Computer vision surveillance system combining automatic number plate recognition and facial identification for real-time monitoring.',
      impact: 'Real-time identity and vehicle tracking system',
      tags: ['YOLO', 'OpenCV', 'Python', 'Computer Vision'],
      links: {
        demo: 'https://github.com/Sassmirr',
        github: 'https://github.com/Sassmirr',
      },
    },

    {
      title: 'Bus Booking Platform (Webflow + Backend)',
      description:
        'Full-stack bus reservation platform with Webflow frontend and Node.js backend handling booking logic, scheduling, and APIs.',
      impact: 'Complete booking infrastructure with scalable backend',
      tags: ['Node.js', 'MongoDB', 'Webflow', 'REST API'],
      links: {
        demo: 'https://bus-it-up.my.canva.site',
        github: 'https://github.com/Sassmirr/bus-booking-backend.git',
      },
    },
  ]

  return (
    <section id="projects" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Projects & Systems
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of AI systems and full-stack products I’ve built and deployed.
          </p>

          <div
            className="h-[2px] w-20 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg,
              transparent,
              hsl(var(--luxury-purple-2)),
              transparent)`
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card group p-8 rounded-2xl border border-border/60 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/40 flex flex-col"
            >
              {/* title */}
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* desc */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* impact */}
              {project.impact && (
                <p className="text-sm mb-5 font-medium"
                  style={{
                    color: 'hsl(var(--luxury-purple-2))'
                  }}>
                  {project.impact}
                </p>
              )}

              {/* tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* buttons */}
              <div className="flex gap-6 pt-4 border-t border-border mt-auto">

                {project.links.isChatDemo ? (
                  <a
                    href="#chat"
                    onClick={scrollToChat}
                    className="text-sm font-medium hover:opacity-80 transition flex items-center gap-2"
                  >
                    Live Demo <ExternalLink size={15} />
                  </a>
                ) : (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:opacity-80 transition flex items-center gap-2"
                  >
                    Live Demo <ExternalLink size={15} />
                  </a>
                )}

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:opacity-80 transition flex items-center gap-2"
                >
                  GitHub <Github size={15} />
                </a>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}