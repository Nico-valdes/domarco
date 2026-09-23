'use client'

import { useEffect, useRef, useState } from 'react'
import { DomarcoSubpage, SubpageCta } from '@/components/domarco-subpage'

const legacyStats = [
  { value: '1964', label: 'Año de origen', detail: 'Inicio del oficio en torno, fresa y rectificadora en Bernal Oeste.' },
  { value: '+60', label: 'Años de oficio', detail: 'Experiencia ininterrumpida resolviendo prensas e hidráulica industrial.' },
  { value: 'Quilmes', label: 'Taller propio', detail: 'Fabricación y asistencia técnica nacional desde Av. Centenario.' },
  { value: '2ª Gen', label: 'Empresa familiar', detail: 'Atención directa, compromiso humano y evolución técnica permanente.' },
]

const milestones = [
  {
    year: '1964',
    badge: 'Bernal Oeste',
    title: 'Comienzo en Adabor y aprendizaje de máquinas herramienta',
    text: 'En el año 1964 comienza a trabajar en Adabor, fábrica de prensas hidráulicas en la ciudad de Bernal Oeste. Al pasar los años, Alberto se fue forjando en experiencia sobre todo en la utilización de herramientas que se encontraban en la fábrica, tales como torno, fresa y rectificadora entre otras.',
  },
  {
    year: '1977',
    badge: 'Servicio técnico',
    title: 'Camino independiente y primeros servicios de mantenimiento',
    text: 'Fue allá por el año 1977 cuando decidió emprender solo su camino. Con el respaldo de aquella fábrica que lo vio nacer, tomó la decisión de realizar service de las máquinas que tanto conocía. En aquel momento sólo con la ayuda de una camioneta y un teléfono fijo de su casa natal, realizando reparaciones en el garaje de su casa provisoriamente.',
  },
  {
    year: '1990',
    badge: 'Calle Centenario · Quilmes',
    title: 'Taller propio en Quilmes y primeras prensas A.C. DOMARCO',
    text: 'Paso a paso Alberto se arma su taller en la calle Centenario en Quilmes: primeramente un galpón chico con una oficina, en ese momento sobre calle de tierra. Es allí donde nacerán las primeras prensas hidráulicas que llevarán su nombre: A.C. DOMARCO. Máquinas creadas casi artesanalmente, basadas en las necesidades especiales del empresario que las utilice, así como también refacciones de otras máquinas y adaptaciones de las mismas para una mejor producción.',
  },
  {
    year: 'Hoy',
    badge: 'Solución integral',
    title: 'Nuevas líneas de productos e innovación tecnológica',
    text: 'Con el transcurso de los años DOMARCO ha incorporado nuevas líneas de productos con el objetivo de proveer a sus clientes una solución integral a sus necesidades. Cuenta con un excelente grupo humano el cual se capacita en forma permanente a fin de estar actualizado en los cambios e innovaciones tecnológicas que se presentan en el sector.',
  },
]

