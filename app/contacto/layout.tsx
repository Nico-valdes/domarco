import type { Metadata } from 'next'
import { generateBreadcrumbJsonLd } from '../seo-schema'

export const metadata: Metadata = {
  title: 'Contacto y Asesoramiento Técnico',
  description:
    'Contactá a la fábrica DOMARCO en Quilmes. Asesoramiento técnico directo para fabricación de prensas a medida, reacondicionamiento, reparación en planta y venta de equipos usados.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto | DOMARCO Prensas Hidráulicas',
    description:
      'Asesoramiento directo desde fábrica en Quilmes, Buenos Aires. Presupuestos y consultas técnicas para la industria metalúrgica y manufacturera.',
    url: '/contacto',
    type: 'website',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Contacto', url: '/contacto' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  )
}
