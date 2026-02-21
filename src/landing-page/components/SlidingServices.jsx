const slidingOptions = [
  { name: 'Property Tax', icon: '🏠' },
  { name: 'Water Supply', icon: '💧' },
  { name: 'Sanitation', icon: '🧹' },
  { name: 'Birth Certificate', icon: '📜' },
  { name: 'Death Certificate', icon: '📄' },
  { name: 'Building Permission', icon: '🏗️' },
  { name: 'Grievance Redressal', icon: '📝' },
  { name: 'Trade License', icon: '📋' },
  { name: 'Street Lights', icon: '💡' },
  { name: 'Solid Waste Management', icon: '♻️' }
]

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

export default function SlidingServices() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#003366] to-[#004488]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Quick Links - Left */}
          <div className="flex-1 bg-white/10 rounded-xl p-6 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#FF6600] pb-3 inline-block">
              Quick Links
            </h2>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-3">
                {quickLinks.slice(0, 4).map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 text-white hover:text-[#FF6600] hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-medium text-base">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {quickLinks.slice(4).map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 text-white hover:text-[#FF6600] hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-medium text-base">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Our Services - Right */}
          <div className="flex-1 bg-white/10 rounded-xl p-6 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#FF6600] pb-3 inline-block">
              Our Services
            </h2>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-3">
                {slidingOptions.slice(0, 5).map((option, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center gap-4 text-white hover:text-[#FF6600] hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-base">{option.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {slidingOptions.slice(5).map((option, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center gap-4 text-white hover:text-[#FF6600] hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-base">{option.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
