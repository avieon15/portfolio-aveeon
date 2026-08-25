import { useState } from 'react'
import logo from '../assets/logo.png'

const menu = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      
      {/* Isi navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo di kiri */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold leading-none text-slate-400">Aveeon</span>
        </div>
       
        {/* Menu di kanan — hanya muncul di layar besar */}
        <ul className="hidden gap-8 md:flex">
          {menu.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="rounded-md text-sm font-medium text-slate-400 transition-colors hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol hamburger — hanya muncul di HP */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-md text-slate-400 transition-colors hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

      </div>

      {/* Menu mobile — muncul saat tombol hamburger diklik */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-slate-800 bg-slate-900 px-4 py-4 sm:px-6 md:hidden">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="rounded-md text-left text-sm font-medium text-slate-400 transition-colors hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {item}
            </button>
          ))}
        </div>
      )}

    </nav>
  )
}