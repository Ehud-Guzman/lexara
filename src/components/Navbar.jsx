import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Advocates', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative text-sm tracking-[0.12em] uppercase font-medium transition-all duration-300 ${
      isActive
        ? 'text-[#b28a3b]'
        : 'text-[#4f5563] hover:text-[#b28a3b]'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#fbf8f2]/95 backdrop-blur-md border-b border-[#d7c4a1] py-3 shadow-sm'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#9b7630]">
              LEXARA
            </span>
            <span className="text-[11px] tracking-[0.35em] text-[#6a6f7b] uppercase mt-1">
              Advocates & Solicitors
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative group">
                    {label}

                    {/* Underline animation */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[1px] bg-[#b28a3b] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-block text-sm tracking-[0.12em] uppercase px-6 py-3 bg-[#9b7630] text-white hover:bg-[#7d5f27] transition-all duration-300 font-medium shadow-sm"
          >
            Request Consultation
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#1f2430] focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbf8f2]/95 backdrop-blur-md flex flex-col">
          
          {/* Spacer (navbar height) */}
          <div className="h-24" />

          <div className="px-6 flex flex-col flex-1">
            
            {/* Links */}
            <div className="flex flex-col gap-8">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg tracking-[0.12em] uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-[#b28a3b] font-semibold'
                        : 'text-[#2a2f3a] hover:text-[#b28a3b]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-[#d7c4a1]" />

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.12em] uppercase px-6 py-4 bg-[#9b7630] text-white text-center font-medium"
            >
              Request Consultation
            </Link>

            {/* Bottom Info */}
            <div className="mt-auto pt-10 text-center text-xs text-[#7a7f89] tracking-[0.15em] uppercase">
              Nairobi · Kenya
            </div>
          </div>
        </div>
      )}
    </>
  )
}