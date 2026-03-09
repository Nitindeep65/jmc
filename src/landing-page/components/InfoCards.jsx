import { useState } from 'react'

const tabData = {
  whatsnew: [
    { title: 'Visit of Commissioner Secretary, Housing & Urban Development Department', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
    { title: 'JMC Commissioner Conducts Field Visit to Oversee Street Light Repairs in Jammu City', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
    { title: 'JMC Commissioner lays foundation of public toilet complex under ODF initiative', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
    { title: 'Property Tax Payment Online — Pay Online and Avail Benefits', href: 'https://jmc.jk.gov.in/online-payment.html' },
    { title: 'New Guidelines for Solid Waste Management — Swachh Bharat Mission', href: 'https://jmc.jk.gov.in/swachhgallery.aspx' },
  ],
  tenders: [
    { title: 'Tender for Street Light Repair and Maintenance Works in Jammu City', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Tender' },
    { title: 'Tender for Supply of Sanitation Equipment and Vehicles', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Tender' },
    { title: 'Tender for Construction of Public Toilet Complex at Multiple Locations', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Tender' },
    { title: 'Tender for Road Repair and Development Works', href: 'https://jmc.jk.gov.in/developwork.aspx' },
  ],
  notifications: [
    { title: 'Notification regarding Property Tax Assessment 2025-26', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
    { title: 'Public Notice: Trade License Renewal — Apply Online', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
    { title: 'Council Updates and Meeting Resolutions', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Council' },
    { title: 'Building Permission Portal — Apply and Track Status', href: 'https://jmc.jk.gov.in/PermissionForm.aspx' },
  ],
}

const minister = {
  image: '/officials/LG.jpg',
  title: "Hon'ble Lt. Governor",
  name: 'Mr. Manoj Sinha',
}

export default function InfoCards() {
  const [activeTab, setActiveTab] = useState('whatsnew')

  return (
    <section className="py-8 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Col 1: About JMC */}
          <div>
            <h2 className="text-xl font-bold text-[#003366] mb-1 pb-2 border-b-2 border-[#FF6600] inline-block">About JMC</h2>
            <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">
              Jammu Municipal Corporation (JMC) is the urban local body responsible for civic
              administration of Jammu city. JMC is committed to providing quality civic services
              including sanitation, water supply, road maintenance, property tax management, and
              public health to the residents of Jammu.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Established under the J&K Municipal Corporation Act, JMC works towards making
              Jammu a clean, green, and smart city through various government schemes and
              citizen-centric initiatives.
            </p>
            <a
              href="https://jmc.jk.gov.in/information.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white px-5 py-2 text-sm font-medium transition-colors rounded"
            >
              Read More
            </a>
          </div>

          {/* Col 2: Tabs */}
          <div>
            <div className="bg-white shadow-sm rounded overflow-hidden">
              {/* Tab headers */}
              <div className="flex border-b border-gray-200">
                {[
                  { id: 'whatsnew', label: "What's New" },
                  { id: 'tenders', label: 'Tenders' },
                  { id: 'notifications', label: 'Notifications' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-2 py-3 text-xs font-semibold transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? 'border-[#FF6600] text-[#FF6600] bg-orange-50'
                        : 'border-transparent text-gray-600 hover:text-[#003366] hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Tab content */}
              <ul className="p-4 space-y-2.5" style={{ minHeight: '210px' }}>
                {tabData[activeTab].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF6600] mt-0.5 flex-shrink-0 text-xs">►</span>
                    <a href={item.href} className="text-sm text-gray-700 hover:text-[#003366] hover:underline leading-snug">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-3 border-t border-gray-100">
                <a href="https://jmc.jk.gov.in/notices.aspx?noticetype=Public" target="_blank" rel="noopener noreferrer" className="text-xs text-[#FF6600] hover:underline font-semibold">View All →</a>
              </div>
            </div>
          </div>

          {/* Col 3: Minister Profile */}
          <div>
            <div className="bg-white shadow-sm rounded overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 text-sm font-bold">Ministers Profile</div>
              <div className="p-5 text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-gray-100 shadow-md mb-3">
                  <img
                    src={minister.image}
                    alt={minister.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(minister.name)}&size=200&background=003366&color=fff`
                    }}
                  />
                </div>
                <h3 className="text-[#003366] text-sm font-bold leading-tight">{minister.title}</h3>
                <p className="text-gray-500 text-xs mt-1 mb-4">{minister.name}</p>
                <div className="flex gap-2 justify-center mb-4">
                  <a href="https://www.facebook.com/JammuSmartCity" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#3b5998] rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity">f</a>
                  <a href="https://twitter.com/jmcjammu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity">𝕏</a>
                </div>
                <div className="flex gap-2 justify-center">
                  <a href="https://jmc.jk.gov.in/higherofficer.aspx" target="_blank" rel="noopener noreferrer" className="border border-[#003366] text-[#003366] text-xs px-4 py-1.5 rounded hover:bg-[#003366] hover:text-white transition-colors">Profile</a>
                  <a href="https://jmc.jk.gov.in/contactus.aspx" target="_blank" rel="noopener noreferrer" className="border border-[#003366] text-[#003366] text-xs px-4 py-1.5 rounded hover:bg-[#003366] hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              {/* Additional ministers nav */}
              <div className="border-t border-gray-100 px-4 py-3 flex justify-between">
                <a href="https://jmc.jk.gov.in/higherofficer.aspx" target="_blank" rel="noopener noreferrer" className="text-xs text-[#FF6600] hover:underline font-semibold">View All Officials →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
