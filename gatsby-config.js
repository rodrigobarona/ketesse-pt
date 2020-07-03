module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
         {
          resolve: 'gatsby-plugin-html-attributes',
          options: {
            lang: 'pt'
          }
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Ketesse 25mg`,
            short_name: `Ketesse`,
            start_url: `/`,
            background_color: `#8A5395`,
            theme_color: `#8A5395`,
            display: `standalone`,
            icon: `${__dirname}/static/images/icon.png`, 
            crossOrigin: `use-credentials`,
          },
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
       
        
        {
              resolve: `gatsby-plugin-gdpr-cookies`,
              options: {
                googleAnalytics: {
                  trackingId: '', // leave empty if you want to disable the tracker
                  cookieName: 'gatsby-gdpr-google-analytics', // default
                  anonymize: true // default
                },
                googleTagManager: {
                  trackingId: 'GTM-NFVBF7S', // leave empty if you want to disable the tracker
                  cookieName: 'gatsby-gdpr-google-tagmanager', // default
                  dataLayerName: 'dataLayer', // default
                },
                facebookPixel: {
                  pixelId: '', // leave empty if you want to disable the tracker
                  cookieName: 'gatsby-gdpr-facebook-pixel', // default
                },
                // defines the environments where the tracking should be available  - default is ["production"]
                environments: ['production']
              },
            },

        {
            resolve: 'gatsby-plugin-preconnect',
            options: {
              domains: ['https://www.googletagmanager.com'],
            },
        },
        

        {
              resolve: "gatsby-plugin-anchor-links",
              options: {
                offset: -87
              }
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
