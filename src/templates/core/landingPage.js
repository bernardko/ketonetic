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
      <StreamBlock streamField={page.body} />
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
            searchDescription
            slug
            specificPageType
            urlPath
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
        searchDescription
        slug
        specificPageType
        urlPath
        body
    }
  }
`

export default LandingPage
