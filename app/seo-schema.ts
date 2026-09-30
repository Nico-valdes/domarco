export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.domarco.com.ar'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'Corporation'],
  '@id': `${SITE_URL}/#organization`,
  name: 'DOMARCO Prensas Hidráulicas',
  legalName: 'A.C. DOMARCO',
  alternateName: ['DOMARCO', 'A.C. Domarco Prensas'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo_domarco.png`,
    caption: 'DOMARCO Prensas Hidráulicas Industriales',
  },
  image: `${SITE_URL}/images/reacondicionamiento1.jpg`,
  description:
    'Fabricación, reacondicionamiento, venta y servicio técnico de prensas hidráulicas industriales y equipos hidráulicos en Argentina desde 1964.',
  foundingDate: '1964',
  founder: {
    '@type': 'Person',
    name: 'Alberto C. Domarco',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Centenario 3615',
    addressLocality: 'Quilmes',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1879',
    addressCountry: 'AR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+54-9-11-3691-2384',
      contactType: 'sales',
      areaServed: ['AR', 'UY', 'CL', 'PY', 'BO'],
      availableLanguage: ['Spanish'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+54-9-11-3691-2384',
      contactType: 'technical support',
      areaServed: 'AR',
      availableLanguage: ['Spanish'],
    },
  ],
  sameAs: [
    'https://www.youtube.com/@domarcoprensashidraulicas',
    'https://maps.app.goo.gl/ubAeT9kB5WfuySzm6',
  ],
}

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'IndustrialBusiness'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'DOMARCO Prensas Hidráulicas',
  image: `${SITE_URL}/images/reacondicionamiento1.jpg`,
  url: SITE_URL,
  telephone: '+54-9-11-3691-2384',
  email: 'info@domarco.com.ar',
  priceRange: '$$$$',
  currenciesAccepted: 'ARS, USD',
  paymentAccepted: 'Transferencia bancaria, Cheque, Efectivo',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Centenario 3615',
    addressLocality: 'Quilmes',
    addressRegion: 'Provincia de Buenos Aires',
    postalCode: 'B1879',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.7431,
    longitude: -58.2658,
  },
  hasMap: 'https://maps.app.goo.gl/ubAeT9kB5WfuySzm6',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'Argentina',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Buenos Aires',
    },
  ],
}

export const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Fabricación de prensas hidráulicas a medida',
      description:
        'Diseño y construcción de prensas hidráulicas de columna y de garganta para embutido, estampado, moldeo de caucho, corte, punzonado y matricería pesada.',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Argentina',
      category: 'Maquinaria Industrial',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Reacondicionamiento de prensas hidráulicas',
      description:
        'Recuperación integral, modernización de circuitos hidráulicos, rectificado de columnas, cambio de empaquetaduras y actualización de tableros eléctricos.',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Argentina',
      category: 'Mantenimiento Industrial',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Venta de prensas hidráulicas usadas y reacondicionadas',
      description:
        'Stock permanente de prensas industriales usadas, completamente revisadas y listas para operar con garantía de funcionamiento.',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Argentina',
      category: 'Maquinaria Usada',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Servicio técnico de prensas hidráulicas en planta y taller',
      description:
        'Diagnóstico de fallas hidráulicas, reparación de cilindros y bombas, calibración de presiones y asistencia de urgencia en plantas productivas.',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Argentina',
      category: 'Servicio Técnico',
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Prensas para mangueras hidráulicas (Abrochadoras)',
      description:
        'Fabricación y comercialización de prensas abrochadoras de terminales de alta presión, tanto portátiles de taller como industriales de producción continua.',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Argentina',
      category: 'Mangueras Hidráulicas',
    },
    {
      '@type': 'Service',
      position: 6,
      name: 'Equipos hidráulicos, centrales y cilindros',
      description:
        'Diseño y ensamble de centrales hidráulicas a medida, cilindros oleohidráulicos de simple y doble efecto, bloques de válvulas y motobombas.',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Argentina',
      category: 'Equipos Oleohidráulicos',
    },
  ],
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateVideosJsonLd(
  videos: [id: string, title: string, description: string][]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: videos.map(([id, title, description], index) => ({
      '@type': 'VideoObject',
      position: index + 1,
      name: title,
      description: description,
      thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${id}`,
      contentUrl: `https://www.youtube.com/watch?v=${id}`,
      uploadDate: '2024-01-01T00:00:00Z',
    })),
  }
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}
