'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { logo } from './domarco-data'

export function DomarcoSubpageHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="header-logo">
          <img src={logo} alt="DOMARCO Prensas Hidráulicas" />
        </Link>
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[.2em] lg:flex">
          <Link href="/historia" className="header-link">Nuestra historia</Link>
          <Link href="/prensas" className="header-link">Prensas</Link>
          <Link href="/contacto" className="header-link">Contacto</Link>
        </nav>
        <Link href="/" className="header-back-link">
          <ArrowLeft className="size-4" /> Inicio
        </Link>
      </div>
    </header>
  )
}

export function DomarcoSubpage({
  eyebrow,
  title,
  accent,
  intro,
  children,
  pageClassName = '',
}: {
  eyebrow: string
  title: string
  accent: string
  intro: string
  children: ReactNode
  pageClassName?: string
}) {
  return (
    <main className={`domarco-subpage ${pageClassName}`}>
      <DomarcoSubpageHeader />
      <section className="subpage-hero">
        <div className="subpage-hero-inner mx-auto max-w-[1480px] px-6 lg:px-12">
          <p className="kicker">{eyebrow}</p>
          <h1 className="subpage-title">{title}<br /><span>{accent}</span></h1>
          <p className="subpage-intro">{intro}</p>
        </div>
      </section>
      {children}
    </main>
  )
}

export function SubpageCta() {
  return (
    <section className="subpage-cta">
      <div className="subpage-cta-inner mx-auto max-w-[1480px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="subpage-cta-copy">
          <p className="kicker">Contacto DOMARCO</p>
          <h2>¿Tenés una consulta<br /><span>sobre prensas?</span></h2>
          <p>Escribinos y contanos qué necesitás resolver. Te ayudamos a definir el próximo paso.</p>
        </div>
        <div className="subpage-cta-actions">
          <Link href="/contacto" className="subpage-cta-primary">Ir a contacto <ArrowUpRight className="size-4" /></Link>
          <a href="https://wa.me/5491136912384" target="_blank" rel="noreferrer" className="subpage-cta-secondary">Escribir por WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
