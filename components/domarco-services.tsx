'use client'

import { ArrowUpRight } from 'lucide-react'
import { serviceImages, services, type Service } from './domarco-data'

// Curated image indices for each service:
// 0: encolumna2        — prensa de columna, vista lateral
// 1: image-ipVPxI4     — prensa grande/plana en taller
// 2: reacondicionamiento3 — prensa en proceso de reconstrucción
// 3: WhatsApp 6.37     — prensa operando en producción
// 4: prensa de equipo  — prensa compacta de equipos
// 5: encolumna2 (dup)  — segunda vista columna
// 6: image-eOBtJKz     — prensa pequeña / mangueras
const img = (i: number) => serviceImages[i % serviceImages.length]

type DomarcoServicesProps = {
  activeService: number
  onSelectService: (index: number) => void
}

function ServiceDirectory({ activeService, onSelectService }: DomarcoServicesProps) {
  return (
    <div className="service-directory" role="tablist" aria-label="Servicios DOMARCO">
      {services.map((service, index) => (
        <button
          key={service.no}
          type="button"
          role="tab"
          aria-selected={activeService === index}
          aria-controls={`service-panel-${service.no}`}
          className={`service-directory-item ${activeService === index ? 'is-active' : ''}`}
          onClick={() => onSelectService(index)}
        >
          <span className="service-directory-number">{service.no}</span>
          <span className="service-directory-copy">
            <small>{service.label}</small>
            <strong>{service.title}</strong>
          </span>
          <ArrowUpRight className="size-4" />
        </button>
      ))}
    </div>
  )
}

// ─── 01 FABRICACIÓN ── split: columna grande + 2 detalles verticales
function Visual01() {
  return (
    <div className="sv sv-01" aria-label="Fabricación de prensas" role="img">
      <div className="sv-tile sv-01-main" style={{ backgroundImage: `url(${img(0)})` }}>
        <span className="sv-chip">Prensa de columna</span>
      </div>
      <div className="sv-01-side">
        <div className="sv-tile" style={{ backgroundImage: `url(${img(4)})` }} />
        <div className="sv-tile" style={{ backgroundImage: `url(${img(1)})` }}>
          <span className="sv-chip sv-chip-sm">A medida</span>
        </div>
      </div>
    </div>
  )
}

// ─── 02 REACONDICIONAMIENTO ── antes / después con divider vertical
function Visual02() {
  return (
    <div className="sv sv-02" aria-label="Reacondicionamiento de prensas" role="img">
      <div className="sv-tile sv-02-img" style={{ backgroundImage: `url(${img(2)})` }}>
        <div className="sv-02-label sv-02-label-before"><span>Antes</span></div>
      </div>
      <div className="sv-02-divider" aria-hidden="true" />
      <div className="sv-tile sv-02-img" style={{ backgroundImage: `url(${img(0)})` }}>
        <div className="sv-02-label sv-02-label-after"><span>Después</span></div>
      </div>
    </div>
  )
}

// ─── 03 PRENSAS USADAS ── catálogo: hero superior + 2 thumbs inferiores
function Visual03() {
  return (
    <div className="sv sv-03" aria-label="Prensas usadas en stock" role="img">
      <div className="sv-tile sv-03-main" style={{ backgroundImage: `url(${img(1)})` }}>
        <span className="sv-chip sv-chip-dark">Stock disponible</span>
      </div>
      <div className="sv-03-strip">
        <div className="sv-tile" style={{ backgroundImage: `url(${img(0)})` }} />
        <div className="sv-tile" style={{ backgroundImage: `url(${img(3)})` }} />
      </div>
    </div>
  )
}

