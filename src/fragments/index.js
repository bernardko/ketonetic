// Vendor Modules
import { graphql } from 'gatsby'

export const gatsbyFragments = graphql`
  fragment bodyFields on Wagtail_BodyType {
    __typename
    ... on Wagtail_DefaultStreamBlock {
      blockType
      value
    }
    ... on Wagtail_WideImageBlock {
      blockType
      value
      image {
        id
        src
        imageFile {
          childImageSharp {
            fluid (maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        credit
      }
    }
    ... on Wagtail_AuthorBlock {
      blockType
      value
      portrait {
        id
        src
        imageFile {
          childImageSharp {
            fluid (maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        credit
      }
    }
    ... on Wagtail_FeatureSliderBlock {
      blockType
      value
      features {
        image {
          id
          src
          imageFile {
            childImageSharp {
              fluid (maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          credit
        }
      }
    }
    ... on Wagtail_CenterImageFeatureBlock {
      blockType
      value
      image {
        id
        src
        imageFile {
          childImageSharp {
            fluid (maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        credit
      }
    }
    ... on Wagtail_StackedFeatureListBlock {
      blockType
      value
      features {
        image {
          id
          src
          imageFile {
            childImageSharp {
              fluid (maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          credit
        }
      }
    }
  }

  fragment smallPortrait on Wagtail_ImageObjectType {
    id
    src
    imageFile {
      childImageSharp {
        fixed (width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    alt
    credit
  }

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
  fragment bodyFields on Wagtail_BodyType {
    __typename
    ... on Wagtail_DefaultStreamBlock {
      blockType
      value
    }
    ... on Wagtail_WideImageBlock {
      blockType
      value
      image {
        id
        src
        imageFile {
          childImageSharp {
            fluid (maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        credit
      }
    }
    ... on Wagtail_AuthorBlock {
      blockType
      value
      portrait {
        id
        src
        imageFile {
          childImageSharp {
            fluid (maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        credit
      }
    }
    ... on Wagtail_FeatureSliderBlock {
      blockType
      value
      features {
        image {
          id
          src
          imageFile {
            childImageSharp {
              fluid (maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          credit
        }
      }
    }
    ... on Wagtail_CenterImageFeatureBlock {
      blockType
      value
      image {
        id
        src
        imageFile {
          childImageSharp {
            fluid (maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        credit
      }
    }
    ... on Wagtail_StackedFeatureListBlock {
      blockType
      value
      features {
        image {
          id
          src
          imageFile {
            childImageSharp {
              fluid (maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          credit
        }
      }
    }
  }

  fragment smallPortrait on Wagtail_ImageObjectType {
    id
    src
    imageFile {
      childImageSharp {
        fixed (width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    alt
    credit
  }

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