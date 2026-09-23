'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { logo } from './domarco-data'

export function DomarcoHeader() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-4 lg:px-12">
        <a href="#inicio" className="header-logo">
          <img src={logo} alt="DOMARCO Prensas Hidráulicas" />
        </a>
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[.2em] lg:flex">
          <a href="#servicios" className="header-link">Servicios</a>
          <a href="/prensas" className="header-link">Prensas</a>
          <a href="/historia" className="header-link">Nuestra historia</a>
          <a href="/contacto" className="header-link">Contacto</a>
        </nav>
        <button
          className="lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="/prensas" onClick={closeMenu}>Prensas</a>
          <a href="/historia" onClick={closeMenu}>Nuestra historia</a>
          <a href="/contacto" onClick={closeMenu}>Contacto</a>
        </nav>
      )}
    </header>
  )
}
