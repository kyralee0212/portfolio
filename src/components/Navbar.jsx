import { useState } from 'react'
import { imgLogoWhite1 } from '../assets/figmaAssets'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Exploration', href: '#exploration' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-[50px] h-[74px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="relative w-[35px] h-[35px] bg-[#787cde] rounded-[10px] flex items-center justify-center flex-shrink-0">
            <img src={imgLogoWhite1} alt="Logo" className="w-[25px] h-[27px] object-contain" />
          </div>
          <span className="font-['Heebo',sans-serif] font-medium text-[30px] text-black leading-none">Yun Lee</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className="flex flex-col gap-[3px] items-start group"
              >
                <span
                  className="font-['Heebo',sans-serif] font-medium text-[17px] leading-none transition-colors"
                  style={{ color: active === label ? '#787cde' : 'rgba(0,0,0,0.4)' }}
                >
                  {label}
                </span>
                <span
                  className="h-[2px] rounded-full bg-[#787cde] transition-all duration-200"
                  style={{ width: active === label ? '100%' : '0' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="mailto:kyralee0212@gmail.com"
          className="hidden md:flex items-center justify-center h-[43px] px-[40px] rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] whitespace-nowrap"
          style={{ background: 'linear-gradient(11deg, rgb(120,124,222) 20%, rgb(169,203,255) 80%)' }}
        >
          Work with me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => { setActive(label); setMenuOpen(false) }}
              className="font-['Heebo',sans-serif] font-medium text-[17px]"
              style={{ color: active === label ? '#787cde' : 'rgba(0,0,0,0.4)' }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:kyralee0212@gmail.com"
            className="flex items-center justify-center h-[43px] px-8 rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] w-fit"
            style={{ background: 'linear-gradient(11deg, rgb(120,124,222) 20%, rgb(169,203,255) 80%)' }}
          >
            Work with me
          </a>
        </div>
      )}
    </nav>
  )
}
