"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Mic, Trophy, Globe, ArrowLeft } from "lucide-react"

const journeyItems = [
  {
    id: "musical-journey",
    title: "Musical Journey...",
    subtitle: "A Prominent Vocalist",
    preview: "Devesh Chaturvedi, a melodious singer, has earned popularity in the music world. He has presented a number of musical shows all over India and abroad, visiting America, France, Bahrain, Suriname, Holland, Dubai, and Sharjah.",
    fullContent: `Devesh Chaturvedi, a melodious singer, has earned popularity in the music world in a short period of time. One can easily feel the essence of Indian music in his mellifluous voice. He has presented a number of musical shows all over India and abroad as well.

In his musical journey, he has visited a number of countries such as America, France, Bahrain, Suriname, Holland, Port of Spain, Dubai, and Sharjah.

He has done Sangeet Nipun with a scholarship and Thumri Singing with Distinction from Bhatkhande Sangeet Mahavidyalaya, Lucknow. He has completed post-graduation in Indian Classical Vocal Music and secured 2nd position in the All India Merit List of Khairagarh Music University.

Devesh Chaturvedi has been awarded by many Indian music personalities such as music director Khaiyam Ji, Ravindra Jain Ji, Begam Parveen Sultana Ji, etc.

He has worked with "Umrao Jaan" fame film director Muzaffar Ali Ji for many music productions, including a Ghazal album "Paigham-E-Mohobbat".

He has also served as a jury member in the selection committees of several reputed Indian music competitions such as "Indian Idol", "Sa Re Ga Ma Pa", "Suron Ka Sangam", "The Voice", and "Suron Ka Eklavya".

Devesh Chaturvedi is a B-High grade artist from All India Radio. He has given his voice in many TV serials, documentary films, musical ballets, etc. His music albums of Ghazals and Bhajans have also been released.

Nowadays, he is giving his services to the music world through the legacy of Indian Music.`,
    image: "/portfolio/journey/musical-journey.jpg",
    icon: Mic,
    type: "modal" as const,
  },
  {
    id: "sa-re-ga-ma",
    title: "ZEE TV SA RE GA MA",
    subtitle: "A Historic Achievement - 1996",
    preview: "First Male Finalist from Lucknow in the reputed musical show 'TVS SA RE GA MA' hosted by renowned playback singer of Bollywood, Sonu Nigam.",
    fullContent: `Devesh Chaturvedi is the first male finalist from Lucknow in the reputed musical show "TVS SA RE GA MA" hosted by renowned playback singer of Bollywood, Sonu Nigam.

This prestigious national platform on ZEE TV in 1996 brought together the finest vocal talents from across India. Competing among thousands of exceptional singers, reaching the finals was a testament to years of dedicated practice and the blessings of his gurus.

The experience was transformative - performing on national television, receiving guidance from industry legends, and connecting with fellow artists who shared the same passion for music. It opened doors to numerous opportunities and helped him reach audiences he could never have imagined.

This achievement remains close to his heart, not just as a personal milestone, but as a moment that brought pride to his hometown Lucknow and its rich musical heritage.`,
    image: "/portfolio/journey/sa-re-ga-ma.jpg",
    icon: Trophy,
    type: "video" as const,
    youtubeUrl: "https://www.youtube.com/watch?v=HyLbYiS9MBU",
    youtubeId: "HyLbYiS9MBU",
  },
  {
    id: "spreading-culture",
    title: "Spreading Indian Culture Around the World",
    subtitle: "Cultural Ambassador",
    preview: "He has worked as an Indian Classical Vocal Lecturer in the Embassy of India, Suriname (South America) for more than two years, promoting Indian Culture around the world.",
    fullContent: `He has worked as an Indian Classical Vocal Lecturer in the ICC, Indian Embassy, Suriname (South America) for more than two years to promote Indian Culture around the world.

During his deputation, he dedicated himself to teaching the rich traditions of Indian Classical Music to students and enthusiasts in South America. This unique opportunity allowed him to bridge continents and cultures through the universal medium of music.

He conducted numerous workshops, recitals, and educational programs that introduced the intricate ragas, talas, and philosophical aspects of Indian music to diverse audiences. Many students, from various backgrounds, discovered their love for Indian classical music during these sessions.

This experience reinforced his belief that music knows no boundaries. Whether in the temples of India or the cultural centers of South America, the soul-stirring melodies of Indian classical traditions have the power to unite hearts and transcend all barriers.

His work in Suriname was not just about teaching notes and scales - it was about sharing a piece of India's soul with the world.`,
    image: "/portfolio/journey/spreading-culture.jpg",
    icon: Globe,
    type: "video" as const,
    youtubeUrl: "https://www.youtube.com/watch?v=1jrOOkcPR5g",
    youtubeId: "1jrOOkcPR5g",
  },
]

export function JourneyCards() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  
  const selected = journeyItems.find(item => item.id === selectedItem)

  const handleCardClick = (item: typeof journeyItems[0]) => {
    setSelectedItem(item.id)
  }

  const closeModal = () => setSelectedItem(null)

  return (
    <>
      <section id="journey" className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              The Journey
            </h2>
            <p className="text-muted-foreground">
              Explore the milestones that shaped a lifetime of music
            </p>
          </div>
          
          {/* Cards Grid - Mobile responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity group-hover:opacity-90" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                    <div className="mb-2 sm:mb-4">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 sm:line-clamp-4 leading-relaxed">
                      {item.preview}
                    </p>
                    <div className="mt-2 sm:mt-4 text-primary text-xs sm:text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.type === "video" ? "WATCH VIDEO" : "READ MORE"}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Back Button and Close Button */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-3 sm:p-4 bg-card/95 backdrop-blur-sm border-b border-border">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-xs sm:text-sm tracking-widest">BACK</span>
              </button>
              <button
                onClick={closeModal}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Modal Content - Video or Image */}
              {selected.type === "video" && selected.youtubeId ? (
                <>
                  {/* Embedded YouTube Video */}
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                      title={selected.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  
                  {/* Modal Content for Video */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <span className="text-primary text-xs sm:text-sm tracking-widest">{selected.subtitle}</span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mt-2 mb-4">
                      {selected.title}
                    </h3>
                    <div className="prose prose-invert prose-sm max-w-none">
                      {selected.fullContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <a
                      href={selected.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm tracking-widest"
                    >
                      WATCH ON YOUTUBE
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
                </>
              ) : (
                <>
                  {/* Modal Image - Landscape, positioned to show face */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-video">
                      <Image
                        src={selected.image}
                        alt={selected.title}
                        fill
                        unoptimized
                        className="object-cover object-top"
                      />
                  </div>
                  
                  {/* Modal Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <span className="text-primary text-xs sm:text-sm tracking-widest">{selected.subtitle}</span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mt-2 mb-4">
                      {selected.title}
                    </h3>
                    <div className="prose prose-invert prose-sm max-w-none">
                      {selected.fullContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            

          </div>
        </div>
      )}
    </>
  )
}
