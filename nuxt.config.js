import path from 'path';
import twConfig from './tailwind.config';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'perannum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'font-body',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bottomsheet.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/icons',
      extension: '.vue',
    },
    {
      path: '~/components',
      extension: '.vue',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/google-fonts',
    'nuxt-purgecss',
    '@nuxtjs/i18n',
  ],

  googleFonts: {
    families: {
      Mulish: [300, 400, 600, 700, 900],
    },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: false,
    preconnect: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // 'nuxt-purgecss',
    // '@nuxtjs/i18n',
    'portal-vue/nuxt',
    '~/modules/toast',
    '~/modules/modal',
    // ['nuxt-tailvue', { toast: true }],
  ],

  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      short_name: 'Per Annum',
      name: 'Per Annum',
      lang: 'en',
      theme_color: twConfig.theme.extend.colors.surface[700],
    },
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'staleWhileRevalidate',
      },
    ],
  },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    // configPath: 'tailwind.config.js',
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'hi', iso: 'hi-IN', file: 'hi.js', dir: 'ltr' },
    ],
    langDir: '~/locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  serverMiddleware: {
    '/secret': '~/server-middleware/api.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
    preset: {
      stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          tailwindConfig: {
            test: /tailwind\.config/,
            chunks: 'all',
            priority: 10,
            name: true,
          },
        },
      },
    },
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 102400;
        // console.log(JSON.stringify(config, null, 2));
      }
    },
  },
};
