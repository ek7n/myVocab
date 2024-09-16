// plugins/gtag.client.js
export default defineNuxtPlugin((nuxtApp) => {
                                                                      if (process.env.NODE_ENV !== 'production') return;
                                                                    
                                                                      window.dataLayer = window.dataLayer || [];
                                                                      function gtag() {
                                                                        dataLayer.push(arguments);
                                                                      }
                                                                      gtag('js', new Date());
                                                                      gtag('config', 'G-RJB5W3YV6Z');
                                                                    
                                                                      const script = document.createElement('script');
                                                                      script.async = true;
                                                                      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RJB5W3YV6Z';
                                                                      document.head.appendChild(script);
                                                                    });
                                                                    