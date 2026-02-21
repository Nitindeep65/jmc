
import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About JMC', href: '#', hasDropdown: true, dropdown: [
    { name: 'History', href: '#' },
    { name: 'Vision & Mission', href: '#' },
    { name: 'Organizational Structure', href: '#' }
  ] },
  { name: 'Governing Bodies', href: '#', hasDropdown: true, dropdown: [
    { name: 'Mayor', href: '#' },
    { name: 'Deputy Mayor', href: '#' },
    { name: 'Corporators', href: '#' }
  ] },
  { name: 'E-Governance', href: '#', hasDropdown: true, dropdown: [
    { name: 'Online Services', href: '#' },
    { name: 'Citizen Charter', href: '#' }
  ] },
  { name: 'Departments', href: '#', hasDropdown: true, dropdown: [
    { name: 'Health', href: '#' },
    { name: 'Engineering', href: '#' },
    { name: 'Revenue', href: '#' }
  ] },
  { name: 'Orders & Circulars', href: '#' },
  { name: 'Tenders', href: '#' },
  { name: 'RTI', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Ex Municipal Councillor', href: '#' }
]

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null)
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
                <a
                  href={item.href}
                  className="flex items-center px-4 py-3 text-white text-sm font-medium hover:bg-[#FF6600] transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.hasDropdown && openDropdown === idx && (
                  <ul className="absolute left-0 top-full min-w-[180px] bg-white shadow-lg rounded-b z-50 py-2">
                    {item.dropdown.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 text-[#003366] hover:bg-[#FF6600] hover:text-white text-sm whitespace-nowrap"
                        >
                          {sub.name}
                        </a>
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
