// Vendor Modules
import { graphql } from 'gatsby'

export const gatsbyFragments = graphql`
  fragment quarterImage on Wagtail_ImageObjectType {
    src: rendition(format: "quarter") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment iconImage on Wagtail_ImageObjectType {
    src: rendition(format: "icon") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment largeIconImage on Wagtail_ImageObjectType {
    src: rendition(format: "large-icon") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment fullImage on Wagtail_ImageObjectType {
    src: rendition(format: "full") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment maxImage on Wagtail_ImageObjectType {
    src: rendition(format: "max") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment facebookImage on Wagtail_ImageObjectType {
    src: rendition(format: "facebook") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment twitterImage on Wagtail_ImageObjectType {
    src: rendition(format: "twitter") {
      url
      width
      height
    }
    alt
    credit
  }
`

export const previewFragments = `
  fragment quarterImage on ImageObjectType {
    src: rendition(format: "quarter") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment iconImage on ImageObjectType {
    src: rendition(format: "icon") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment largeIconImage on ImageObjectType {
    src: rendition(format: "large-icon") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment fullImage on ImageObjectType {
    src: rendition(format: "full") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment maxImage on ImageObjectType {
    src: rendition(format: "max") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment facebookImage on ImageObjectType {
    src: rendition(format: "facebook") {
      url
      width
      height
    }
    alt
    credit
  }

  fragment twitterImage on ImageObjectType {
    src: rendition(format: "twitter") {
      url
      width
      height
    }
    alt
    credit
  }
`