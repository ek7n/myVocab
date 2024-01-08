export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-7087643124045192'
    }]
  ],
  runtimeConfig: { 
      apiSecret:'ertert',
      GUARDIAN_API_KEY:"2bab73a6-7dde-4347-8658-c32b3c6453d9",
      public:{
        API_KEY: "38569171-f1197dd247f175e2d3791625a"
      }
      
     }
};
