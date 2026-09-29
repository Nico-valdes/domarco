'use client'

import Link from 'next/link'
import { ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { logo } from './domarco-data'

const navLinks = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/prensas', label: 'Prensas' },
  { href: '/historia', label: 'Nuestra historia' },
  { href: '/contacto', label: 'Contacto' },
]

export function DomarcoHeader() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="relative z-30 border-b border-[#27282b] bg-[#0a0a0b] text-[#f7fbff] max-[700px]:z-[60] max-[700px]:border-[#22252a]">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-4 py-2.5 sm:px-6 sm:py-4 lg:px-12 max-[700px]:min-h-[48px] max-[700px]:px-4 max-[700px]:py-1.5">
        <Link href="/" className="group relative block w-[178px] pb-2 max-[700px]:w-[min(44vw,140px)] max-[700px]:pb-0" onClick={closeMenu}>
          <img
            src={logo}
            alt="DOMARCO Prensas Hidráulicas"
            className="block h-auto w-full mix-blend-screen transition-transform duration-300 group-hover:-translate-y-px group-focus-visible:-translate-y-px"
          />
        </Link>
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[.2em] lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-[#b8b9bc] transition-colors duration-200 hover:text-white focus-visible:text-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-0 after:bg-[#7c9fc5] after:origin-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="grid size-[34px] place-items-center rounded border border-[#2e3238] bg-[#14161a] text-[#b8cee4] transition-colors duration-150 active:border-[#7c9fc5] active:bg-[#1f2329] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav-menu" className="absolute inset-x-0 top-full z-[60] flex w-full flex-col border-b border-[#27282b] bg-[#0d0f12] shadow-[0_16px_36px_rgba(0,0,0,0.7)] lg:hidden" aria-label="Navegación móvil">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex w-full box-border items-center justify-between border-b border-[#1a1d21] bg-[#0d0f12] px-5 py-[15px] text-[11.5px] font-bold uppercase tracking-[.16em] text-[#f0f2f5] no-underline transition-colors duration-150 last:border-b-0 hover:bg-[#16191f] hover:text-[#7c9fc5] active:bg-[#16191f] active:text-[#7c9fc5]"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ChevronRight className="size-[15px] shrink-0 text-[#5c6d82] transition-all duration-150 group-hover:translate-x-[3px] group-hover:text-[#7c9fc5] group-active:translate-x-[3px] group-active:text-[#7c9fc5]" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
