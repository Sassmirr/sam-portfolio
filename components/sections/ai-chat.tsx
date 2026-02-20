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
