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
