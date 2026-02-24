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

  const containerRef = useRef<HTMLDivElement>(null)
  const shouldAutoScroll = useRef(true)

  // detect manual scroll
  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return

    const nearBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < 100

    shouldAutoScroll.current = nearBottom
  }

  const scrollToBottom = () => {
    const el = containerRef.current
    if (!el || !shouldAutoScroll.current) return

    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight
    })
  }

  // welcome msg
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        text: "Hi! I'm Samir's AI assistant. Ask me anything about his projects, skills, or experience.",
        sender: 'ai',
        timestamp: formatTime(new Date()),
      },
    ])
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userText = input.trim()

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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userText }),
      })

      if (!res.body) throw new Error('No stream')

      const reader = res.body.getReader()
      const decoder = new TextDecoder('utf-8')

      const aiId = (Date.now() + 1).toString()

      const aiMessage: Message = {
        id: aiId,
        text: '',
        sender: 'ai',
        timestamp: formatTime(new Date()),
      }

      setMessages(prev => [...prev, aiMessage])

      let fullText = ''
      let queue: string[] = []
      let typing = false

      // smooth typing engine
      const typeNext = async () => {
        if (typing) return
        typing = true

        while (queue.length > 0) {
          const nextChar = queue.shift()
          if (!nextChar) continue

          fullText += nextChar

          setMessages(prev => {
            const updated = [...prev]
            const index = updated.findIndex(m => m.id === aiId)
            if (index !== -1) {
              updated[index].text = fullText
            }
            return updated
          })

          await new Promise(r => setTimeout(r, 8)) // typing speed
        }

        typing = false
      }

      // STREAM
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)

        // push chars into queue
        queue.push(...chunk.split(''))

        typeNext()
      }

    } catch (err) {
      console.error(err)

      const errorMsg: Message = {
        id: Date.now().toString(),
        text: "⚠️ Unable to connect to AI server.",
        sender: 'ai',
        timestamp: formatTime(new Date()),
      }

      setMessages(prev => [...prev, errorMsg])
    }

    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e as any)
    }
  }

  return (
    <div className="flex flex-col h-full bg-background rounded-xl border border-border overflow-hidden">

      {/* messages */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`
              max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed
              ${message.sender === 'user'
                  ? 'bg-gradient-to-br from-[hsl(var(--luxury-purple-1))] to-[hsl(var(--luxury-purple-3))] text-white shadow-lg'
                  : 'bg-secondary border border-border text-foreground'}
              `}
            >
              {message.text}
              <div className="text-[10px] opacity-60 mt-2">{message.timestamp}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary border border-border px-4 py-3 rounded-2xl">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* input */}
      <form onSubmit={handleSendMessage} className="border-t border-border p-4 bg-background">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Samir..."
            className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="neon-btn px-4 flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  )
}