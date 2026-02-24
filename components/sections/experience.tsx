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
    <section id="experience" className="py-28 px-6 bg-background relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="h-[3px] w-16 mx-auto rounded-full bg-gradient-to-r from-[hsl(var(--luxury-purple-1))] via-[hsl(var(--luxury-purple-2))] to-[hsl(var(--luxury-purple-3))]" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 left-6">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[hsl(var(--luxury-purple-1))] to-[hsl(var(--luxury-purple-3))] shadow-[0_0_20px_rgba(124,58,237,0.6)]" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="w-full md:w-1/2 ml-16 md:ml-0">
                  <div className="glass-card p-7 rounded-2xl border border-border bg-secondary/40 backdrop-blur-xl hover:border-accent/40 transition-all duration-300">

                    {/* header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold bg-gradient-to-r from-[hsl(var(--luxury-purple-1))] to-[hsl(var(--luxury-purple-3))] bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>

                      <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    {/* description */}
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-background border border-border text-muted-foreground hover:border-accent/40 transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}