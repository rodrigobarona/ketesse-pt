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
        }
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
            resolve: 'gatsby-plugin-preconnect',
            options: {
              domains: ['https://www.googletagmanager.com'],
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
              id: `GTM-NFVBF7S`,
              includeInDevelopment: false,
              defaultDataLayer: { platform: `gatsby` },
              routeChangeEventName: `website-change-page`,
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
