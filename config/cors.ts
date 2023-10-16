import type { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
  enabled: true,
  origin: '*',
  methods: ['GET','PUT'],
  headers: ['Content-Type', 'Accept', 'X-API-Key', 'X-APP-Key'],
  exposeHeaders: [
    'cache-control',
    'content-language',
    'content-type',
    'expires',
    'last-modified',
    'pragma',
  ],
  credentials: true,
  maxAge: 90,
}

export default corsConfig
