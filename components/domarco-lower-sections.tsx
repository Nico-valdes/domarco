import { ArrowUpRight, ChevronRight, Phone } from 'lucide-react'
import { faqs, processSteps } from './domarco-data'

export function DomarcoProcess() {
  return (
    <section className="bg-[#0b2b50] text-[#f4f4f2]">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 items-end gap-6 min-[701px]:grid-cols-[1.1fr_0.9fr] min-[701px]:gap-14">
          <div>
            <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[.25em] text-[#84d2f6]">
              Cómo lo hacemos
            </p>
            <h2 className="font-['Arial',sans-serif] text-[clamp(2.4rem,4.2vw,4.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              Del desafío a la<br />
              <span className="text-[#8fb4da]">solución en marcha.</span>
            </h2>
          </div>
          <p className="mb-1.5 max-w-[360px] text-[15px] leading-relaxed text-[#c3d0de]">
            Un proceso claro, técnico y cercano para que cada decisión tenga un respaldo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 border-t border-white/30 min-[701px]:mt-[72px] min-[701px]:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.no}
              className="flex min-h-[220px] flex-col py-[18px] pr-3.5 max-[700px]:border-r max-[700px]:border-white/30 max-[700px]:even:border-r-0 max-[700px]:even:pl-3.5 min-[701px]:min-h-[250px] min-[701px]:border-r min-[701px]:border-white/30 min-[701px]:py-6 min-[701px]:pr-[22px] min-[701px]:[&:not(:first-child)]:pl-[22px] min-[701px]:last:border-r-0"
            >
              <span className="font-mono text-[11px] leading-none tracking-[.15em] text-[#8fb4da]">
                {step.no}
              </span>
              <h3 className="mt-[38px] font-['Arial',sans-serif] text-[1.35rem] font-bold uppercase leading-none tracking-[-0.04em] text-white min-[701px]:mt-14 min-[701px]:text-[clamp(1.5rem,2.3vw,2.4rem)]">
                {step.title}
              </h3>
              <p className="mt-3.5 max-w-[230px] text-[0.86rem] leading-[1.55] text-[#c3d0de] min-[701px]:text-[0.92rem]">
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
  return (
    <section className="bg-[#f4f4f2] text-[#121315]">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-28 min-[961px]:grid min-[961px]:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.6fr)] min-[961px]:items-start min-[961px]:gap-[clamp(48px,6vw,84px)]">
        <div className="mb-10 min-w-0 min-[701px]:mb-[58px] min-[961px]:sticky min-[961px]:top-[100px] min-[961px]:mb-0">
          <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[.25em] text-[#315c8d]">
            Preguntas frecuentes
          </p>
          <h2 className="font-['Arial',sans-serif] text-[clamp(2rem,2.8vw,3.25rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-[#121315]">
            Lo importante,<br />
            <span className="text-[#315c8d]">sin vueltas.</span>
          </h2>
        </div>
        <div className="w-full border-t border-[#c8c9ca]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#c8c9ca]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.05rem] font-medium tracking-[-0.015em] text-[#121315] transition-colors duration-200 hover:text-[#315c8d] group-open:text-[#315c8d] min-[701px]:py-6 min-[701px]:text-[clamp(1.05rem,1.8vw,1.45rem)] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <ChevronRight className="size-5 shrink-0 text-[#315c8d] transition-transform duration-250 ease-out group-open:rotate-90" />
              </summary>
              <p className="max-w-[700px] pb-6 pr-0 text-[0.94rem] leading-[1.65] text-[#414347] min-[701px]:pr-[52px] min-[701px]:text-[0.95rem]">
                {faq.answer}
              </p>
            </details>
          ))}
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
              ¿Tenés una consulta<br />
              <span className="text-[#7c9fc5]">sobre prensas?</span>
            </h2>
            <p className="mt-5 max-w-[430px] text-[0.95rem] leading-[1.55] text-[#a9aaad]">
              Escribinos y contanos qué necesitás resolver. Te ayudamos a definir el próximo paso.
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
              <span className="inline-flex items-center gap-2.5">
                <Phone className="size-4" /> Escribir por WhatsApp
              </span>
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

