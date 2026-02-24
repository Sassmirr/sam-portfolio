'use client'

export function AboutSection() {
  const skills = [
    {
      category: 'Generative AI',
      items: ['LLMs', 'RAG Systems', 'Agentic Workflows', 'Prompt Engineering', 'Semantic Search'],
    },
    {
      category: 'Backend & Infrastructure',
      items: ['Node.js', 'Python', 'Express', 'MongoDB', 'FastAPI', 'REST APIs'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Tailwind', 'TypeScript', 'UI/UX Systems'],
    },
    {
      category: 'AI Stack',
      items: ['Gemini API', 'LangChain', 'Qdrant', 'Vector Search', 'Firebase'],
    },
  ]

  return (
    <section id="about" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            About
          </h2>

          <div
            className="h-[2px] w-16 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg,
              transparent,
              hsl(var(--luxury-purple-2)),
              transparent)`
            }}
          />
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <p className="text-lg text-muted-foreground leading-relaxed">
            Final-year Information Technology engineer focused on building real-world AI systems —
            not experiments. I specialize in developing production-ready generative AI applications
            that combine strong backend architecture with intelligent user experiences.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My work spans agentic RAG systems, voice-based AI automation, and full-stack AI platforms.
            I focus on deploying scalable systems using modern AI infrastructure including
            vector databases, LLM orchestration frameworks, and real-time interfaces.
          </p>

          {/* Founder style badge */}
          <div className="flex justify-center pt-4">
            <div
              className="px-5 py-2 rounded-full text-sm font-medium"
              style={{
                border: '1px solid rgba(124,58,237,0.35)',
                background: 'rgba(124,58,237,0.08)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Building AI systems that actually get used.
            </div>
          </div>
        </div>

        {/* Credibility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">

          {[
            {
              title: 'Production AI Systems',
              desc: 'Built and deployed real-world generative AI applications'
            },
            {
              title: 'Agentic RAG Architectures',
              desc: 'Multi-step reasoning with semantic retrieval pipelines'
            },
            {
              title: 'Full-Stack AI Engineering',
              desc: 'Frontend, backend, and AI infra integrated end-to-end'
            },
            {
              title: 'Deployment Focused',
              desc: 'Scalable, stable and usable AI systems'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 rounded-2xl transition-all hover:scale-[1.03]"
            >
              <p className="font-semibold mb-2 text-foreground">
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="pt-10">
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-10">
            Core Stack
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((group) => (
              <div
                key={group.category}
                className="glass-card p-7 rounded-2xl transition-all hover:scale-[1.02]"
              >
                <h4
                  className="text-lg font-semibold mb-5"
                  style={{
                    background: `linear-gradient(90deg,
                    hsl(var(--luxury-purple-2)),
                    hsl(var(--luxury-purple-1)))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {group.category}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border border-border text-muted-foreground hover:border-purple-500/40 hover:text-foreground transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}