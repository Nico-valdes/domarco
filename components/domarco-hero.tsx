import { ArrowUpRight } from 'lucide-react'
import { serviceImages, services, type ServiceSelectionHandler } from './domarco-data'

type DomarcoHeroProps = {
  onSelectService: ServiceSelectionHandler
}

const heroServices = [services[0], services[1], services[3]]

export function DomarcoHero({ onSelectService }: DomarcoHeroProps) {
  return (
    <section id="inicio" className="hero-cards">
      <div className="mx-auto max-w-[1480px] px-4 py-4 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
        <div className="hero-cards-heading">
          <div className="hero-heading-copy">
            <div className="hero-brand-line">
              <span className="hero-brand-line-mark" />
              <span>DOMARCO / 1964—2026</span>
            </div>
            <p className="blue-kicker">DOMARCO / PRENSAS HIDRÁULICAS</p>
            <h1 className="hero-cards-title">
              <span className="hero-title-line">Prensas hidráulicas</span>
              <span className="hero-title-line hero-title-accent">para cada necesidad.</span>
            </h1>
            <p className="hero-description">Fabricación a medida, reacondicionamiento y servicio técnico para resolver tus necesidades de producción con respaldo especializado.</p>
          </div>
        </div>
        <div className="hero-card-grid">
          {heroServices.map((service, index) => (
            <a
              href="#servicios"
              key={service.no}
              className="hero-service-tile"
              onClick={() => onSelectService(service.no)}
              aria-label={`Ver ${service.title}`}
            >
              <div className={`hero-service-image hero-image-${index + 1}`}>
                <span className="hero-image-note">IMAGEN / {service.no}</span>
              </div>
              <div className="hero-service-tile-footer">
                <span className="hero-card-number">0{index + 1}</span>
                <h2>{service.title.toUpperCase()}</h2>
                <span className="hero-card-arrow"><ArrowUpRight className="size-4" /></span>
              </div>
            </a>
          ))}
        </div>
        <div className="hero-mobile-thumbs" aria-hidden="true">
          {[0, 1, 3].map((serviceIndex) => (
            <div key={serviceIndex} style={{ backgroundImage: `url(${serviceImages[serviceIndex]})` }} />
          ))}
        </div>
      </div>
    </section>
  )
}
