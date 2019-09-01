import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StreamBlock from "../../components/streamBlock"

const LandingPage = ({data}) => {
  const page = data.wagtail.landingPages[0]
  return (
    <Layout pageInfo={{backgroundImage: false}}>
      <SEO title={page.pageTitle} />
      <StreamBlock streamField={page.body} pageData={page} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail
    {
        landingPages(slug: $slug) {
            title
            pageTitle
            breadcrumbs {
              menuTitle
              linkUrl
            }
            intro
            lastPublishedAt
            searchDescription
            slug
            specificPageType
            pageUrl
            author {
              fullName
              image {
                src
                alt
                credit
              }
              intro
              description
            }
            body
        }
    }
  }
`

export const previewQuery = `
  query($slug: String, $previewToken: String) {
    landingPages(slug: $slug, previewToken: $previewToken) {
        title
        pageTitle
        breadcrumbs {
          menuTitle
          linkUrl
        }
        intro
        lastPublishedAt
        searchDescription
        slug
        specificPageType
        pageUrl
        author {
          fullName
          image {
            src
            alt
            credit
          }
          intro
          description
        }
        body
    }
  }
`

export default LandingPage
