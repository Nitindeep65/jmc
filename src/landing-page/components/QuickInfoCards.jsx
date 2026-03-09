const cards = [
  {
    icon: (
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    title: 'Property Tax',
    description: 'Pay your property tax online, download receipts, check dues, and file objections easily.',
    href: 'https://jmc.jk.gov.in/online-payment.html',
  },
  {
    icon: (
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    title: 'Water Supply',
    description: 'Report water supply issues, pay water bills, and check your area\'s supply schedule.',
    href: 'https://jmc.jk.gov.in/pddeservices.html',
  },
  {
    icon: (
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    title: 'Services',
    description: 'Apply for building permissions, trade licenses, birth/death certificates, and more.',
    href: 'https://serviceonline.gov.in/jammu/',
  },
  {
    icon: (
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: 'Documents',
    description: 'Access JMC official documents, circulars, government orders, and notifications.',
    href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public',
  },
]

export default function QuickInfoCards() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#e5e5e5] rounded bg-white p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#FF6600] flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[#003366] font-bold text-sm mb-2">{card.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{card.description}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white text-xs px-4 py-1.5 rounded transition-colors inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
