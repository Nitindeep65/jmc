import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    image: '/banner/banner1.jpg',
    title: 'Jammu Municipal Corporation',
    subtitle: 'Committed to serving the residents of Jammu City',
  },
  {
    image: '/banner/banner2.jpg',
    title: 'Smart Urban Services',
    subtitle: 'Online payments, digital services, and more for citizens',
  },
  {
    image: '/banner/banner3.jpg',
    title: 'Cleaner, Greener Jammu',
    subtitle: "JMC's commitment to sanitation and environment",
  },
  {
    image: '/banner/banner4.jpg',
    title: 'Infrastructure Development',
    subtitle: 'Building roads, parks, and amenities for a better Jammu',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const next = () => setCurrent(c => (c + 1) % slides.length)
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    clearInterval(timerRef.current)
    if (!paused) timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [paused])

  return (
    <section className="relative h-[350px] md:h-[450px] overflow-hidden" aria-roledescription="carousel" aria-label="JMC Home Banner">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={idx !== current}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-fill"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-16 left-8 md:left-12 max-w-lg">
            <div className="bg-[#FF6600]/90 px-5 py-3 inline-block">
              <p className="text-white font-bold text-lg md:text-xl">{slide.title}</p>
              <p className="text-white/90 text-sm mt-1">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Side arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF6600] text-white p-2.5 rounded transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF6600] text-white p-2.5 rounded transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      {/* Bottom controls: dots + pause */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === current ? 'bg-[#FF6600]' : 'bg-white/60 hover:bg-white'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button
          onClick={() => setPaused(p => !p)}
          className="w-7 h-7 bg-black/40 hover:bg-[#FF6600] text-white flex items-center justify-center rounded ml-1 transition-colors"
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
        >
          {paused
            ? <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            : <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          }
        </button>
      </div>
    </section>
  )
}
