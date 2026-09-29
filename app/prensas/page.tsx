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
    <DomarcoSubpage eyebrow="Trabajos realizados · DOMARCO" title="Prensas que"
      accent="resuelven en serio."
      intro="Una selección de videos sobre fabricación personalizada, reacondicionamiento y soluciones hidráulicas realizadas por nuestro equipo."
    >
      <section className="videos-section">
        <div className="mx-auto max-w-[1480px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="videos-list">
            {videos.map(([id, title, description], index) => (
              <article className="video-row" key={id}>
                <div className="video-copy"><span>{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{description}</p><a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">Ver en YouTube <ArrowUpRight className="ml-2 size-4" /></a></div>
                <div className="video-frame"><iframe src={`https://www.youtube.com/embed/${id}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SubpageCta />
    </DomarcoSubpage>
  )
}
