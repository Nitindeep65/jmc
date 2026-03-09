import { useState, useEffect, useRef } from 'react'

const newsItems = [
  { text: 'PHE WATER SUPPLY HELPLINE NUMBERS — Click to view contact details', href: 'https://jmc.jk.gov.in/adminjmcpanel/noticefiles/318202558462347.pdf' },
  { text: 'Online Building Permission: Apply at JMC Portal for building plan sanction', href: 'https://jmc.jk.gov.in/PermissionForm.aspx' },
  { text: 'Pay Property Tax and other dues Online — Quick & Convenient', href: 'https://jmc.jk.gov.in/online-payment.html' },
  { text: 'Register your Grievance / Complaint online with Jammu Municipal Corporation', href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx' },
  { text: 'Smart City Mission: View latest Smart City projects and developments in Jammu', href: 'https://jmc.jk.gov.in/smartcity.aspx' },
  { text: 'Download the latest E-Newsletter of Jammu Municipal Corporation', href: 'https://jmc.jk.gov.in/newsletter.aspx' },
]

export default function NewsTicker() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const next = () => setCurrent(c => (c + 1) % newsItems.length)
  const prev = () => setCurrent(c => (c - 1 + newsItems.length) % newsItems.length)

  useEffect(() => {
    clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(next, 4500)
    }
    return () => clearInterval(timerRef.current)
  }, [paused])

  return (
    <div className="bg-[#0a0a0a] text-white" style={{ borderTop: '3px solid #FF6600' }}>
      <div className="max-w-[1200px] mx-auto px-4 flex items-stretch" style={{ minHeight: '42px' }}>
        {/* Label */}
        <div className="bg-[#FF6600] text-white px-5 py-0 font-bold text-sm flex items-center flex-shrink-0 mr-4">
          Latest News
        </div>

        {/* News text */}
        <div className="flex-1 py-3 overflow-hidden text-sm text-gray-200 flex items-center">
          <a
            href={newsItems[current].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6600] hover:underline transition-colors"
          >
            {newsItems[current].text}
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 ml-2 flex-shrink-0 py-2">
          <button
            onClick={prev}
            className="w-7 h-7 bg-[#333] hover:bg-[#FF6600] flex items-center justify-center rounded transition-colors text-white"
            aria-label="Previous news"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={() => setPaused(p => !p)}
            className="w-7 h-7 bg-[#333] hover:bg-[#FF6600] flex items-center justify-center rounded transition-colors text-white"
            aria-label={paused ? 'Play news ticker' : 'Pause news ticker'}
          >
            {paused ? (
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            ) : (
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            )}
          </button>
          <button
            onClick={next}
            className="w-7 h-7 bg-[#333] hover:bg-[#FF6600] flex items-center justify-center rounded transition-colors text-white"
            aria-label="Next news"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
