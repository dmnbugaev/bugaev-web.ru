import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event, '/blog').find()

  const staticRoutes = [
    { url: '/',                   changefreq: 'weekly',  priority: 1.0 },
    { url: '/uslugi',             changefreq: 'monthly', priority: 0.85 },
    { url: '/blog',               changefreq: 'weekly',  priority: 0.9 },
    { url: '/smm-salon-krasoty',  changefreq: 'monthly', priority: 0.8 },
    { url: '/sait-salon-krasoty', changefreq: 'monthly', priority: 0.8 },
    { url: '/telegram-bot-zapis', changefreq: 'monthly', priority: 0.8 },
    { url: '/crm-yclients',       changefreq: 'monthly', priority: 0.8 },
    { url: '/nogtevaiya-studiya', changefreq: 'monthly', priority: 0.75 },
    { url: '/kosmetolog',         changefreq: 'monthly', priority: 0.75 },
    { url: '/barbershop',         changefreq: 'monthly', priority: 0.75 },
    { url: '/privacy',            changefreq: 'yearly',  priority: 0.2 },
    { url: '/cookies',            changefreq: 'yearly',  priority: 0.2 },
    { url: '/oferta',             changefreq: 'yearly',  priority: 0.2 },
    { url: '/terms',              changefreq: 'yearly',  priority: 0.2 },
    { url: '/requisites',         changefreq: 'yearly',  priority: 0.2 },
  ]

  const blogRoutes = articles.map(article => ({
    url: article._path as string,
    changefreq: 'monthly' as const,
    priority: 0.7,
    lastmod: article.isoDate,
  }))

  const links = [...staticRoutes, ...blogRoutes]

  const stream = new SitemapStream({ hostname: 'https://bugaev-web.ru' })
  const xml = await streamToPromise(Readable.from(links).pipe(stream))

  setHeader(event, 'Content-Type', 'application/xml')
  return xml.toString()
})
