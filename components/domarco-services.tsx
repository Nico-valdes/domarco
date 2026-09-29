'use client'

import { useState, useRef, useCallback } from 'react'
import { ArrowUpRight, Download, Eye, FileText } from 'lucide-react'
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
          aria-controls="detalle-servicio"
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
          <span>Antes</span>
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
          <span>Después</span>
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
      </div>
      <div className="sv-03-strip">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.usadas.stockVerde})`,
            backgroundPosition: 'center 35%',
          }}
        >
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
        </div>
      </div>
      <div className="sv-04-bottom">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.servicioTecnico.taller})`,
            backgroundPosition: 'center 40%',
          }}
        >
        </div>
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.servicioTecnico.valvulas})`,
            backgroundPosition: 'center',
          }}
        >
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
      </div>
      <div className="sv-05-side">
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.mangueras.compactaBanco})`,
            backgroundPosition: 'center',
          }}
        >
        </div>
        <div
          className="sv-tile"
          style={{
            backgroundImage: `url(${servicePhotos.mangueras.mordazas})`,
            backgroundPosition: 'center 40%',
          }}
        >
        </div>
      </div>
      <a
        href="/catalago_accesorios.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="sv-05-catalog-badge"
        title="Abrir y ver catálogo oficial en PDF"
      >
        <FileText className="size-3" />
        <span>Ver catálogo PDF ↗</span>
      </a>
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
      </div>
      <div className="sv-06-bc">
        <div
          className="sv-tile sv-06-b"
          style={{
            backgroundImage: `url(${servicePhotos.equipos.valvulas})`,
            backgroundPosition: 'center',
          }}
        >
        </div>
        <div
          className="sv-tile sv-06-c"
          style={{
            backgroundImage: `url(${servicePhotos.equipos.miniCentral})`,
            backgroundPosition: 'center',
          }}
        >
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
  if (service.no === '05') {
    return (
      <article id={`service-${service.no}`} className={`service-feature service-feature-${service.no} service-feature-mangueras`}>
        <div className="service-feature-copy">
          <div className="service-feature-meta">
            <span>{service.no}</span>
            <span>ARMADO DE MANGUERAS & ACCESORIOS</span>
          </div>
          <h3>{service.title}</h3>
          <div className="service-feature-underline" />
          <p className="detail-copy">
            Diseñamos y fabricamos prensas para el abrochado continuo de mangueras hidráulicas de 1 a 6 mallas (hasta 2" y diámetros especiales). Complementamos la provisión de equipos con toda la línea de insumos y repuestos para armado en taller o en campo.
          </p>
          <p className="service-types">{service.types}</p>

          {/* Bloque destacado para previsualizar y descargar el catálogo */}
          <div className="service-catalog-card">
            <div className="service-catalog-card-header">
              <span className="service-catalog-badge">
                <FileText className="size-3.5" /> CATÁLOGO TÉCNICO OFICIAL
              </span>
              <span className="service-catalog-format">PDF · 8 MB</span>
            </div>

            <h4 className="service-catalog-card-title">Mangueras, Terminales & Accesorios</h4>
            <p className="service-catalog-card-desc">
              Consultá especificaciones de roscas (BSP, NPT, JIC, ORFS, Métricas y bridas), virolas, mangueras (1SN, 2SN, 4SP, 4SH), adaptadores y acoples rápidos.
            </p>

            <div className="service-catalog-actions">
              <a
                href="/catalago_accesorios.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-catalog-preview"
                title="Abrir y ver el catálogo PDF completo en una pestaña nueva"
              >
                <Eye className="size-4" />
                <span>Ver catálogo en PDF</span>
                <ArrowUpRight className="size-4 opacity-80" />
              </a>

              <a
                href="/catalago_accesorios.pdf"
                download="catalogo_accesorios_domarco.pdf"
                className="btn-catalog-download"
                title="Descargar archivo PDF directamente a tu dispositivo"
              >
                <Download className="size-4" />
                <span>Descargar PDF</span>
              </a>
            </div>
          </div>

          <div className="service-contact-row">
            <a href="#contacto" className="service-link" aria-label="Consultar por prensas para mangueras o insumos">
              <ArrowUpRight className="size-5" /> Consultar por prensas o accesorios
            </a>
          </div>
        </div>
        <div className="service-feature-visual">
          {visualByNo[service.no]}
        </div>
      </article>
    )
  }

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
        <div id="detalle-servicio" role="tabpanel" className="service-showcase">
          <ServicePanel service={selectedService} />
        </div>
      </div>
    </section>
  )
}
