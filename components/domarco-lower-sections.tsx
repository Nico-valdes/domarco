'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { faqs, processSteps } from './domarco-data'

function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.01 2.002c-7.72 0-14 6.279-14 14 0 2.47.644 4.877 1.867 7L2 30l7.207-1.85a13.94 13.94 0 006.803 1.764h.006c7.72 0 14-6.279 14-14 0-3.74-1.456-7.257-4.102-9.902A13.916 13.916 0 0016.01 2.002zm0 25.645h-.005a11.584 11.584 0 01-5.91-1.614l-.424-.252-4.39 1.127 1.173-4.22-.276-.44a11.605 11.605 0 01-1.782-6.246c0-6.408 5.215-11.622 11.625-11.622 3.104 0 6.022 1.21 8.216 3.405a11.55 11.55 0 013.403 8.218c0 6.409-5.215 11.624-11.624 11.624zm6.37-8.705c-.349-.175-2.065-1.019-2.385-1.135-.32-.116-.553-.175-.785.175-.233.35-.901 1.135-1.105 1.368-.204.233-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.925-1.739-2.068-1.943-2.417-.203-.35-.022-.539.153-.713.157-.157.349-.407.523-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.611-.087-.175-.785-1.892-1.076-2.592-.284-.68-.572-.588-.785-.599l-.67-.012c-.232 0-.61.087-.93.437-.32.35-1.22 1.194-1.22 2.912s1.25 3.378 1.424 3.611c.174.233 2.46 3.757 5.96 5.267.832.36 1.482.574 1.989.735.836.265 1.597.228 2.198.138.67-.1 2.065-.844 2.356-1.66.291-.815.291-1.514.204-1.66-.087-.145-.32-.233-.669-.407z" />
    </svg>
  )
}

