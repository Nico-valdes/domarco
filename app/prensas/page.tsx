import { ArrowUpRight } from 'lucide-react'
import { DomarcoSubpage, SubpageCta } from '@/components/domarco-subpage'

const videos = [
  [
    'jmumJEFck_g',
    'Reacondicionamiento · Prensa 120 Tn',
    'Recuperación integral, modernización del circuito hidráulico y automatización para conformado y embutido de chapa en una prensa restaurada a nuevo.',
  ],
  [
    '0HQT5hCiLeU',
    'Fabricación · Prensa columna PCH 120',
    'Estructura de 4 columnas rectificadas de 120 toneladas diseñada por DOMARCO para ciclos exigentes de moldeo, embutido y estampado industrial.',
  ],
  [
    'G4DLQmULfWM',
    'Fabricación · Prensa de garganta PG 20',
    'Modelo de garganta abierta de 20 toneladas para operaciones ágiles de punzonado, corte, curvado y matricería con acceso libre frontal y lateral.',
  ],
  [
    'h8sVmZQrr3k',
    'Puesta a punto · Prensa hidráulica',
    'Ensayos en banco de pruebas, regulación de presiones y chequeo del pupitre de comando y tablero eléctrico en una prensa pesada de 4 columnas.',
  ],
  [
    '9dLmcQ4i3dI',
    'Abrochadora de mangueras industrial',
    'Prensado continuo de terminales de alta presión, con capacidad de compresión de hasta 500 toneladas y un régimen productivo de 200 piezas por hora.',
  ],
  [
    'uRUZvDgvuw0',
    'Prensa manual para mangueras',
    'Equipo portátil y versátil para armado y reparación de mangueras en talleres auxiliares y servicios móviles de campo sin requerir energía trifásica.',
  ],
  [
    'qkgLrHY4oS0',
    'Cortadora y peladora de mangueras',
    'Operación de corte preciso y desbaste perimetral (pelado exterior e interior) de mangueras de 1/4" a 2", asegurando un prensado hermético y seguro.',
  ],
]

export default function PrensasPage() {
  return (
    <DomarcoSubpage
      eyebrow="Trabajos realizados · DOMARCO"
      title="Prensas que"
      accent="resuelven en serio."
      intro="Una selección de videos sobre fabricación personalizada, reacondicionamiento y soluciones hidráulicas realizadas por nuestro equipo."
    >
      <section className="bg-[#f4f4f2] text-[#121315]">
        <div className="mx-auto max-w-[1480px] px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
          <div className="border-t-2 border-[#315c8d]">
            {videos.map(([id, title, description], index) => (
              <article
                key={id}
                className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] gap-8 lg:gap-12 items-center py-8 sm:py-10 border-b border-[#c8c9ca] max-[700px]:flex max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-5 max-[700px]:py-6"
              >
                <div className="min-w-0">
                  <span className="text-[#315c8d] font-mono text-[11px] font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3.5 font-normal uppercase leading-[.95] tracking-[-0.045em] text-[clamp(1.75rem,2.7vw,2.9rem)] max-[700px]:text-[clamp(1.45rem,6.8vw,1.95rem)] text-[#121315] break-words">
                    {title}
                  </h2>
                  <p className="max-w-[460px] mt-3.5 text-[#414347] text-[0.92rem] max-[700px]:text-[0.88rem] leading-[1.55]">
                    {description}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-5 border-b border-[#315c8d] pb-1.5 text-[#315c8d] text-[10px] font-bold tracking-[.12em] uppercase hover:text-[#121315] hover:border-[#121315] transition-colors"
                  >
                    Ver en YouTube <ArrowUpRight className="ml-2 size-4" />
                  </a>
                </div>
                <div className="min-w-0 w-full aspect-video overflow-hidden bg-[#0b2b50] border border-[#b8bac0] shadow-[0_6px_20px_-6px_rgba(0,0,0,0.12)]">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SubpageCta />
    </DomarcoSubpage>
  )
}
