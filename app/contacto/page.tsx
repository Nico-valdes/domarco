'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { DomarcoSubpage } from '@/components/domarco-subpage'

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
        <div className="mx-auto grid max-w-[1480px] gap-10 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
          <div className="contact-page-info">
            <p className="blue-kicker">Datos de contacto</p>
            <h2 className="section-title">Formas de<br /><span>contactarnos.</span></h2>
            <p>Podés enviarnos tu consulta por formulario, WhatsApp o correo electrónico. Te respondemos para entender la necesidad y definir el próximo paso.</p>
            <div className="contact-details">
              <a href="https://wa.me/5491136912384" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> WhatsApp</a>
              <a href="mailto:info@domarco.com.ar">info@domarco.com.ar</a>
              <a href="tel:+5491136912384">+54 9 11 3691-2384</a>
              <span>Av. Centenario 3615 · Quilmes, Buenos Aires</span>
            </div>
            <div className="contact-socials"><a href="#formulario">Enviar consulta</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></div>
          </div>
          <form id="formulario" className="contact-form" onSubmit={handleSubmit}>
            <p className="blue-kicker">Formulario de contacto</p>
            <label>Nombre<input name="name" required placeholder="Tu nombre" /></label>
            <label>Email<input type="email" name="email" required placeholder="tu@email.com" /></label>
            <label>Consulta<textarea name="message" required rows={5} placeholder="¿Qué necesitás resolver?" /></label>
            <button type="submit" className="blue-button">{sent ? 'Consulta preparada' : 'Enviar consulta'} <ArrowUpRight className="ml-2 size-4" /></button>
          </form>
        </div>
      </section>
    </DomarcoSubpage>
  )
}