export default function HistoriaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [indicatorTop, setIndicatorTop] = useState(0)
  const [trackStart, setTrackStart] = useState(0)
  const [trackHeight, setTrackHeight] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const updateTimeline = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const nodes = container.querySelectorAll<HTMLElement>('.history-timeline-node')
      if (nodes.length < 2) return

      const containerRect = container.getBoundingClientRect()
      const firstRect = nodes[0].getBoundingClientRect()
      const lastRect = nodes[nodes.length - 1].getBoundingClientRect()

      const startY = firstRect.top + firstRect.height / 2 - containerRect.top
      const endY = lastRect.top + lastRect.height / 2 - containerRect.top
      const totalSpan = Math.max(0, endY - startY)

      setTrackStart(startY)
      setTrackHeight(totalSpan)

      // Focal line at 48% of screen height
      const focalY = window.innerHeight * 0.48
      const firstNodeCenterY = firstRect.top + firstRect.height / 2
      const scrolledOffset = focalY - firstNodeCenterY
      const clamped = Math.max(0, Math.min(totalSpan, scrolledOffset))
      setIndicatorTop(clamped)

      let current = 0
      nodes.forEach((n, i) => {
        const nCenter = n.getBoundingClientRect().top + n.getBoundingClientRect().height / 2
        if (focalY >= nCenter - 10) {
          current = i
        }
      })
      setActiveIndex(current)
    }

    updateTimeline()
    const timer = setTimeout(updateTimeline, 100)

    window.addEventListener('scroll', updateTimeline, { passive: true })
    window.addEventListener('resize', updateTimeline, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', updateTimeline)
      window.removeEventListener('resize', updateTimeline)
    }
  }, [])

  return (
    <DomarcoSubpage
      eyebrow="DOMARCO / DESDE 1964"
      title="Sesenta años de"
      accent="oficio hidráulico."
      intro="Desde los primeros pasos en el torno en 1964 hasta la ingeniería, fabricación y asistencia técnica de hoy. Una historia familiar forjada en el trabajo de la industria argentina."
      pageClassName="history-subpage"
    >
      {/* ─── Bloque de cifras y legado ─── */}
      <section className="history-stats-section" aria-label="Cifras de legado">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12">
          <div className="history-stats-grid">
            {legacyStats.map((stat) => (
              <div key={stat.label} className="history-stat-card">
                <span className="history-stat-value">{stat.value}</span>
                <span className="history-stat-label">{stat.label}</span>
                <p className="history-stat-detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Línea de tiempo técnica vertical con indicador mecánico de precisión ─── */}
      <section className="history-timeline-section" aria-label="Recorrido histórico">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="history-section-header">
            <p className="blue-kicker">Cronología</p>
            <h2 className="section-title">El camino<br /><span>recorrido.</span></h2>
            <p className="history-header-desc">
              Hitos de trabajo, aprendizaje y crecimiento junto a las industrias que confían en nuestras prensas hidráulicas.
            </p>
          </div>

          <div className="history-timeline-container" ref={containerRef}>
            {/* Guía mecánica vertical continua con recorrido exacto entre nodos */}
            <div
              className="history-timeline-track"
              style={{ top: `${trackStart}px`, height: `${trackHeight}px` }}
              aria-hidden="true"
            >
              <div className="history-timeline-track-bg" />
              <div
                className="history-timeline-track-fill"
                style={{ height: `${indicatorTop}px` }}
              />
              <div
                className="history-timeline-indicator"
                style={{ transform: `translate(-50%, -50%) translateY(${indicatorTop}px)` }}
              >
                <span className="history-timeline-indicator-hairline" />
              </div>
            </div>

            {/* Lista cronológica técnica */}
            <div className="history-timeline-items">
              {milestones.map((m, index) => {
                const isPassed = index <= activeIndex

                return (
                  <article
                    key={m.year + index}
                    className={`history-timeline-row ${isPassed ? 'is-passed' : ''}`}
                  >
                    <div className="history-timeline-meta-col">
                      <span className="history-timeline-year">{m.year}</span>
                      <span className="history-timeline-badge">{m.badge}</span>
                    </div>

                    <div className="history-timeline-node-col">
                      <div className={`history-timeline-node ${isPassed ? 'is-active' : ''}`} />
                    </div>

                    <div className="history-timeline-content-col">
                      <h3>{m.title}</h3>
                      <p className="history-timeline-body">{m.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Declaración institucional de empresa (Centrado) ─── */}
      <section className="history-manifesto-section" aria-label="Declaración institucional DOMARCO">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="history-manifesto-centered">
            <div className="history-manifesto-statement">
              <p className="history-manifesto-lead">
                Tantos años de experiencia y con la premisa de trabajo constante dan como fruto a <strong>DOMARCO PRENSAS HIDRÁULICAS</strong>: una empresa familiar donde priorizamos el factor humano y la satisfacción del cliente.
              </p>
              <p className="history-manifesto-body">
                Estamos para otorgarle a cada industria una solución adaptada a sus necesidades operativas, con la tranquilidad y la certeza de que siempre podrá contar con nosotros.
              </p>
            </div>

            <div className="history-manifesto-sign">
              <div className="history-manifesto-sign-line" />
              <div className="history-manifesto-sign-info">
                <strong>Alberto Domarco & Familia</strong>
                <span>Fundación y continuidad técnica · Quilmes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubpageCta />
    </DomarcoSubpage>
  )
}
