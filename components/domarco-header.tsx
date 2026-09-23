'use client'

import { ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { logo } from './domarco-data'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
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
    <header className="site-header">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-4 py-2.5 sm:px-6 sm:py-4 lg:px-12">
        <a href="#inicio" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="DOMARCO Prensas Hidráulicas" />
        </a>
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[.2em] lg:flex">
          <a href="#servicios" className="header-link">Servicios</a>
          <a href="/prensas" className="header-link">Prensas</a>
          <a href="/historia" className="header-link">Nuestra historia</a>
          <a href="/contacto" className="header-link">Contacto</a>
        </nav>
        <button
          className="header-mobile-toggle lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav-menu" className="mobile-nav lg:hidden" aria-label="Navegación móvil">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-item"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ChevronRight className="mobile-nav-arrow" />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
