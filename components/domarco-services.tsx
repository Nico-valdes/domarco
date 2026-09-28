'use client'

import { useState, useRef, useCallback } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { servicePhotos, serviceThumbnails, services, type Service } from './domarco-data'

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
          <span
            className="service-directory-thumb"
            style={{ backgroundImage: `url(${serviceThumbnails[service.no]})` }}
            aria-hidden="true"
          />
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

// ─── 01 FABRICACIÓN ── split: columna grande + 2 prensas de garganta y taller
function Visual01() {
  return (
    <div className="sv sv-01" aria-label="Fabricación de prensas" role="img">
      <div
        className="sv-tile sv-01-main"
        style={{
          backgroundImage: `url(${servicePhotos.fabricacion.columna})`,
          backgroundPosition: 'center 35%',
        }}
      >
        <span className="sv-chip">Prensa de columna · PCH 150</span>
      </div>
      <div className="sv-01-side">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.fabricacion.garganta15})`,
            backgroundPosition: 'center 30%',
          }}
        >
          <span className="sv-chip sv-chip-sm">Prensa de garganta · PG 15</span>
        </div>
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.fabricacion.garganta3})`,
            backgroundPosition: 'center 25%',
          }}
        >
          <span className="sv-chip sv-chip-sm">A medida · PG 3</span>
        </div>
      </div>
    </div>
  )
}

// ─── 02 REACONDICIONAMIENTO ── antes / después interactivo deslizante
function Visual02() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
    const pct = (x / rect.width) * 100
    setSliderPos(Math.round(pct * 10) / 10)
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // ignore
    }
    updatePos(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updatePos(e.clientX)
    }
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className="sv sv-02"
      aria-label="Reacondicionamiento de prensas: Comparación antes y después"
      role="region"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: 'none', cursor: 'ew-resize' }}
    >
      {/* Antes (fondo completo) */}
      <div
        className="sv-tile sv-02-tile"
        style={{
          backgroundImage: `url(${servicePhotos.reacondicionamiento.antes})`,
          backgroundPosition: 'center 38%',
        }}
      >
        <div className="sv-02-label sv-02-label-before">
          <span>Antes · Estado inicial</span>
        </div>
      </div>

      {/* Después (capa recortada al slider) */}
      <div
        className="sv-tile sv-02-tile"
        style={{
          backgroundImage: `url(${servicePhotos.reacondicionamiento.despues})`,
          backgroundPosition: 'center 38%',
          clipPath: `inset(0 0 0 ${sliderPos}%)`,
        }}
      >
        <div className="sv-02-label sv-02-label-after">
          <span>Después · Reacondicionada a nuevo</span>
        </div>
      </div>

      {/* Divisor interactivo */}
      <div className="sv-02-divider" style={{ left: `${sliderPos}%` }} aria-hidden="true" />

      {/* Indicador superior */}
      <div className="sv-02-help-pill" aria-hidden="true">
        <span>Deslizá para comparar</span>
      </div>
    </div>
  )
}

// ─── 03 PRENSAS USADAS ── catálogo: hero superior + 2 thumbs inferiores
function Visual03() {
  return (
    <div className="sv sv-03" aria-label="Prensas usadas en stock" role="img">
      <div
        className="sv-tile sv-03-main"
        style={{
          backgroundImage: `url(${servicePhotos.usadas.principal})`,
          backgroundPosition: 'center 40%',
        }}
      >
        <span className="sv-chip sv-chip-dark">Stock disponible · Gran capacidad</span>
      </div>
      <div className="sv-03-strip">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.usadas.stockVerde})`,
            backgroundPosition: 'center 35%',
          }}
        >
          <span className="sv-chip sv-chip-sm">Revisadas en taller</span>
        </div>
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.usadas.reacondicionadaDomarco})`,
            backgroundPosition: 'center 35%',
          }}
        >
          <span className="sv-chip sv-chip-sm">Garantía DOMARCO</span>
        </div>
      </div>
    </div>
  )
}

// ─── 04 SERVICIO TÉCNICO ── técnico en planta + 2 detalles de taller
function Visual04() {
  return (
    <div className="sv sv-04" aria-label="Servicio técnico especializado" role="img">
      <div
        className="sv-tile sv-04-main"
        style={{
          backgroundImage: `url(${servicePhotos.servicioTecnico.plantaGrua})`,
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="sv-04-badge">
          <span className="sv-04-badge-no">04</span>
          <span className="sv-04-badge-text">Diagnóstico &<br />Mantenimiento</span>
        </div>
        <span className="sv-chip">Asistencia y montaje en planta</span>
      </div>
      <div className="sv-04-bottom">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.servicioTecnico.taller})`,
            backgroundPosition: 'center 40%',
          }}
        >
          <span className="sv-chip sv-chip-sm">Reparación en taller</span>
        </div>
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.servicioTecnico.valvulas})`,
            backgroundPosition: 'center',
          }}
        >
          <span className="sv-chip sv-chip-sm">Válvulas & Manifolds</span>
        </div>
      </div>
    </div>
  )
}

// ─── 05 PRENSAS PARA MANGUERAS ── principal + 2 modelos de banco y mordazas
function Visual05() {
  return (
    <div className="sv sv-05" aria-label="Prensas para mangueras" role="img">
      <div
        className="sv-tile sv-05-main"
        style={{
          backgroundImage: `url(${servicePhotos.mangueras.muebleProduccion})`,
          backgroundPosition: 'center 40%',
        }}
      >
        <span className="sv-chip">Línea producción con mueble</span>
      </div>
      <div className="sv-05-side">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.mangueras.compactaBanco})`,
            backgroundPosition: 'center',
          }}
        >
          <span className="sv-chip sv-chip-sm">Modelo compacto taller</span>
        </div>
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.mangueras.mordazas})`,
            backgroundPosition: 'center 40%',
          }}
        >
          <span className="sv-chip sv-chip-sm">Juego de mordazas</span>
        </div>
      </div>
      <span className="sv-05-watermark" aria-hidden="true">05</span>
    </div>
  )
}

// ─── 06 EQUIPOS HIDRÁULICOS ── mosaico: central principal + 2 cilindros/bombas
function Visual06() {
  return (
    <div className="sv sv-06" aria-label="Equipos hidráulicos industriales" role="img">
      <div
        className="sv-tile sv-06-a"
        style={{
          backgroundImage: `url(${servicePhotos.equipos.central})`,
          backgroundPosition: 'center',
        }}
      >
        <span className="sv-chip">Centrales hidráulicas DOMARCO</span>
      </div>
      <div className="sv-06-bc">
        <div
          className="sv-tile sv-06-b"
          style={{
            backgroundImage: `url(${servicePhotos.equipos.valvulas})`,
            backgroundPosition: 'center',
          }}
        >
          <span className="sv-chip sv-chip-sm">Bloques & Válvulas</span>
        </div>
        <div
          className="sv-tile sv-06-c"
          style={{
            backgroundImage: `url(${servicePhotos.equipos.miniCentral})`,
            backgroundPosition: 'center',
          }}
        >
          <span className="sv-chip sv-chip-sm">Mini-centrales & Bombas</span>
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