// ─── 04 SERVICIO TÉCNICO ── técnico en planta + 2 detalles de taller
function Visual04() {
  return (
    <div className="sv sv-04" aria-label="Servicio técnico especializado" role="img">
      <div className="sv-tile sv-04-main" style={{ backgroundImage: `url(${img(3)})` }}>
        <div className="sv-04-badge">
          <span className="sv-04-badge-no">04</span>
          <span className="sv-04-badge-text">Diagnóstico &<br />Mantenimiento</span>
        </div>
      </div>
      <div className="sv-04-bottom">
        <div className="sv-tile" style={{ backgroundImage: `url(${img(6)})` }}>
          <span className="sv-chip sv-chip-sm">En planta</span>
        </div>
        <div className="sv-tile" style={{ backgroundImage: `url(${img(4)})` }}>
          <span className="sv-chip sv-chip-sm">En taller</span>
        </div>
      </div>
    </div>
  )
}

// ─── 05 PRENSAS PARA MANGUERAS ── 2 paneles horizontales + watermark
function Visual05() {
  return (
    <div className="sv sv-05" aria-label="Prensas para mangueras" role="img">
      <div className="sv-tile sv-05-top" style={{ backgroundImage: `url(${img(4)})` }}>
        <span className="sv-chip sv-chip-sm">Modelos taller y móvil</span>
      </div>
      <div className="sv-tile sv-05-bottom" style={{ backgroundImage: `url(${img(6)})` }}>
        <span className="sv-chip">Armado de mangueras y terminales</span>
      </div>
      <span className="sv-05-watermark" aria-hidden="true">05</span>
    </div>
  )
}

// ─── 06 EQUIPOS HIDRÁULICOS ── mosaico: central principal + 2 cilindros/bombas
function Visual06() {
  return (
    <div className="sv sv-06" aria-label="Equipos hidráulicos industriales" role="img">
      <div className="sv-tile sv-06-a" style={{ backgroundImage: `url(${img(1)})` }}>
        <span className="sv-chip">Centrales hidráulicas</span>
      </div>
      <div className="sv-06-bc">
        <div className="sv-tile sv-06-b" style={{ backgroundImage: `url(${img(4)})` }}>
          <span className="sv-chip sv-chip-sm">Cilindros</span>
        </div>
        <div className="sv-tile sv-06-c" style={{ backgroundImage: `url(${img(6)})` }}>
          <span className="sv-chip sv-chip-sm">Bombas</span>
        </div>
      </div>
    </div>
  )
}

const visualByNo: Record<string, React.ReactNode> = {
  '01': <Visual01 />,
  '02': <Visual02 />,
  '03': <Visual03 />,
  '04': <Visual04 />,
  '05': <Visual05 />,
  '06': <Visual06 />,
}

function ServicePanel({ service }: { service: Service }) {
  return (
    <article id={`service-${service.no}`} className={`service-feature service-feature-${service.no}`}>
      <div className="service-feature-copy">
        <div className="service-feature-meta"><span>{service.no}</span><span>{service.label}</span></div>
        <h3>{service.title}</h3>
        <div className="service-feature-underline" />
        <p className="detail-copy">{service.description}</p>
        <p className="service-types">{service.types}</p>
        <a href="#contacto" className="service-link" aria-label={`Consultar por ${service.title}`}>
          <ArrowUpRight className="size-5" /> Consultar servicio
        </a>
      </div>
      <div className="service-feature-visual">
        {visualByNo[service.no]}
      </div>
    </article>
  )
}

export function DomarcoServices({ activeService, onSelectService }: DomarcoServicesProps) {
  const selectedService = services[activeService]

  return (
    <section id="servicios" className="services-section">
      <div className="mx-auto max-w-[1480px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="services-heading"><div><p className="kicker">Servicios DOMARCO</p><h2 className="section-title light">Soluciones hidráulicas<br /><span>para cada aplicación.</span></h2></div><p>Ingeniería, fabricación y respaldo técnico para acompañar cada etapa de tu operación.</p></div>
        <ServiceDirectory activeService={activeService} onSelectService={onSelectService} />
        <div id={`service-panel-${selectedService.no}`} role="tabpanel" className="service-showcase">
          <ServicePanel service={selectedService} />
        </div>
      </div>
    </section>
  )
}
