import SubpageTemplate from '../components/SubpageTemplate'

const services = [
  {
    category: 'Online Payments',
    icon: '💳',
    items: [
      { name: 'Pay Property Tax', href: 'https://jmc.jk.gov.in/online-payment.html', desc: 'Pay your property tax dues online' },
      { name: 'Water Bill Payment', href: 'https://jmc.jk.gov.in/pddeservices.html', desc: 'Pay water and sewerage bills' },
      { name: 'Online Payment Portal', href: 'https://jmc.jk.gov.in/online-payment.html', desc: 'All JMC dues and fees' },
    ],
  },
  {
    category: 'Certificates & Registrations',
    icon: '📋',
    items: [
      { name: 'Birth/Death Certificate', href: 'https://serviceonline.gov.in/jammu/', desc: 'Apply online via JAKSMAC portal' },
      { name: 'Trade License', href: 'https://jmc.jk.gov.in/easedoing.html', desc: 'Apply / renew trade license' },
      { name: 'Ease of Doing Business', href: 'https://jmc.jk.gov.in/easedoing.html', desc: 'Business registration portal' },
    ],
  },
  {
    category: 'Building & Planning',
    icon: '🏗️',
    items: [
      { name: 'Building Plan Permission', href: 'https://jmc.jk.gov.in/PermissionForm.aspx', desc: 'Apply for building plan sanction' },
      { name: 'Rehri / Stall License', href: 'https://jmc.jk.gov.in/easedoing.html', desc: 'Apply for rehri licence' },
    ],
  },
  {
    category: 'Grievances & Complaints',
    icon: '📢',
    items: [
      { name: 'Register a Complaint', href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx', desc: 'File your complaints online' },
      { name: 'Track Complaint Status', href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx', desc: 'Check your complaint status' },
    ],
  },
  {
    category: 'Information Services',
    icon: 'ℹ️',
    items: [
      { name: 'E-Governance Portal', href: 'https://jmc.jk.gov.in/egov.html', desc: 'Access e-governance services' },
      { name: 'PDD E-Services', href: 'https://jmc.jk.gov.in/pddeservices.html', desc: 'Power Development Dept services' },
      { name: 'E-Newsletter', href: 'https://jmc.jk.gov.in/newsletter.aspx', desc: 'Download JMC newsletters' },
    ],
  },
  {
    category: 'Smart City Services',
    icon: '🏙️',
    items: [
      { name: 'Smart City Portal', href: 'https://jmc.jk.gov.in/smartcity.aspx', desc: 'Smart City Mission Jammu' },
      { name: 'Jammu Suraksha Yojana', href: 'http://www.jammusuraksha.com/', desc: 'Security and welfare scheme' },
    ],
  },
]

export default function Services() {
  return (
    <SubpageTemplate title="Online Services" breadcrumb={[{ name: 'Online Services' }]}>
      <div>
        <p className="text-gray-600 text-sm mb-8 max-w-2xl">
          Access all JMC online services from one place. Pay taxes, apply for certificates, register
          complaints, track applications, and more — all from the convenience of your home.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((cat, idx) => (
            <div key={idx} className="bg-white rounded shadow-sm overflow-hidden">
              <div className="bg-[#003366] text-white px-5 py-3 flex items-center gap-3">
                <span className="text-xl">{cat.icon}</span>
                <h2 className="font-bold text-sm">{cat.category}</h2>
              </div>
              <ul className="p-4 space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 group"
                    >
                      <span className="text-[#FF6600] mt-0.5 flex-shrink-0 text-xs">►</span>
                      <div>
                        <p className="text-[#003366] text-sm font-medium group-hover:text-[#FF6600] transition-colors">{item.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick access bar */}
        <div className="mt-10 bg-[#FF6600] rounded p-6 text-white">
          <h3 className="font-bold text-base mb-1">Need Help?</h3>
          <p className="text-sm text-orange-100 mb-4">
            Call our toll free helpline for assistance with any JMC service.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-white text-[#FF6600] rounded px-5 py-2 font-bold text-lg">
              18001807207
            </div>
            <span className="text-orange-100 text-sm">Available 10:00 AM – 5:00 PM on working days</span>
          </div>
        </div>
      </div>
    </SubpageTemplate>
  )
}
