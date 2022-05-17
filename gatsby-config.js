require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Ketonetic`,
    description: `A goal oriented approach to the ketogenic diet.`,
    author: `Bernard Ko`,
    image: `https://ketonetic.com/static/ketonetic_share_image.png`,
    siteUrl: `https://ketonetic.com`,
    social: {
      twitter: {
        site: '',
        creator: '@bernard_ko',
      },
      fbAppID: '',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ketonetic`,
        short_name: `Ketonetic`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `e77362`,
        display: `minimal-ui`,
        icon: "public/favicon-16x16.png",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Wagtail",
        fieldName: 'wagtail',
        url: process.env.GATSBY_WAGTAIL_ENDPOINT || 'http://localhost:8002/graphql/',
        // refetchInterval: 10,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-115911234-2",
      },
    },
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'config/gatsby-express.json',
      }
    },
  ],
}
