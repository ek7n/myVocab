export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: { 
      apiSecret:'ertert',
      public:{
        API_KEY: "38569171-f1197dd247f175e2d3791625a"
      }
      
     }
};
