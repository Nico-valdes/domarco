import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'DOMARCO | Prensas hidráulicas',
  description: 'Fabricación, reacondicionamiento y servicio técnico de prensas hidráulicas industriales desde 1964.',
  keywords: ['prensas hidráulicas', 'fabricación industrial', 'reacondicionamiento', 'DOMARCO'],
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
