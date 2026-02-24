'use client'

import { ChatInterface } from '../chat-interface'

export function AIChatSection() {
  return (
    <section id="chat" className="py-32 px-6 bg-background relative overflow-hidden">

      {/* subtle background glow */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 20%,
            hsla(var(--luxury-purple-1),0.25),
            transparent 60%)`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center space-y-6 mb-16">

          {/* small badge */}
          <div className="flex justify-center">
            <div
              className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium"
              style={{
                border: '1px solid rgba(124,58,237,0.35)',
                background: 'rgba(124,58,237,0.08)',
                backdropFilter: 'blur(8px)'
              }}
            >
              Interactive AI Assistant
            </div>
          </div>

          {/* main title */}
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Talk With My AI
          </h2>

          {/* subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            This isn’t a demo chatbot.
            It’s an agent trained on my projects, experience, and technical work.
            Ask anything — like you would ask me directly.
          </p>

          {/* gradient divider */}
          <div
            className="h-[2px] w-24 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg,
                transparent,
                hsl(var(--luxury-purple-2)),
                transparent)`
            }}
          />
        </div>

        {/* CHAT WINDOW */}
        <div className="relative">

          {/* glow behind chat */}
          <div
            className="absolute -inset-6 blur-2xl opacity-40"
            style={{
              background: `radial-gradient(circle,
                hsla(var(--luxury-purple-2),0.25),
                transparent 70%)`
            }}
          />

          {/* chat container */}
          <div className="relative h-[420px] md:h-[620px] rounded-2xl overflow-hidden border border-border/60 glass-card">

            {/* top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60 backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <div className="ml-3 text-xs text-muted-foreground">
                samir-ai-assistant
              </div>
            </div>

            {/* actual chat */}
            <div className="h-[calc(100%-48px)]">
              <ChatInterface />
            </div>
          </div>

          {/* bottom caption */}
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Powered by custom RAG pipeline • Gemini • Vector search
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}