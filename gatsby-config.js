import defaultShareImage from "../img/ketonetic_share_image.png"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Ketonetic`,
    description: `A goal oriented approach to the ketogenic diet.`,
    author: `Bernard Ko`,
    shareImage: defaultShareImage,
    siteUrl: `https://www.ketnetic.com`,
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
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Wagtail",
        fieldName: 'wagtail',
        url: process.env.GATSBY_WAGTAIL_ENDPOINT || 'http://artoria:8001/graphql/',
        // refetchInterval: 10,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
