import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.domarco.com.ar'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/prensas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/historia`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
