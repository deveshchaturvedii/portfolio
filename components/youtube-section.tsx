"use client"

import { Play } from "lucide-react"

const videos = [
  {
    id: "Hr4FPcVqZPM",
    title: "Traditional Melody",
    youtubeUrl: "https://youtu.be/Hr4FPcVqZPM",
  },
  {
    id: "PTaOuvNduCA",
    title: "Musical Performance",
    youtubeUrl: "https://youtu.be/PTaOuvNduCA",
  },
  {
    id: "dYUFNd_C3fc",
    title: "Live Concert",
    youtubeUrl: "https://youtu.be/dYUFNd_C3fc",
  },
  {
    id: "WpldPyKcf88",
    title: "Classical Performance",
    youtubeUrl: "https://youtu.be/WpldPyKcf88",
  },
  {
    id: "B8cxrVCVsts",
    title: "Soulful Rendition",
    youtubeUrl: "https://youtu.be/B8cxrVCVsts",
  },
  {
    id: "icgU7SY0Mws",
    title: "Indian Classical Music",
    youtubeUrl: "https://youtu.be/icgU7SY0Mws",
  },
]

export function YouTubeSection() {
  return (
    <section id="music" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest">LATEST</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Music & Performances
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the soul-stirring renditions of Indian Classical Music. 
            Subscribe to stay updated with the latest performances.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video overflow-hidden rounded-lg bg-secondary"
            >
              {/* YouTube Thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.id}/maxresdefault.jpg)` }}
              />
              
              {/* Fallback for lower quality thumbnails */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 -z-10"
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-sm font-medium">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/deveshchaturvedi14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm tracking-widest"
          >
            VIEW ALL ON YOUTUBE
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
