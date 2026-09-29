'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, ArrowUpRight, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { DomarcoSubpage } from '@/components/domarco-subpage'

function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.01 2.002c-7.72 0-14 6.279-14 14 0 2.47.644 4.877 1.867 7L2 30l7.207-1.85a13.94 13.94 0 006.803 1.764h.006c7.72 0 14-6.279 14-14 0-3.74-1.456-7.257-4.102-9.902A13.916 13.916 0 0016.01 2.002zm0 25.645h-.005a11.584 11.584 0 01-5.91-1.614l-.424-.252-4.39 1.127 1.173-4.22-.276-.44a11.605 11.605 0 01-1.782-6.246c0-6.408 5.215-11.622 11.625-11.622 3.104 0 6.022 1.21 8.216 3.405a11.55 11.55 0 013.403 8.218c0 6.409-5.215 11.624-11.624 11.624zm6.37-8.705c-.349-.175-2.065-1.019-2.385-1.135-.32-.116-.553-.175-.785.175-.233.35-.901 1.135-1.105 1.368-.204.233-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.925-1.739-2.068-1.943-2.417-.203-.35-.022-.539.153-.713.157-.157.349-.407.523-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.611-.087-.175-.785-1.892-1.076-2.592-.284-.68-.572-.588-.785-.599l-.67-.012c-.232 0-.61.087-.93.437-.32.35-1.22 1.194-1.22 2.912s1.25 3.378 1.424 3.611c.174.233 2.46 3.757 5.96 5.267.832.36 1.482.574 1.989.735.836.265 1.597.228 2.198.138.67-.1 2.065-.844 2.356-1.66.291-.815.291-1.514.204-1.66-.087-.145-.32-.233-.669-.407z" />
    </svg>
  )
}

function InstagramIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const contactChannels = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    subtext: '+54 9 11 3691-2384',
    href: 'https://wa.me/5491136912384',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    subtext: 'info@domarco.com.ar',
    href: 'mailto:info@domarco.com.ar',
    external: false,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    subtext: 'Av. Centenario 3615, Quilmes',
    href: 'https://maps.google.com/?q=Av.+Centenario+3615,+Quilmes,+Buenos+Aires',
    external: true,
  },
]

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <DomarcoSubpage
      eyebrow="Contacto DOMARCO"
      title="Hablemos"
      accent="de tu proyecto."
      intro="Escribinos para consultar por fabricación, reacondicionamiento, prensas usadas o servicio técnico."
      pageClassName="contact-subpage"
    >
      <section className="overflow-hidden bg-[#f4f4f2] text-[#121315]">
        <div className="mx-auto max-w-[1480px] px-6 py-14 sm:py-16 lg:px-12 lg:py-20 max-[700px]:flex max-[700px]:flex-col max-[700px]:gap-12 max-[700px]:pt-12 max-[700px]:pb-16 min-[701px]:grid min-[701px]:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] min-[701px]:items-start min-[701px]:gap-12 lg:gap-16">
          <div className="min-w-0 max-w-full pt-2 max-[700px]:pt-0">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#315c8d]">Datos de contacto</p>
            <h2 className="mt-4 mb-6 font-[Arial,Helvetica,sans-serif] font-extrabold uppercase leading-[.92] tracking-[-0.055em] text-[clamp(2.3rem,3.4vw,3.6rem)] text-[#121315]">
              Formas de<br /><span className="inline text-[#315c8d]">contactarnos.</span>
            </h2>
            <p className="mt-4 max-w-[440px] text-base leading-[1.6] text-[#414347]">
              Podés enviarnos tu consulta por formulario, WhatsApp o correo electrónico. Te respondemos para entender la necesidad y definir el próximo paso.
            </p>

            {/* Botones de contacto horizontales, elegantes y minimalistas */}
            <div className="mt-7 flex w-full max-w-[460px] flex-col gap-3 max-[700px]:max-w-full" aria-label="Canales directos de contacto">
              {contactChannels.map((channel) => {
                const IconComponent = channel.icon
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer' : undefined}
                    className="group relative flex items-center justify-between border border-[#d2d4d5] bg-white p-[14px_18px] shadow-[4px_4px_0_#dce2e7] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#126eb7] hover:bg-[#f7fbff] hover:shadow-[7px_7px_0_#bdd5ea] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#bdd5ea] max-[700px]:p-[12px_14px] max-[700px]:shadow-[3px_3px_0_#dce2e7]"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className="inline-flex size-[38px] shrink-0 items-center justify-center border border-[#bdd5ea] bg-[#edf5fc] text-[#126eb7] transition-all duration-200 group-hover:scale-105 group-hover:border-[#126eb7] group-hover:bg-[#126eb7] group-hover:text-white max-[700px]:size-[34px]">
                        <IconComponent className="size-4" />
                      </span>
                      <div className="flex min-w-0 flex-col gap-0.5">
                        <span className="font-['Arial_Narrow',Arial,sans-serif] text-[13.5px] font-bold uppercase leading-[1.15] tracking-[-0.01em] text-[#092443] transition-colors duration-200 group-hover:text-[#126eb7] max-[700px]:text-[12px]">
                          {channel.label}
                        </span>
                        <span className="truncate font-mono text-[11px] leading-[1.3] tracking-[0.02em] text-[#5c7287] transition-colors duration-200 group-hover:text-[#092443] max-[700px]:text-[10px]">
                          {channel.subtext}
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex size-[30px] shrink-0 items-center justify-center border border-[#d2d4d5] bg-white text-[#315c8d] transition-all duration-200 group-hover:border-[#126eb7] group-hover:bg-[#126eb7] group-hover:text-white max-[700px]:size-[26px]">
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Acciones auxiliares minimalistas */}
            <div className="mt-5 flex flex-wrap items-center gap-4 max-[700px]:gap-3.5">
              <a
                href="#formulario"
                className="inline-flex items-center gap-1.5 border-b border-[#94b4d6] pb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#315c8d] transition-colors duration-200 hover:border-[#1479c9] hover:text-[#1479c9]"
              >
                Completar formulario ↓
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-[#94b4d6] pb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#315c8d] transition-colors duration-200 hover:border-[#1479c9] hover:text-[#1479c9]"
              >
                <InstagramIcon className="size-3.5" /> Instagram
              </a>
            </div>
          </div>

          <form
            id="formulario"
            onSubmit={handleSubmit}
            className="flex min-w-0 max-w-full flex-col gap-6 border border-[#c8c9ca] bg-white p-8 sm:p-10 lg:p-12 shadow-[10px_10px_0_#dfe3e7] max-[700px]:w-full max-[700px]:gap-4 max-[700px]:p-6 max-[700px]:shadow-[6px_6px_0_#dfe3e7]"
          >
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#315c8d] mb-1">Formulario de contacto</p>
            <label className="flex min-w-0 flex-col gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#414347] max-[700px]:text-[9.5px]">
              Nombre
              <input
                name="name"
                required
                placeholder="Tu nombre o empresa"
                className="w-full min-w-0 rounded-none border-0 border-b border-[#b9bdc1] bg-transparent py-3 px-0 font-normal text-base text-[#121315] outline-none transition-colors focus:border-[#315c8d] placeholder:font-normal placeholder:text-[#9ea3a9] max-[700px]:py-2 max-[700px]:text-[15px]"
              />
            </label>
            <label className="flex min-w-0 flex-col gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#414347] max-[700px]:text-[9.5px]">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full min-w-0 rounded-none border-0 border-b border-[#b9bdc1] bg-transparent py-3 px-0 font-normal text-base text-[#121315] outline-none transition-colors focus:border-[#315c8d] placeholder:font-normal placeholder:text-[#9ea3a9] max-[700px]:py-2 max-[700px]:text-[15px]"
              />
            </label>
            <label className="flex min-w-0 flex-col gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#414347] max-[700px]:text-[9.5px]">
              Consulta
              <textarea
                name="message"
                required
                rows={3}
                placeholder="¿Qué prensas o trabajo necesitás cotizar?"
                className="w-full min-w-0 resize-y rounded-none border-0 border-b border-[#b9bdc1] bg-transparent py-3 px-0 font-normal text-base text-[#121315] outline-none transition-colors focus:border-[#315c8d] placeholder:font-normal placeholder:text-[#9ea3a9] max-[700px]:py-2 max-[700px]:text-[15px]"
              />
            </label>
            <button
              type="submit"
              className="mt-3 inline-flex self-start cursor-pointer items-center border-0 bg-[#121315] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#315c8d] max-[700px]:w-full max-[700px]:justify-center"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="mr-2 size-4 text-emerald-300" /> Consulta registrada
                </>
              ) : (
                <>
                  Enviar consulta <ArrowUpRight className="ml-2 size-4" />
                </>
              )}
            </button>
            {sent && (
              <p className="mt-2.5 font-mono text-xs tracking-[0.05em] text-[#0c7e5a]">
                Gracias por contactarte. Te responderemos a la brevedad.
              </p>
            )}
          </form>
        </div>
      </section>
    </DomarcoSubpage>
  )
}
