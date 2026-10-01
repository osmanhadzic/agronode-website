import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = resolve(process.cwd())
const publicDir = resolve(projectRoot, 'public')
mkdirSync(publicDir, { recursive: true })

const raw = process.env.VITE_SITE_URL?.trim()
const siteUrl = (raw && /^https?:\/\//.test(raw) ? raw : 'http://localhost:5173').replace(/\/$/, '')

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`

writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf8')
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')
