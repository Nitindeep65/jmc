const quickLinks = [
  { name: 'Jammu Suraksha Yojna', icon: '🏠', href: '#' },
  { name: 'Now Pay online', icon: '💧', href: '#' },
  { name: 'Information', icon: '📜', href: '#' },
  { name: 'Register a complaint', icon: '📝', href: '#' },
  { name: 'Our Achievements', icon: '📋', href: '#' },
  { name: 'Quick Links', icon: '📁', href: '#' },
  { name: 'Feedback', icon: '📁', href: '#' },
  { name: 'Web Information Manager', icon: '📜', href: '#' },
]

export default function QuickLinks() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-[1200px] mx-auto px-2">
        <div className="text-center mb-5">
          <h2 className="text-xl font-bold text-[#003366] inline-block relative">
            Quick Links
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#FF6600]"></span>
          </h2>
        </div>
        <div className="flex flex-row justify-center gap-3 mt-6 flex-wrap">
          {quickLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="bg-[#f8f8f8] hover:bg-[#003366] hover:text-white p-4 rounded-lg text-center transition-all group border border-gray-200 hover:border-[#003366] flex-shrink-0"
            >
              <span className="text-2xl mb-2 block">{link.icon}</span>
              <span className="font-medium text-xs text-gray-700 group-hover:text-white">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
