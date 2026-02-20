import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { AIChatSection } from '@/components/sections/ai-chat'
import { ExperienceSection } from '@/components/sections/experience'
import { GallerySection } from '@/components/sections/gallery'
import { ContactSection } from '@/components/sections/contact'

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AIChatSection />
      <ExperienceSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
