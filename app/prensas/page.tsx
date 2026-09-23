import { ArrowUpRight } from 'lucide-react'
import { DomarcoSubpage, SubpageCta } from '@/components/domarco-subpage'

const videos = [
  ['07Ph0TND58c', 'Fabricación personalizada', 'Una mirada al proceso de fabricación de una prensa hidráulica diseñada para una aplicación industrial específica.'],
  ['qkgLrHY4oS0', 'Una solución a medida', 'Trabajo realizado por DOMARCO para resolver una necesidad concreta de producción.'],
  ['h8sVmZQrr3k', 'Reacondicionamiento', 'Recuperación y puesta a punto de una prensa para devolverla a condiciones de trabajo.'],
  ['uRUZvDgvuw0', 'Prensa en operación', 'El resultado final: una solución hidráulica integrada al ritmo real de una planta.'],
  ['0HQT5hCiLeU', 'Experiencia en acción', 'Trabajos realizados y la experiencia de taller que sostiene cada entrega DOMARCO.'],
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
