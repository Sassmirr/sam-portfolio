import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Samir Gajjar</h3>
            <p className="text-muted-foreground text-sm">Full Stack Generative AI Engineer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/samir-gajjar-bb8625290"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Sassmirr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sgajjar3216@gmail.com"
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 Samir Gajjar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
