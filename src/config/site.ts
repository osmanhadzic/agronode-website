const defaultSiteUrl = 'http://localhost:5173'

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim()

const normalizedSiteUrl = configuredSiteUrl?.replace(/\/$/, '')

const isValidUrl = normalizedSiteUrl ? /^https?:\/\//.test(normalizedSiteUrl) : false

export const siteUrl = isValidUrl ? normalizedSiteUrl : defaultSiteUrl
