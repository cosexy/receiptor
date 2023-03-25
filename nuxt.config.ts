// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'author', content: 'Yuan - A Queer Developer' }
      ],
      script: [
        {
          src: 'https://cdn.tiny.cloud/1/qnkbcmjzf2jgpydlbxq6qpkom6k01agtov5cruqnfyj5qu3k/tinymce/6/tinymce.min.js',
          crossorigin: 'anonymous'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,500,600,700'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Merriweather:700,400,400'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/less/ant.less'
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ]
  ],
  googleFonts: {
    families: {
      'Nunito+Sans': true,
      Merriweather: true,
      'Dancing+Script': true
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
})