export function DomarcoProcess() {
  return (
    <section className="bg-[#0b2b50] text-[#f4f4f2]">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 items-end gap-6 min-[701px]:grid-cols-[1.1fr_0.9fr] min-[701px]:gap-14">
          <div>
            <h2 className="font-['Arial',sans-serif] text-[clamp(2.1rem,6.8vw,2.75rem)] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-white min-[701px]:text-[clamp(2.4rem,4.2vw,4.2rem)] min-[701px]:leading-[0.95] min-[701px]:tracking-[-0.04em]">
              Cómo trabajamos<br />
              <span className="text-[#8fb4da]">en cada proyecto.</span>
            </h2>
          </div>
          <p className="mb-1.5 max-w-[360px] text-[15px] font-normal leading-relaxed text-[#c3d0de]">
            Un proceso claro, técnico y cercano para que cada decisión tenga un respaldo.
          </p>
        </div>
        <div className="mt-8 border-t border-white/20 min-[701px]:mt-[72px] min-[701px]:grid min-[701px]:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.no}
              className="flex flex-col border-b border-white/20 py-5 ast:border-b-0 min-[701px]:min-h-[250px] min-[701px]:border-b-0 min-[701px]:border-r min-[701px]:border-white/20 min-[701px]:py-6 min-[701px]:pr-[22px] min-[701px]:[&:not(:first-child)]:pl-[22px] min-[701px]:last:border-r-0"
            >
              <span className="font-mono text-[11px] font-medium leading-none tracking-[.2em] text-[#8fb4da]">
                {step.no}
              </span>
              <h3 className="mt-3.5 text-[1.15rem] font-normal uppercase leading-snug tracking-[0.01em] text-white min-[701px]:mt-14 min-[701px]:text-[clamp(1.35rem,2.1vw,2.2rem)] min-[701px]:tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.92rem] font-normal leading-[1.6] text-[#c3d0de] min-[701px]:mt-3.5 min-[701px]:max-w-[230px]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DomarcoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#f4f4f2] text-[#121315]">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-28 min-[961px]:grid min-[961px]:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.6fr)] min-[961px]:items-start min-[961px]:gap-[clamp(48px,6vw,84px)]">
        <div className="relative mb-10 min-w-0 min-[701px]:mb-[58px] min-[961px]:sticky min-[961px]:top-[100px] min-[961px]:mb-0">
          <h2 className="relative z-10 font-['Arial',sans-serif] text-[clamp(2rem,2.8vw,3.25rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-[#121315]">
            Preguntas<br />
            <span className="text-[#315c8d]">frecuentes.</span>
          </h2>

          {/* Detalle sutil en celestito */}
          <div className="relative z-10 mt-6 flex items-center gap-2 text-[10.5px] font-mono tracking-[.18em] uppercase text-[#315c8d]">
            <span className="size-1.5 rounded-full bg-[#84d2f6] shadow-[0_0_8px_#84d2f6]" />
            <span>Asesoramiento de fábrica</span>
          </div>

          <p className="relative z-10 mt-2 max-w-[280px] text-xs leading-relaxed text-[#5e636e]">
            Criterios de fabricación, plazos y modalidades de asistencia técnica.
          </p>

          <a
            href="#contacto"
            className="group relative z-10 mt-5 inline-flex items-center gap-1.5 border-b border-[#315c8d]/60 pb-0.5 font-mono text-[11px] font-semibold uppercase tracking-[.12em] text-[#315c8d] transition-all duration-200 hover:border-[#121315] hover:text-[#121315]"
          >
            <span>Hacer una consulta puntual</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="w-full border-t border-[#c8c9ca]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <details
                key={faq.question}
                open={isOpen}
                className="group border-b border-[#c8c9ca]"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenIndex(isOpen ? null : index)
                  }}
                  className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.05rem] font-medium tracking-[-0.015em] text-[#121315] transition-colors duration-200 hover:text-[#315c8d] group-open:text-[#315c8d] min-[701px]:py-6 min-[701px]:text-[clamp(1.05rem,1.8vw,1.45rem)] [&::-webkit-details-marker]:hidden"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className="size-5 shrink-0 text-[#315c8d] transition-transform duration-250 ease-out group-open:rotate-90" />
                </summary>
                <p className="max-w-[700px] pb-6 pr-0 text-[0.94rem] leading-[1.65] text-[#414347] min-[701px]:pr-[52px] min-[701px]:text-[0.95rem]">
                  {faq.answer}
                </p>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function DomarcoContact() {
  return (
    <>
      <section id="contacto" className="border-t border-[#27282b] bg-[#0a0a0b] text-[#f4f4f2]">
        <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-8 px-4 py-12 sm:px-6 sm:py-16 min-[701px]:flex-row min-[701px]:items-center min-[701px]:gap-12 lg:px-12 lg:py-20">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#7c9fc5]">
              Contacto DOMARCO
            </p>
            <h2 className="mt-4 font-['Arial',sans-serif] text-[clamp(2.2rem,5vw,5rem)] font-bold uppercase leading-[.92] tracking-[-0.06em] text-[#f4f4f2] max-[700px]:text-[clamp(1.85rem,8.2vw,2.45rem)] max-[700px]:leading-[.95] max-[700px]:tracking-[-0.055em]">
              ¿BUSCÁS FABRICAR O<br />
              <span className="text-[#7c9fc5]">REPARAR UNA PRENSA?</span>
            </h2>
            <p className="mt-5 max-w-[430px] text-[0.95rem] leading-[1.55] text-[#a9aaad]">
              Contanos qué pieza fabricás o qué máquina necesitás intervenir. Te asesoramos directamente desde fábrica.
            </p>
            <p className="mt-6 text-[10px] uppercase leading-[1.4] tracking-[.08em] text-[#7c9fc5]">
              Av. Centenario 3615 · Quilmes, Buenos Aires
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 min-[701px]:w-auto min-[701px]:min-w-[260px]">
            <a
              href="/contacto"
              className="inline-flex items-center justify-between gap-4 bg-[#7c9fc5] px-[18px] py-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#0a0a0b] transition-transform duration-250 hover:translate-x-[5px]"
            >
              Ir a contacto <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://wa.me/5491136912384"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-4 border border-[#4a4c50] px-[18px] py-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#f4f4f2] transition-colors transition-transform duration-250 hover:translate-x-[5px] hover:border-[#7c9fc5] hover:text-[#7c9fc5]"
            >
              Escribir por WhatsApp <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2.5 border-t border-[#27282b] bg-[#0a0a0b] px-[18px] py-6 text-[9px] uppercase leading-[1.4] tracking-[.15em] text-white/45 min-[701px]:flex-row min-[701px]:justify-between min-[701px]:gap-4 min-[701px]:px-[6vw] min-[701px]:py-[25px] min-[701px]:text-[10px]">
        <span className="text-[#7c9fc5]">DOMARCO / PRENSAS HIDRÁULICAS</span>
        <span>Ingeniería · fabricación · servicio técnico</span>
      </footer>
    </>
  )
}

