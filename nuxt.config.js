export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/axios.ts'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    'nuxt-typed-vuex',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  fontawesome: {
    icons: {
      solid: ['faHeart'],
    },
  },
  build: {},
  server: {
    port: 8000,
  },
  loading: {
    color: 'green',
    height: '0px',
  },
  publicRuntimeConfig: {
    apiURL: process.env.API_URL, // || 'http://localhost:3000',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${process.env.API_URL}/api/users/login`,
            method: 'post',
            propertyName: 'user.token',
          },
          logout: false,
          user: {
            url: `${process.env.API_URL}/api/user`,
            method: 'get',
            propertyName: 'user',
          },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        globalToken: false,
        // autoFetchUser: true
      },
    },
  },
};
