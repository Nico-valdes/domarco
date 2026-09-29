'use client'

import { useState } from 'react'
import { DomarcoHeader } from './domarco-header'
import { DomarcoHero } from './domarco-hero'
import { DomarcoServices } from './domarco-services'
import { DomarcoContact, DomarcoFaq, DomarcoProcess } from './domarco-lower-sections'
import { services } from './domarco-data'

export function DomarcoLanding() {
  const [activeService, setActiveService] = useState(0)

  const selectService = (index: number) => {
    setActiveService(index)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById('detalle-servicio')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 60)
    }
  }

  const selectServiceByNumber = (serviceNo: string) => {
    const index = services.findIndex((service) => service.no === serviceNo)
    if (index < 0) return

    setActiveService(index)
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 1024
      const targetId = isMobile ? 'detalle-servicio' : 'servicios'
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 60)
    }
  }

  return (
    <main className="domarco-page min-h-screen overflow-hidden bg-[#061a33] text-white">
      <DomarcoHeader />
      <DomarcoHero onSelectService={selectServiceByNumber} />
      <DomarcoServices activeService={activeService} onSelectService={selectService} />
      <DomarcoProcess />
      <DomarcoFaq />
      <DomarcoContact />
    </main>
  )
}
