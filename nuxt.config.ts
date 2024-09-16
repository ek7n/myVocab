export default {
  app: {
    head: {
      script: [
        // AdSense script'i
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          async: true,
          'data-ad-client': 'ca-pub-7087643124045192',
        },
        // Google Analytics script'i
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-RJB5W3YV6Z',
          async: true,
        },
        {
          type: 'text/javascript',
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RJB5W3YV6Z');
          `,
        },
      ],
    },
  },
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
