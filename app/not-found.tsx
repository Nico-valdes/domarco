import Link from 'next/link'
import { ArrowUpRight, Home, Wrench, PhoneCall } from 'lucide-react'
import { DomarcoHeader } from '@/components/domarco-header'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f4f4f2] flex flex-col justify-between">
      <DomarcoHeader />

      <section className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[860px] w-full text-center">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[.25em] text-[#7c9fc5] bg-[#14171d] border border-[#272b32] px-3.5 py-1.5 rounded-full mb-6">
            Error 404 · Enlace no encontrado
          </span>

          <h1 className="font-[Arial,Helvetica,sans-serif] text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[#f4f4f2] m-0">
            Página trasladada<br />
            <span className="text-[#7c9fc5]">o no disponible.</span>
          </h1>

          <p className="mt-6 mx-auto max-w-[560px] text-base leading-[1.6] text-[#a9aaad]">
            Hemos renovado la plataforma digital de <strong>DOMARCO Prensas Hidráulicas</strong>. Si llegaste mediante un enlace antiguo, un marcador o un resultado desactualizado, podés continuar navegando desde estas secciones:
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              href="/"
              className="group p-5 bg-[#121418] border border-[#272a30] transition-[border-color,background] hover:border-[#7c9fc5] hover:bg-[#161a22] flex flex-col justify-between"
            >
              <div>
                <Home className="size-5 text-[#7c9fc5] mb-3" />
                <h2 className="text-sm font-bold uppercase tracking-[.08em] text-[#f4f4f2] m-0">
                  Inicio
                </h2>
                <p className="mt-2 text-xs text-[#95969a] leading-[1.5] m-0">
                  Presentación de fábrica, servicios y catálogo general.
                </p>
              </div>
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[.14em] text-[#7c9fc5] mt-5 group-hover:translate-x-1 transition-transform">
                Ir a inicio <ArrowUpRight className="ml-1 size-3.5" />
              </span>
            </Link>

            <Link
              href="/prensas"
              className="group p-5 bg-[#121418] border border-[#272a30] transition-[border-color,background] hover:border-[#7c9fc5] hover:bg-[#161a22] flex flex-col justify-between"
            >
              <div>
                <Wrench className="size-5 text-[#7c9fc5] mb-3" />
                <h2 className="text-sm font-bold uppercase tracking-[.08em] text-[#f4f4f2] m-0">
                  Prensas y Videos
                </h2>
                <p className="mt-2 text-xs text-[#95969a] leading-[1.5] m-0">
                  Ensayos de bancos de prueba, cilindros y abrochadoras.
                </p>
              </div>
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[.14em] text-[#7c9fc5] mt-5 group-hover:translate-x-1 transition-transform">
                Ver máquinas <ArrowUpRight className="ml-1 size-3.5" />
              </span>
            </Link>

            <Link
              href="/contacto"
              className="group p-5 bg-[#121418] border border-[#272a30] transition-[border-color,background] hover:border-[#7c9fc5] hover:bg-[#161a22] flex flex-col justify-between"
            >
              <div>
                <PhoneCall className="size-5 text-[#7c9fc5] mb-3" />
                <h2 className="text-sm font-bold uppercase tracking-[.08em] text-[#f4f4f2] m-0">
                  Contacto directo
                </h2>
                <p className="mt-2 text-xs text-[#95969a] leading-[1.5] m-0">
                  Consultas por WhatsApp, cotizaciones y asistencia técnica.
                </p>
              </div>
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[.14em] text-[#7c9fc5] mt-5 group-hover:translate-x-1 transition-transform">
                Contactar <ArrowUpRight className="ml-1 size-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2.5 border-t border-[#27282b] bg-[#0a0a0b] px-[18px] py-6 text-[9px] uppercase leading-[1.4] tracking-[.15em] text-white/45 min-[701px]:flex-row min-[701px]:justify-between min-[701px]:gap-4 min-[701px]:px-[6vw] min-[701px]:py-[25px] min-[701px]:text-[10px]">
        <span className="text-[#7c9fc5]">DOMARCO / PRENSAS HIDRÁULICAS</span>
        <span>Ingeniería · fabricación · servicio técnico</span>
      </footer>
    </main>
  )
}
