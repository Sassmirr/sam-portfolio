import { Github, Linkedin, Mail, Instagram, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-xl font-bold tracking-tight">
              Samir Gajjar
            </h3>

            <p className="text-muted-foreground text-sm">
              Full Stack Generative AI Engineer
            </p>

            {/* LOCATION */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground opacity-80">
              <MapPin size={14} />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

            <p className="text-xs text-muted-foreground opacity-60 pt-1">
              Building intelligent AI systems & premium digital experiences
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/samir-gajjar-bb8625290"
              target="_blank"
              className="group p-3 rounded-xl bg-secondary border border-white/10 hover:border-[#0A66C2]/60 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="text-muted-foreground group-hover:text-[#0A66C2] transition-colors"
              />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Sassmirr"
              target="_blank"
              className="group p-3 rounded-xl bg-secondary border border-white/10 hover:border-white/40 transition-all"
              aria-label="GitHub"
            >
              <Github
                size={18}
                className="text-muted-foreground group-hover:text-white transition-colors"
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/sassmirr"
              target="_blank"
              className="group p-3 rounded-xl bg-secondary border border-white/10 hover:border-pink-500/60 transition-all"
              aria-label="Instagram"
            >
              <Instagram
                size={18}
                className="text-muted-foreground group-hover:text-pink-500 transition-colors"
              />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:sgajjar3216@gmail.com"
              className="group p-3 rounded-xl bg-secondary border border-white/10 hover:border-[hsl(var(--luxury-purple-2))]/60 transition-all"
              aria-label="Email"
            >
              <Mail
                size={18}
                className="text-muted-foreground group-hover:text-white transition-colors"
              />
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-muted-foreground opacity-70 text-center md:text-left">
            © {new Date().getFullYear()} Samir Gajjar. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground opacity-60 text-center">
            Built with AI • Designed for impact
          </p>

        </div>
      </div>
    </footer>
  )
}