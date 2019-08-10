import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureSliderBlock from "../components/landing/featureSliderBlock"
import HighlightTextBlock from "../components/landing/highlightTextBlock"
import TextFeatureRowBlock from "../components/landing/textFeatureRowBlock"
import CenterImageFeatureBlock from "../components/landing/centerImageFeatureBlock"
import StackedFeatureListBlock from "../components/landing/stackedFeatureListBlock"
import ColumnBlock from "../components/columns/columnBlock"
import AuthorBlock from "../components/landing/authorBlock"
import AuthorQuoteBlock from "../components/landing/authorQuoteBlock"

const LandingPage = ({data}) => {
  const page = data.wagtail.landingPages[0]
  return (
    <Layout pageInfo={{backgroundImage: false}}>
      <SEO title="Landing Page" />
      {page.body.map((block, index) => {
        switch (block.type) {
          case 'feature_slider':
            return (
              <FeatureSliderBlock blockData={block.value} />
            )
          case 'text_feature_row':
            return (
              <TextFeatureRowBlock blockData={block.value} />
            )
          case 'center_image_feature':
            return (
              <CenterImageFeatureBlock blockData={block.value} />
            )
          case 'stacked_feature_list':
            return (
              <StackedFeatureListBlock blockData={block.value} />
            )
          case 'portrait_item_row':
            return (
              <FeatureSliderBlock blockData={block.value} />
            )
          case 'column':
            return (
              <ColumnBlock blockData={block.value} columnLayout={2} />
            )
          case 'highlight_text':
            return (
              <HighlightTextBlock blockData={block.value} />
            )
          case 'raw_html':
            return (
              <FeatureSliderBlock blockData={block.value} />
            )
          case 'author':
              return (
                  <AuthorBlock blockData={block.value} />
              )
          case 'author_quote':
              return (
                  <AuthorQuoteBlock blockData={block.value} />
              )
        }
      })}
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

export default LandingPage
