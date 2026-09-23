import { ArrowUpRight, ChevronRight, Phone } from 'lucide-react'
import { faqs, processSteps } from './domarco-data'

export function DomarcoProcess() {
  return (
    <section className="process-section">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="process-heading"><div><p className="blue-kicker">Cómo lo hacemos</p><h2 className="section-title">Del desafío a la<br /><span>solución en marcha.</span></h2></div><p>Un proceso claro, técnico y cercano para que cada decisión tenga un respaldo.</p></div>
        <div className="process-grid">{processSteps.map((step) => <article className="process-step" key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>
  )
}

export function DomarcoFaq() {
  return (
    <section className="faq-section">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="faq-heading"><p className="blue-kicker">Preguntas frecuentes</p><h2 className="section-title">Lo importante,<br /><span>sin vueltas.</span></h2></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.question} className="faq-item"><summary>{faq.question}<ChevronRight className="size-5" /></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  )
}

export function DomarcoContact() {
  return (
    <>
      <section id="contacto" className="contact-section subpage-cta"><div className="subpage-cta-inner mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20"><div className="subpage-cta-copy"><p className="kicker">Contacto DOMARCO</p><h2 className="section-title">¿Tenés una consulta<br /><span>sobre prensas?</span></h2><p>Escribinos y contanos qué necesitás resolver. Te ayudamos a definir el próximo paso.</p><p className="contact-location">Av. Centenario 3615 · Quilmes, Buenos Aires</p></div><div className="subpage-cta-actions"><a href="/contacto" className="subpage-cta-primary">Ir a contacto <ArrowUpRight className="size-4" /></a><a href="https://wa.me/5491136912384" target="_blank" rel="noreferrer" className="subpage-cta-secondary"><Phone className="size-4" /> Escribir por WhatsApp</a></div></div></section>
      <footer className="footer"><span>DOMARCO / PRENSAS HIDRÁULICAS</span><span>Ingeniería · fabricación · servicio técnico</span></footer>
    </>
  )
}
