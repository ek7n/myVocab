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
      public:{
        API_KEY: "38569171-f1197dd247f175e2d3791625a"
      }
      
     }
};
