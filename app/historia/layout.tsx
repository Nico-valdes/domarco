import type { Metadata } from 'next'
import { generateBreadcrumbJsonLd } from '../seo-schema'

export const metadata: Metadata = {
  title: 'Historia y Trayectoria Industrial',
  description:
    'Conocé la trayectoria de DOMARCO: fundada por Alberto C. Domarco en 1964, dos generaciones dedicadas a la fabricación y reparación de prensas hidráulicas industriales en Quilmes.',
  alternates: {
    canonical: '/historia',
  },
  openGraph: {
    title: 'Nuestra Historia | DOMARCO Prensas Hidráulicas',
    description:
      'Más de 60 años de trayectoria ininterrumpida forjando prensas hidráulicas industriales y soluciones oleohidráulicas en Quilmes, Argentina.',
    url: '/historia',
    type: 'article',
  },
}

export default function HistoriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Nuestra historia', url: '/historia' },
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
