import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://icracs.poornima.org'
  
  const routes = [
    '',
    '/about',
    '/call-for-papers',
    '/committee',
    '/speakers',
    '/registration',
    '/agenda',
    '/archive',
    '/call-for-special-session',
    '/reviewer',
    '/important-dates',
    '/venue',
    '/contact',
    '/publication',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
