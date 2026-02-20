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
            className="p-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}
