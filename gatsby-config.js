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
          resolve: "gatsby-plugin-google-tagmanager",
          options: {
            id: "GTM-NFVBF7S",

            // Include GTM in development.
            //
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: true,

            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            //
            // Defaults to null
            defaultDataLayer: { pageLanguage: "pt" },

            // Specify optional GTM environment details.
            // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            // dataLayerName: "YOUR_DATA_LAYER_NAME",

            // Name of the event that is triggered
            // on every Gatsby route change.
            //
            // Defaults to gatsby-route-change
            routeChangeEventName: "website-change-page",
          },
        },

         {
            resolve: 'gatsby-plugin-preconnect',
            options: {
              domains: ['https://cdn.cookielaw.org, https://www.googletagmanager.com, https://datocms-assets.com, https://s.ytimg.com'],
            },
        },

      'gatsby-plugin-preload-link-crossorigin',

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
