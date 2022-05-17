import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StreamBlock from "../../components/streamBlock"
import Columns from "../../components/columns/columns"
import ListingBlock from "../../components/columns/listingBlock"
import Header from "../../components/header"

const CategoryPage = ({data}) => {
    const page = data.wagtail.categoryPages[0]
    return (
    <Layout pageInfo={{backgroundImage: false}}>
        <SEO title={page.pageTitle} description={page.searchDescription} feedImage={page.searchImage} />
        {page.body.length > 0 ? (
            <StreamBlock streamField={page.body} pageData={page} />
        ) : (
            <Header pageData={page} />
        )}
        <Columns columnLayout={1}>
            <ListingBlock pages={page.landingPages} />
        </Columns>
    </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        wagtail
        {
            categoryPages(slug: $slug) {
                title
                pageTitle
                breadcrumbs {
                    menuTitle
                    linkUrl
                }
                searchDescription
                searchImage {
                    ...fullImage
                }
                slug
                specificPageType
                pageUrl
                intro
                body {
                    ...bodyFields
                }
                numPerPage
                landingPages {
                    title
                    pageTitle
                    searchDescription
                    firstPublishedAt
                    lastPublishedAt
                    slug
                    specificPageType
                    pageUrl
                    author {
                        fullName
                    }
                    intro
                    searchImage {
                        id
                        src
                        imageFile {
                            childImageSharp {
                                fluid (maxWidth: 300) {
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
    }
`

export const previewQuery = `
    query($slug: String, $previewToken: String) {
        categoryPages(slug: $slug, previewToken: $previewToken) {
            title
            pageTitle
            breadcrumbs {
                menuTitle
                linkUrl
            }
            searchDescription
            searchImage {
                ...fullImage
            }
            slug
            specificPageType
            pageUrl
            intro
            body {
                ..bodyFields
            }
            numPerPage
            landingPages {
                title
                pageTitle
                searchDescription
                firstPublishedAt
                lastPublishedAt
                slug
                specificPageType
                pageUrl
                author {
                    fullName
                }
                intro
                searchImage {
                    id
                    src
                    alt
                    credit
                }
            }
        }
    }
`

export default CategoryPage
