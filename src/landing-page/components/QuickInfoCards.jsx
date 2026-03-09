const cards = [
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    title: 'Property Tax',
    description: 'Pay property tax online, download receipts, check outstanding dues, and file objections.',
    href: 'https://jmc.jk.gov.in/online-payment.html',
    color: '#003366',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    title: 'Water Supply',
    description: 'Report water supply issues, pay water bills, and check your area supply schedule.',
    href: 'https://jmc.jk.gov.in/pddeservices.html',
    color: '#1a6fa8',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    title: 'Certificates',
    description: 'Apply for birth, death, and marriage certificates through the online government portal.',
    href: 'https://serviceonline.gov.in/jammu/',
    color: '#2e7d32',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: 'Orders & Notices',
    description: 'Access JMC official orders, circulars, government notifications and public notices.',
    href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public',
    color: '#6a1b9a',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.9 2.1L4.2 8.8c-.4.4-.2 1 .3 1.2L8 11.4V20c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-8.6l3.5-1.4c.5-.2.7-.8.3-1.2L13.1 2.1C12.7 1.7 11.3 1.7 10.9 2.1z"/>
      </svg>
    ),
    title: 'Building Permission',
    description: 'Submit and track applications for building plan sanction and construction permits.',
    href: 'https://jmc.jk.gov.in/PermissionForm.aspx',
    color: '#e65100',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    title: 'File a Grievance',
    description: 'Register your complaint or grievance online and track the resolution status in real time.',
    href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx',
    color: '#c62828',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
      </svg>
    ),
    title: 'Tenders',
    description: 'View latest JMC tenders, NIT notices, and e-procurement bids and opportunities.',
    href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Tender',
    color: '#00695c',
  },
  {
    icon: (
      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    title: 'Smart City',
    description: 'Explore Smart City Mission projects, ongoing initiatives and developments in Jammu.',
    href: 'https://jmc.jk.gov.in/smartcity.aspx',
    color: '#1565c0',
  },
]

export default function QuickInfoCards() {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#003366] uppercase tracking-widest">Citizen Services</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[2px] w-12 bg-[#FF6600]" />
            <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
            <div className="h-[2px] w-12 bg-[#FF6600]" />
          </div>
          <p className="text-gray-500 text-sm mt-2">Access key civic services of Jammu Municipal Corporation</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 rounded-lg bg-white p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col items-center no-underline"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: card.color }}
              >
                {card.icon}
              </div>
              <h3 className="text-[#003366] font-bold text-sm mb-2 group-hover:text-[#FF6600] transition-colors">{card.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">{card.description}</p>
              <span className="mt-4 text-xs font-semibold text-[#FF6600] group-hover:underline">Learn More →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
