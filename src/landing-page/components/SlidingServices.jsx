const departments = [
  { name: 'Engineering Department', href: 'https://jmc.jk.gov.in/developwork.aspx' },
  { name: 'Health Department', href: 'https://jmc.jk.gov.in/swachhgallery.aspx' },
  { name: 'Revenue & Taxation', href: 'https://jmc.jk.gov.in/online-payment.html' },
  { name: 'Sanitation Department', href: 'https://jmc.jk.gov.in/swachhgallery.aspx' },
  { name: 'Urban Planning', href: 'https://jmc.jk.gov.in/smartcity.aspx' },
  { name: 'Water Supply Division', href: 'https://jmc.jk.gov.in/pddeservices.html' },
  { name: 'Horticulture Department', href: 'https://jmc.jk.gov.in/easedoing.html' },
]

const importantLinks = [
  { name: 'Jammu Suraksha Yojana', href: 'http://www.jammusuraksha.com/' },
  { name: 'Pay Online', href: 'https://jmc.jk.gov.in/online-payment.html' },
  { name: 'Register a Complaint', href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx' },
  { name: "Commissioner's Desk", href: 'https://jmc.jk.gov.in/commissioner.html' },
  { name: 'Achievements', href: 'https://jmc.jk.gov.in/forms/achievement1.pdf' },
  { name: 'Quick Links', href: 'https://jmc.jk.gov.in/quick-links.html' },
  { name: 'Feedback', href: 'https://jmc.jk.gov.in/feedback.aspx' },
  { name: 'Web Information Manager', href: 'https://jmc.jk.gov.in/webmanager.html' },
]

export default function SlidingServices() {
  return (
    <section className="py-10 bg-white border-t-4 border-[#003366]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-gray-200">

          {/* Col 1: Departments */}
          <div className="pr-6">
            <h2 className="text-xl font-bold text-[#003366] mb-1 pb-2 border-b-2 border-[#FF6600] inline-block">
              Departments
            </h2>
            <ul className="mt-4 space-y-1">
              {departments.map((dept, idx) => (
                <li key={idx}>
                  <a
                    href={dept.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#003366] hover:font-semibold transition-all py-1.5 border-b border-gray-100 group"
                  >
                    <span className="text-[#FF6600] text-xs group-hover:translate-x-0.5 transition-transform">►</span>
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://jmc.jk.gov.in/information.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white text-xs px-4 py-1.5 rounded transition-colors"
            >
              View All
            </a>
          </div>

          {/* Col 2: Important Links */}
          <div className="px-6">
            <h2 className="text-xl font-bold text-[#003366] mb-1 pb-2 border-b-2 border-[#FF6600] inline-block">
              Important Links
            </h2>
            <ul className="mt-4 space-y-1">
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#003366] hover:font-semibold transition-all py-1.5 border-b border-gray-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF6600] flex-shrink-0 inline-block"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://jmc.jk.gov.in/quick-links.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white text-xs px-4 py-1.5 rounded transition-colors"
            >
              View All
            </a>
          </div>

          {/* Col 3: City image + about */}
          <div className="pl-6">
            <div className="rounded overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="circle/circle.jpeg"
                  alt="Jammu City"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm">Jammu City</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#003366] text-sm mb-2">Welcome to Jammu Municipal Corporation</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Jammu, the winter capital of J&K Union Territory, is served by JMC for all civic
                  needs — from sanitation to infrastructure, property services to public health.
                </p>
                <a href="https://jmc.jk.gov.in/information.html" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-[#FF6600] hover:underline font-semibold">
                  Know More →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
