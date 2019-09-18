import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StreamBlock from "../../components/streamBlock"
import ListingBlock from "../../components/columns/listingBlock"
import Header from "../../components/header"

const CategoryPage = ({data}) => {
    const page = data.wagtail.categoryPages[0]
    return (
    <Layout pageInfo={{backgroundImage: false}}>
        <SEO title={page.pageTitle} description={page.searchDescription} feedImage={page.feedImage} />
        {page.body.length > 0 ? (
            <StreamBlock streamField={page.body} pageData={page} />
        ) : (
            <Header pageData={page} />
        )}
        <ListingBlock pages={page.landingPages} columnLayout={1} />
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
                    lastPublishedAt
                    slug
                    specificPageType
                    pageUrl
                    author {
                        fullName
                    }
                    intro
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
                lastPublishedAt
                slug
                specificPageType
                pageUrl
                author {
                    fullName
                }
                intro
            }
        }
    }
`

export default CategoryPage
