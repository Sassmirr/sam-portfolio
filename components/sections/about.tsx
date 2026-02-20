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
