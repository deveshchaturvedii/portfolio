"use client"

import { ChevronDown } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Animated Musical Notes */}
        <div className="flex justify-center gap-2 mb-6">
          {["S", "a", "R", "e", "G", "a", "M", "a"].map((note, index) => (
            <span
              key={index}
              className="text-2xl md:text-3xl font-serif text-primary animate-bounce"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1.5s'
              }}
            >
              {note}
            </span>
          ))}
        </div>
        
        {/* Title with gradient */}
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Welcome
        </h2>
        
        {/* Shorter Description */}
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-sm md:text-base">
          Explore the rich legacy of Indian Classical Music through decades of performances, 
          achievements, and cultural contributions across the globe.
        </p>
        
        {/* Animated scroll indicator */}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-xs text-muted-foreground tracking-widest mb-2">SCROLL TO EXPLORE</span>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
    </section>
  )
}
