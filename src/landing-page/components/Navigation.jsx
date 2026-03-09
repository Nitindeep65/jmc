
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About JMC', to: '/about', hasDropdown: true, dropdown: [
    { name: 'About JMC', to: '/about' },
    { name: 'History', to: '/about#history' },
    { name: 'Vision & Mission', to: '/about#vision' },
    { name: 'Acts & Rules', to: '/about#acts' }
  ] },
  { name: 'Officials', to: '/officials', hasDropdown: true, dropdown: [
    { name: 'Higher Officials', to: '/officials' },
    { name: 'JMC Officers', to: '/officials#jmc-officers' },
    { name: "Commissioner's Desk", to: '/commissioner' }
  ] },
  { name: 'E-Governance', to: '/egov', hasDropdown: true, dropdown: [
    { name: 'E-Governance Portal', to: '/egov' },
    { name: 'Online Services', to: '/services' },
    { name: 'Online Payment', href: 'https://jmc.jk.gov.in/online-payment.html' },
    { name: 'PDD E-Services', href: 'https://jmc.jk.gov.in/pddeservices.html' }
  ] },
  { name: 'Notices', to: '/notices', hasDropdown: true, dropdown: [
    { name: 'Public Notices', to: '/notices' },
    { name: 'Tenders', to: '/notices#tenders' },
    { name: 'Council Updates', to: '/notices#council' }
  ] },
  { name: 'Smart City', to: '/smart-city' },
  { name: 'Dev. Works', to: '/development-works' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Swachh Mission', to: '/swachh-mission' },
  { name: 'RTI', to: '/rti' },
  { name: 'Contact Us', to: '/contact' },
]

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActive = (to) => to && to !== '#' && location.pathname === to.split('#')[0]

  return (
    <nav className="bg-[#003366] sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-[#003366] z-50`}>
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.to || '/'}
                  className={`flex items-center px-4 py-3 text-white text-sm font-medium hover:bg-[#FF6600] transition-colors ${isActive(item.to) ? 'bg-[#FF6600]' : ''}`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.hasDropdown && openDropdown === idx && (
                  <ul className="absolute left-0 top-full min-w-[180px] bg-white shadow-lg rounded-b z-50 py-2">
                    {item.dropdown.map((sub, subIdx) => (
                      <li key={subIdx}>
                        {sub.href ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-[#003366] hover:bg-[#FF6600] hover:text-white text-sm whitespace-nowrap"
                          >
                            {sub.name}
                          </a>
                        ) : (
                          <Link
                            to={sub.to}
                            className="block px-4 py-2 text-[#003366] hover:bg-[#FF6600] hover:text-white text-sm whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>
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
