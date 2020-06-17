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
              includeInDevelopment: false,

              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              //
              // Defaults to null
              defaultDataLayer: { platform: "gatsby" },

              // Specify optional GTM environment details.
              gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
              gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
              dataLayerName: "YOUR_DATA_LAYER_NAME",

              // Name of the event that is triggered
              // on every Gatsby route change.
              //
              // Defaults to gatsby-route-change
              routeChangeEventName: "website-change-page",
            },
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
