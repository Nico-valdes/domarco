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

function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.01 2.002c-7.72 0-14 6.279-14 14 0 2.47.644 4.877 1.867 7L2 30l7.207-1.85a13.94 13.94 0 006.803 1.764h.006c7.72 0 14-6.279 14-14 0-3.74-1.456-7.257-4.102-9.902A13.916 13.916 0 0016.01 2.002zm0 25.645h-.005a11.584 11.584 0 01-5.91-1.614l-.424-.252-4.39 1.127 1.173-4.22-.276-.44a11.605 11.605 0 01-1.782-6.246c0-6.408 5.215-11.622 11.625-11.622 3.104 0 6.022 1.21 8.216 3.405a11.55 11.55 0 013.403 8.218c0 6.409-5.215 11.624-11.624 11.624zm6.37-8.705c-.349-.175-2.065-1.019-2.385-1.135-.32-.116-.553-.175-.785.175-.233.35-.901 1.135-1.105 1.368-.204.233-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.925-1.739-2.068-1.943-2.417-.203-.35-.022-.539.153-.713.157-.157.349-.407.523-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.611-.087-.175-.785-1.892-1.076-2.592-.284-.68-.572-.588-.785-.599l-.67-.012c-.232 0-.61.087-.93.437-.32.35-1.22 1.194-1.22 2.912s1.25 3.378 1.424 3.611c.174.233 2.46 3.757 5.96 5.267.832.36 1.482.574 1.989.735.836.265 1.597.228 2.198.138.67-.1 2.065-.844 2.356-1.66.291-.815.291-1.514.204-1.66-.087-.145-.32-.233-.669-.407z" />
    </svg>
  )
}

export function SubpageCta() {
  return (
    <section className="bg-[#0a0a0b] text-[#f4f4f2] border-t border-[#27282b]">
      <div className="mx-auto flex flex-col min-[701px]:flex-row min-[701px]:items-center justify-between gap-8 min-[701px]:gap-12 max-w-[1480px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[.25em] uppercase text-[#7c9fc5] m-0">Contacto DOMARCO</p>
          <h2 className="mt-4 mb-0 font-['Arial',sans-serif] text-[clamp(2.2rem,5vw,5rem)] font-bold uppercase leading-[.92] tracking-[-0.06em] text-[#f4f4f2] max-[700px]:text-[clamp(1.85rem,8.2vw,2.45rem)] max-[700px]:leading-[.95] max-[700px]:tracking-[-0.055em]">
            ¿Tenés una consulta<br />
            <span className="text-[#7c9fc5]">sobre prensas?</span>
          </h2>
          <p className="mt-5 mb-0 max-w-[430px] text-[#a9aaad] text-[0.95rem] leading-[1.55]">
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
            Escribir por WhatsApp <WhatsAppIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>

  )
}
