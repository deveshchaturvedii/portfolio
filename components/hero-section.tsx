import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 17, 27, 0.95) 0%, rgba(17, 17, 27, 0.7) 40%, rgba(17, 17, 27, 0.3) 100%), url('/portfolio/hero-image.jpg')`,
          backgroundPosition: '75% 15%',
          backgroundSize: 'cover'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-none mb-6">
            FEEL THE<br />MELODY
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
            Discover Devesh Chaturvedi&apos;s soulful renditions of Indian Classical Music
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-widest px-8 py-6"
            >
              <Link href="#music">LISTEN NOW</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-muted-foreground hover:text-foreground tracking-widest px-8 py-6"
            >
              <Link href="#journey">MY JOURNEY</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
