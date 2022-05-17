/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, feedImage, isBlogPost }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            social {
              twitter {
                site
                creator
              }
              fbAppID
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const shareImage = feedImage || site.siteMetadata.image
  const url = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e77362" />
      <meta name="apple-mobile-web-app-title" content="Ketonetic" />
      <meta name="application-name" content="Ketonetic" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={shareImage} />
      {site.siteMetadata.social.fbAppID ? <meta property="fb:app_id" content={site.siteMetadata.social.fbAppID} /> : null }

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {site.siteMetadata.social.twitter.site ? <meta name="twitter:site" content={site.siteMetadata.social.twitter.site} /> : null }
      {site.siteMetadata.social.twitter.creator ? <meta name="twitter:creator" content={site.siteMetadata.social.twitter.creator} /> : null }
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={shareImage} />

      <body className="landing-page no-skin-config" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
