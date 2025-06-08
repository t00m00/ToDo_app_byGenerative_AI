export default {
  // Global page headers
  head: {
    title: 'Todo App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple Todo application built with Vue.js and Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    mode: 'hash'
  },
  generate: {
    fallback: true  // 404.html も自動出力させたいなら true
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [
    { src: '~/plugins/localStorage.js', mode: 'client' },
    { src: '~/plugins/keyboardShortcuts.js', mode: 'client' }
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    // Remove tailwindcss from buildModules and add it to modules
  ],

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss'
  ],

  // Axios module configuration
  axios: {
    baseURL: '/'
  },

  // Build Configuration
  build: {}
}
