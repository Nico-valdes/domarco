import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'

import { SITE_URL } from './seo-schema'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DOMARCO | Prensas Hidráulicas Industriales | Fabricación y Servicio Técnico',
    template: '%s | DOMARCO',
  },
  description:
    'Fabricación a medida, reacondicionamiento integral y servicio técnico de prensas hidráulicas industriales (columna y garganta), abrochadoras de mangueras y centrales oleohidráulicas en Quilmes, Buenos Aires desde 1964.',
  keywords: [
    'prensas hidráulicas',
    'prensas hidráulicas industriales',
    'fabricación de prensas hidráulicas',
    'reacondicionamiento de prensas',
    'reparación de prensas hidráulicas',
    'servicio técnico de prensas',
    'prensas de columna',
    'prensas de garganta',
    'prensas hidráulicas usadas',
    'prensas para mangueras',
    'abrochadoras de mangueras hidráulicas',
    'centrales hidráulicas',
    'cilindros hidráulicos',
    'máquinas industriales',
    'Quilmes',
    'Buenos Aires',
    'Argentina',
    'DOMARCO',
  ],
  authors: [{ name: 'DOMARCO Prensas Hidráulicas', url: SITE_URL }],
  creator: 'DOMARCO',
  publisher: 'DOMARCO',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'DOMARCO Prensas Hidráulicas',
    title: 'DOMARCO | Prensas Hidráulicas Industriales | Fabricación y Reacondicionamiento',
    description:
      'Fabricación a medida, reacondicionamiento integral y servicio técnico de prensas hidráulicas industriales en Quilmes, Buenos Aires desde 1964.',
    images: [
      {
        url: '/images/reacondicionamiento1.jpg',
        width: 1200,
        height: 630,
        alt: 'DOMARCO - Fabricación y Reacondicionamiento de Prensas Hidráulicas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOMARCO | Prensas Hidráulicas Industriales',
    description:
      'Fabricación a medida y servicio técnico especializado de prensas hidráulicas industriales en Argentina.',
    images: ['/images/reacondicionamiento1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Industrial Machinery',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
