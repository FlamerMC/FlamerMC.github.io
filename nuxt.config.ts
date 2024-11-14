// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'app', mode: 'out-in' }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
