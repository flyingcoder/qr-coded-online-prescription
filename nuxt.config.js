/* eslint-disable prettier/prettier */
import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Reseta QRx',
    title: 'reseta QRx',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //'@/assets/vars/colors.scss',
    '@/assets/scss/style.scss',
    'vue-swipe-actions/dist/vue-swipe-actions.css',
  ],

  //styleResources: {
  //  scss: ['./assets/vars/*.scss']
  //},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/filters.js', '~plugins/echo.js', '~plugins/bus.js', '~plugins/preloader.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: '#1ac6b6',
          accent: '#1ac6b6',
          secondary: '#00203f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.accent4,
          success: '#1ac6b6',
        },
        light: {
          primary: '#1ac6b6',
          accent: '#1ac6b6',
          secondary: '#00203f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.accent4,
          success: '#1ac6b6',
        },
      },
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    //'@nuxtjs/style-resources',
  ],

  pwa: {
    manifest: {
      name: 'Reseta QRx',
      short_name: 'ResetaQrx',
      description: 'Your quickest online prescription.',
      lang: 'fa',
      useWebmanifestExtension: false
    },
    workbox: {
      dev: true // or use a global variable to track the current NODE_ENV, etc to determine dev mode
    }
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url:
          process.env.NODE_ENV === 'production'
            ? 'https://api.resetaqrx.com'
            : 'http://localhost:8000',
        endpoints: {
          login: {
            url: '/api/login',
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post',
          },
        },
      },
    },
    redirect: {
      login: '/login',
      home: '/dashboard',
    },
  },

  axios: {
    // proxy: true,
    credentials: true,
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://api.resetaqrx.com/api'
        : 'http://localhost:8000/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.resetaqrx.com'
        : 'http://localhost:8000',
  },
  privateRuntimeConfig: {
    pusherApi: process.env.puserApi
  },
}
