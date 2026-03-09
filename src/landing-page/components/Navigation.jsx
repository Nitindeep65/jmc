
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About JMC', to: '/about', hasDropdown: true, dropdown: [
    { name: 'About JMC', to: '/about' },
    { name: 'History', to: '/about#history' },
    { name: 'Vision & Mission', to: '/about#vision' },
    { name: 'Acts & Rules', to: '/about#acts' },
    { name: 'Gallery', to: '/gallery' },
  ] },
  { name: 'Governing Bodies', to: '/officials', hasDropdown: true, dropdown: [
    { name: "Hon'ble Mayor", href: 'https://jmc.jk.gov.in/mayor.aspx' },
    { name: "Hon'ble Deputy Mayor", href: 'https://jmc.jk.gov.in/deputymayor.aspx' },
    { name: "Hon'ble Chairman Public Health and Sanitation Committee", href: 'https://jmc.jk.gov.in/governingbodies.aspx' },
    { name: "Hon'ble Chairman Swachh Bharat Committee", href: 'https://jmc.jk.gov.in/governingbodies.aspx' },
    { name: "Hon'ble Chairman Social Justice Committee", href: 'https://jmc.jk.gov.in/governingbodies.aspx' },
    { name: 'Commissioner Secretary to Govt. (HUDD)', to: '/officials' },
    { name: 'Municipal Commissioner, JMC', to: '/commissioner' },
  ] },
  { name: 'E-Governance', to: '/egov', hasDropdown: true, dropdown: [
    { name: 'Doorstep Governance', href: 'https://jmc.jk.gov.in/doorstep.aspx' },
    { name: 'Online Public Grievance System', href: 'https://jmc.jk.gov.in/OnlineGrievances.aspx' },
    { name: 'Online Birth/Death Certificate', href: 'https://serviceonline.gov.in/jammu/' },
    { name: 'Online Building Permission', href: 'https://jmc.jk.gov.in/PermissionForm.aspx' },
    { name: 'Online Pay Rent of Municipal Shop/Flat', href: 'https://jmc.jk.gov.in/online-payment.html' },
    { name: 'Online User Charges', href: 'https://jmc.jk.gov.in/online-payment.html' },
    { name: 'E-Tendering', href: 'https://jktenders.gov.in/' },
    { name: 'Online NOC/License System', href: 'https://jmc.jk.gov.in/easedoing.html' },
    { name: 'Apply for Rehri License', href: 'https://jmc.jk.gov.in/easedoing.html' },
    { name: 'Online Birth/Death Certificate', href: 'https://serviceonline.gov.in/jammu/' },
    { name: 'PDD E-Services', href: 'https://jmc.jk.gov.in/pddeservices.html' },
  ] },
  { name: 'Departments', to: '/about', hasDropdown: true, dropdown: [
    { name: 'Health & Sanitation', href: 'https://jmc.jk.gov.in/HealthDept.aspx' },
    { name: 'Enforcement', href: 'https://jmc.jk.gov.in/enforcement.aspx' },
    { name: 'Establishment', href: 'https://jmc.jk.gov.in/establishment.aspx' },
    { name: 'Electric', href: 'https://jmc.jk.gov.in/electric.aspx' },
    { name: 'Civil Works', href: 'https://jmc.jk.gov.in/developwork.aspx' },
    { name: 'UEED', href: 'https://jmc.jk.gov.in/ueed.aspx' },
    { name: 'Census', href: 'https://jmc.jk.gov.in/census.aspx' },
    { name: 'Revenue', href: 'https://jmc.jk.gov.in/taxassessment.aspx' },
    { name: 'Building', href: 'https://jmc.jk.gov.in/PermissionForm.aspx' },
    { name: 'Accounts', href: 'https://jmc.jk.gov.in/accounts.aspx' },
    { name: 'Transport', href: 'https://jmc.jk.gov.in/transport.aspx' },
    { name: 'Legal', href: 'https://jmc.jk.gov.in/legal.aspx' },
    { name: 'Veterinary', href: 'https://jmc.jk.gov.in/veterinary.aspx' },
  ] },
  { name: 'Orders & Circulars', to: '/notices', hasDropdown: true, dropdown: [
    { name: 'Public Notices', to: '/notices' },
    { name: 'Tenders', to: '/notices' },
    { name: 'Council Updates', to: '/notices' },
    { name: 'Smart City', to: '/smart-city' },
    { name: 'Swachh Mission', to: '/swachh-mission' },
    { name: 'Development Works', to: '/development-works' },
  ] },
  { name: 'Tenders', href: 'https://jmc.jk.gov.in/tenders.aspx' },
  { name: 'RTI', to: '/rti', hasDropdown: true, dropdown: [
    { name: 'Disclosure of information Under Sec 4 of RTI Act.', href: 'https://jmc.jk.gov.in/RTI.aspx' },
    { name: "Details of APIO's/PIO/FAA of JMC.", to: '/rti' },
    { name: 'RTI ACT 2005', href: 'https://rtionline.gov.in/' },
  ] },
  { name: 'Contact Us', to: '/contact' },
  { name: 'Ex Municipal Councillor', href: 'https://jmc.jk.gov.in/wardcouncillor.aspx', hasDropdown: true, dropdown: [
    { name: 'Councillor Details', href: 'https://jmc.jk.gov.in/wardcouncillor.aspx' },
  ] },
]

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const location = useLocation()

  const isActive = (to) => to && to !== '#' && location.pathname === to.split('#')[0]

  const subLinkClass = 'block px-4 py-2 text-[#003366] hover:bg-[#FF6600] hover:text-white text-sm leading-snug'
  const mobileSubLinkClass = 'block px-6 py-2.5 text-gray-300 hover:bg-[#FF6600] hover:text-white text-sm leading-snug border-b border-white/10 last:border-0'

  return (
    <nav className="bg-[#003366] sticky top-0 z-50 shadow-md" style={{ borderBottom: '3px solid #FF6600' }}>
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-3"
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileDropdown(null) }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-[#003366] z-50 w-full md:w-auto max-h-[75vh] md:max-h-none overflow-y-auto md:overflow-visible`}>
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative group border-b border-white/10 md:border-0"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Item row */}
                <div className="flex items-stretch">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center px-4 py-3 text-white text-sm font-medium hover:bg-[#FF6600] transition-colors"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <svg className="hidden md:inline w-3 h-3 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={item.to || '/'}
                      onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                      className={`flex-1 flex items-center px-4 py-3 text-white text-sm font-medium hover:bg-[#FF6600] transition-colors ${isActive(item.to) ? 'bg-[#FF6600]' : ''}`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <svg className="hidden md:inline w-3 h-3 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  )}
                  {/* Mobile-only expand button */}
                  {item.hasDropdown && (
                    <button
                      className="md:hidden px-4 text-white hover:bg-[#FF6600] transition-colors border-l border-white/20 flex items-center"
                      onClick={() => setMobileDropdown(d => d === idx ? null : idx)}
                      aria-label="Toggle submenu"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Desktop dropdown (hover, absolute) */}
                {item.hasDropdown && openDropdown === idx && (
                  <ul className="hidden md:block absolute left-0 top-full w-[220px] bg-white shadow-lg rounded-b z-50 py-1 border-t-2 border-[#FF6600]">
                    {item.dropdown.map((sub, subIdx) => (
                      <li key={subIdx} className={subIdx !== 0 ? 'border-t border-gray-100' : ''}>
                        {sub.href ? (
                          <a href={sub.href} target="_blank" rel="noopener noreferrer" className={subLinkClass}>{sub.name}</a>
                        ) : (
                          <Link to={sub.to} className={subLinkClass}>{sub.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mobile dropdown (click, inline) */}
                {item.hasDropdown && mobileDropdown === idx && (
                  <ul className="md:hidden bg-[#002255]">
                    {item.dropdown.map((sub, subIdx) => (
                      <li key={subIdx}>
                        {sub.href ? (
                          <a href={sub.href} target="_blank" rel="noopener noreferrer" className={mobileSubLinkClass}>{sub.name}</a>
                        ) : (
                          <Link to={sub.to} onClick={() => setMobileMenuOpen(false)} className={mobileSubLinkClass}>{sub.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search */}
          <button className="text-white p-3 hover:bg-[#FF6600] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
