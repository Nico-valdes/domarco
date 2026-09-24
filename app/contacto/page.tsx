'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, ArrowUpRight, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { DomarcoSubpage } from '@/components/domarco-subpage'

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
    icon: MessageCircle,
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
      <section className="contact-page-section contact-page-redesign">
        <div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-8 sm:px-6 sm:py-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-12 lg:py-24">
          <div className="contact-page-info">
            <p className="blue-kicker">Datos de contacto</p>
            <h2 className="section-title">Formas de<br /><span>contactarnos.</span></h2>
            <p>Podés enviarnos tu consulta por formulario, WhatsApp o correo electrónico. Te respondemos para entender la necesidad y definir el próximo paso.</p>

            {/* Botones de contacto horizontales, elegantes y minimalistas */}
            <div className="contact-actions-list" aria-label="Canales directos de contacto">
              {contactChannels.map((channel) => {
                const IconComponent = channel.icon
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer' : undefined}
                    className="contact-action-row"
                  >
                    <div className="contact-row-main">
                      <span className="contact-row-icon">
                        <IconComponent className="size-4" />
                      </span>
                      <div className="contact-row-copy">
                        <span className="contact-row-label">{channel.label}</span>
                        <span className="contact-row-subtext">{channel.subtext}</span>
                      </div>
                    </div>
                    <div className="contact-row-arrow-box">
                      <ArrowRight className="contact-row-arrow size-4" />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Acciones auxiliares minimalistas */}
            <div className="contact-aux-links">
              <a href="#formulario" className="contact-aux-link">
                Completar formulario ↓
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="contact-aux-link"
              >
                <InstagramIcon className="size-3.5" /> Instagram
              </a>
            </div>
          </div>

          <form id="formulario" className="contact-form" onSubmit={handleSubmit}>
            <p className="blue-kicker">Formulario de contacto</p>
            <label>
              Nombre
              <input name="name" required placeholder="Tu nombre o empresa" />
            </label>
            <label>
              Email
              <input type="email" name="email" required placeholder="tu@email.com" />
            </label>
            <label>
              Consulta
              <textarea name="message" required rows={3} placeholder="¿Qué prensas o trabajo necesitás cotizar?" />
            </label>
            <button type="submit" className="blue-button">
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
              <p className="contact-form-success">
                Gracias por contactarte. Te responderemos a la brevedad.
              </p>
            )}
          </form>
        </div>
      </section>
    </DomarcoSubpage>
  )
}
