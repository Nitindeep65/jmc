const footerNavLinks = [
  { name: 'Home', href: 'https://jmc.jk.gov.in/' },
  { name: 'Feedback', href: 'https://jmc.jk.gov.in/feedback.aspx' },
  { name: 'Website Policies', href: 'https://jmc.jk.gov.in/information.html' },
  { name: 'Contact Us', href: 'https://jmc.jk.gov.in/contactus.aspx' },
  { name: 'Help', href: 'https://jmc.jk.gov.in/information.html' },
  { name: 'Sitemap', href: 'https://jmc.jk.gov.in/quick-links.html' },
  { name: 'Web Information Manager', href: 'https://jmc.jk.gov.in/webmanager.html' },
  { name: 'Hyperlinking Policy', href: 'https://jmc.jk.gov.in/information.html' },
]

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About JMC', href: 'https://jmc.jk.gov.in/information.html' },
      { name: 'About Jammu City', href: 'https://jmc.jk.gov.in/information.html' },
      { name: 'Photo Gallery', href: 'https://jmc.jk.gov.in/photogallery.aspx' },
      { name: 'Tenders', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Tender' },
      { name: 'Notices', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
    ],
  },
  {
    title: 'Public Information',
    links: [
      { name: 'Achievements', href: 'https://jmc.jk.gov.in/forms/achievement1.pdf' },
      { name: 'Polythene Control', href: 'https://jmc.jk.gov.in/swachhgallery.aspx' },
      { name: 'Register A Complaint', href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx' },
      { name: 'Apply for Rehri License', href: 'https://jmc.jk.gov.in/easedoing.html' },
      { name: 'Online Building Permission', href: 'https://jmc.jk.gov.in/PermissionForm.aspx' },
    ],
  },
  {
    title: 'Orders & Circulars',
    links: [
      { name: 'Birth Registration', href: 'https://serviceonline.gov.in/jammu/' },
      { name: 'Public Notice', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Public' },
      { name: 'Council Updates', href: 'https://jmc.jk.gov.in/notices.aspx?noticetype=Council' },
      { name: 'E-Newsletter', href: 'https://jmc.jk.gov.in/newsletter.aspx' },
      { name: 'E-Governance Portal', href: 'https://jmc.jk.gov.in/egov.html' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">

      {/* Footer Main: columns */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/circle/circle.jpeg"
                  alt="JMC Logo"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6600]"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div>
                  <p className="font-bold text-sm text-white leading-tight">Jammu Municipal</p>
                  <p className="font-bold text-sm text-[#FF6600] leading-tight">Corporation</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                JMC is the urban local body providing civic services to the residents of Jammu city including
                sanitation, water supply, property tax management, and infrastructure development.
              </p>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 bg-[#3b5998] rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity">f</a>
                <a href="#" className="w-8 h-8 bg-black border border-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity">𝕏</a>
                <a href="#" className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center text-white text-xs hover:opacity-80 transition-opacity">▶</a>
                <a href="#" className="w-8 h-8 bg-[#e1306c] rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity">ig</a>
              </div>
            </div>

            {/* Link columns */}
            {footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4 text-[#FF6600] text-sm">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                        <span className="text-[#FF6600] text-xs">›</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Footer nav links row */}
      <div className="border-b border-gray-700 bg-[#111]">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <nav className="flex flex-wrap justify-center gap-x-1 gap-y-1">
            {footerNavLinks.map((link, idx) => (
              <span key={idx} className="flex items-center">
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs transition-colors px-1 hover:underline">
                  {link.name}
                </a>
                {idx < footerNavLinks.length - 1 && <span className="text-gray-600 text-xs">|</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer bottom: copyright + logos */}
      <div className="bg-[#0d0d0d]">
        <div className="max-w-[1200px] mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs mb-1">
                Copyright &copy; 2016{' '}
                <strong className="text-gray-300">Jammu Municipal Corporation</strong>
                . All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Developed and hosted by{' '}
                <a href="http://www.nic.in/" className="text-gray-400 hover:text-white hover:underline">
                  National Informatics Centre
                </a>
                ,{' '}
                <a href="http://meity.gov.in/" className="text-gray-400 hover:text-white hover:underline">
                  Ministry of Electronics &amp; IT
                </a>
                , Government of India
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Last Updated:{' '}
                <strong className="text-gray-500">
                  {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
                </strong>
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a href="https://s3waas.gov.in/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src="footer/lion.png"
                  alt="S3WaaS"
                  className="h-10 w-auto"
                  onError={(e) => { e.target.outerHTML = '<span class="text-gray-500 text-xs border border-gray-700 px-2 py-1 rounded">S3WaaS</span>' }}
                />
              </a>
              <a href="http://www.nic.in/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src="footer/data.png"
                  alt="NIC"
                  className="h-10 w-auto"
                  onError={(e) => { e.target.outerHTML = '<span class="text-gray-500 text-xs border border-gray-700 px-2 py-1 rounded">NIC</span>' }}
                />
              </a>
              <a href="http://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src="footer/dic.png"
                  alt="Digital India"
                  className="h-10 w-auto"
                  onError={(e) => { e.target.outerHTML = '<span class="text-gray-500 text-xs border border-gray-700 px-2 py-1 rounded">Digital India</span>' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
