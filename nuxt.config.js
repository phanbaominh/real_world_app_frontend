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
    title: 'Conduit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Medium clone following the realworld spec',
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
  plugins: ['~/plugins/axios.ts', '~/plugins/dayjs.ts', '~/plugins/api.ts'],
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
    '@nuxtjs/toast',
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
      solid: [
        'faHeart',
        'faPlus',
        'faCog',
        'faEdit',
        'faTrash',
        'faBars',
        'faHome',
      ],
    },
  },
  build: {},
  server: {
    port: process.env.PORT || 8000,
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
        globalToken: false,
      },
    },
  },
  toast: {
    duration: 3000,
    theme: 'outline',
    containerClass: 'custom-toast-container',
    className: 'custom-toast-content',
    position: 'top-right',
    keepOnHover: true,
  },
  router: {
    middleware: ['auth'],
  },
};
