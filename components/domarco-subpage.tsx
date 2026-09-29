'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { logo } from './domarco-data'

export function DomarcoSubpageHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#27282b] bg-[#0a0a0b] text-[#f7fbff]">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="relative block w-[178px] pb-2 max-[700px]:w-[min(44vw,140px)] max-[700px]:pb-0">
          <img src={logo} alt="DOMARCO Prensas Hidráulicas" className="block w-full h-auto screen transition-transform duration-300 hover:-translate-y-[1px]" />
        </Link>
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[.2em] lg:flex">
          <Link href="/historia" className="relative text-[#b8b9bc] py-2 px-0 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#7c9fc5] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Nuestra historia</Link>
          <Link href="/prensas" className="relative text-[#b8b9bc] py-2 px-0 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#7c9fc5] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Prensas</Link>
          <Link href="/contacto" className="relative text-[#b8b9bc] py-2 px-0 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#7c9fc5] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Contacto</Link>
        </nav>
        <Link href="/" className="inline-flex items-center gap-[7px] text-[#c2d9e8] text-[10px] max-[700px]:text-[9px] font-bold tracking-[.14em] uppercase hover:text-[#84d2f6] transition-colors">
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
    <main className={`min-h-screen bg-[#f4f4f2] text-[#121315] ${pageClassName}`}>
      <DomarcoSubpageHeader />
      <section className="bg-[#0a0a0b] text-[#f4f4f2] border-b border-[#27282b]">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14">
          <p className="hidden md:block text-[10px] font-bold tracking-[.25em] uppercase text-[#7c9fc5] m-0 mb-3">
            {eyebrow}
          </p>
          <h1 className="mt-0 mb-4 font-[Arial,Helvetica,sans-serif] text-[clamp(2.35rem,4.5vw,3.6rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-[#f4f4f2]">
            {title}<br />
            <span className="text-[#7c9fc5]">{accent}</span>
          </h1>
          <p className="m-0 max-w-[620px] text-base leading-[1.6] text-[#a9aaad]">
            {intro}
          </p>
        </div>
      </section>
      {children}
    </main>
  )
}

export function SubpageCta() {
  return (
    <section className="bg-[#0a0a0b] text-[#f4f4f2] border-t border-[#27282b]">
      <div className="mx-auto flex flex-col min-[701px]:flex-row min-[701px]:items-center justify-between gap-8 min-[701px]:gap-12 max-w-[1480px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="max-w-[430px]">
          <p className="text-[10px] font-bold tracking-[.25em] uppercase text-[#7c9fc5] m-0">Contacto DOMARCO</p>
          <h2 className="mt-4 mb-0 text-[#f4f4f2] font-extrabold uppercase leading-[.94] tracking-[-0.05em] text-[clamp(1.95rem,3.4vw,2.85rem)] max-[700px]:text-[clamp(1.75rem,7.5vw,2.35rem)]">
            ¿Tenés una consulta<br />
            <span className="text-[#7c9fc5]">sobre prensas?</span>
          </h2>
          <p className="mt-5 mb-0 text-[#a9aaad] text-[0.95rem] leading-[1.55]">
            Escribinos y contanos qué necesitás resolver. Te ayudamos a definir el próximo paso.
          </p>
        </div>
        <div className="flex flex-col gap-3 min-w-full min-[701px]:min-w-[260px]">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-between gap-4 px-[18px] py-4 bg-[#7c9fc5] text-[#0a0a0b] text-[10px] font-bold tracking-[.14em] uppercase transition-[transform,background] duration-250 hover:translate-x-[5px]"
          >
            Ir a contacto <ArrowUpRight className="size-4" />
          </Link>
          <a
            href="https://wa.me/5491136912384"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-between gap-4 px-[18px] py-4 border border-[#4a4c50] text-[#f4f4f2] text-[10px] font-bold tracking-[.14em] uppercase transition-[transform,border-color,color] duration-250 hover:translate-x-[5px] hover:border-[#7c9fc5] hover:text-[#7c9fc5]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>

  )
}
