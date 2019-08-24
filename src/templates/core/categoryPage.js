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
        <SEO title={page.pageTitle} />
        {page.body.length > 0 ? (
            <StreamBlock streamField={page.body} pageData={page} />
        ) : (
            <Header pageTitle={page.title} intro={page.intro} />
        )}
        <ListingBlock pages={page.landingPages} columnLayout={2} />
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
                searchDescription
                slug
                specificPageType
                pageUrl
                intro
                body
                numPerPage
                landingPages {
                    title
                    pageTitle
                    lastPublishedAt
                    slug
                    specificPageType
                    pageUrl
                    intro
                }
            }
        }
    }
`

export const previewQuery = `
    query($slug: String, $previewToken: String) {
        categoryPages($slug: String, $previewToken: String) {
            title
            pageTitle
            searchDescription
            slug
            specificPageType
            pageUrl
            intro
            body
            numPerPage
            landingPages {
                title
                pageTitle
                lastPublishedAt
                slug
                specificPageType
                pageUrl
                intro
            }
        }
    }
`

export default CategoryPage
