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

const officials = [
  { title: "Hon'ble Lt. Governor", name: 'Mr. Manoj Sinha', image: '/officials/LG.jpg' },
  { title: "Hon'ble Chief Minister", name: 'Omar Abdullah', image: '/officials/cm.jpg' },
  { title: 'Chief Secretary', name: 'Atul Dulloo (IAS)', image: '/officials/cs.jpg' },
  { title: 'Municipal Commissioner', name: 'Devansh Yadav, IAS', image: '/officials/com.jpg' },
  { title: "Ms. Mandeep Kaur, (IAS)\
Commissioner Secretary,  JKHUDD", name: 'Ms. Mandeep Kaur', image: '/officials/comSec.jpg' },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [profileIdx, setProfileIdx] = useState(0)
  const timerRef = useRef(null)
  const profileTimerRef = useRef(null)

  const next = () => setCurrent(c => (c + 1) % slides.length)
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    clearInterval(timerRef.current)
    if (!paused) timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [paused])

  useEffect(() => {
    profileTimerRef.current = setInterval(() => {
      setProfileIdx(i => (i + 2) % officials.length)
    }, 4000)
    return () => clearInterval(profileTimerRef.current)
  }, [])  // officials.length is constant, safe to omit

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

      {/* Profile Cards — right side overlay, sliding 2 at a time */}
      <div className="absolute top-4 right-1 flex gap-4 z-20">
        {[officials[profileIdx % officials.length], officials[(profileIdx + 1) % officials.length]].map((person, i) => (
          <div key={`${profileIdx}-${i}`} className="bg-white/95 backdrop-blur-sm rounded shadow-lg p-5 text-center w-64 flex flex-col items-center transition-all duration-700">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 mb-3 bg-gray-100">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=200&background=cccccc&color=555` }}
              />
            </div>
            <p className="text-[#003366] font-bold text-sm leading-tight">{person.title}</p>
            <p className="text-gray-500 text-xs mt-1 mb-3">{person.name}</p>
            <div className="flex gap-3 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#FF6600] text-sm font-bold">f</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#FF6600] text-sm font-bold">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#FF6600] text-sm font-bold">in</a>
            </div>
          </div>
        ))}
      </div>

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
