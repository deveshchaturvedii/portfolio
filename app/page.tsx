import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { JourneyCards } from "@/components/journey-cards"
import { YouTubeSection } from "@/components/youtube-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <JourneyCards />
      <YouTubeSection />
      <Footer />
    </main>
  )
}
