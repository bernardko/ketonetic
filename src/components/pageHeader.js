/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import ImageHeader from "./imageHeader"
import Navbar from "./navBar"

const PageHeader = ({ siteTitle, pageInfo }) => (
    <>
        <Navbar pageInfo={pageInfo} />
        { pageInfo.backgroundImage ? (
            <ImageHeader siteTitle={siteTitle} />
        ) : (
            <Header siteTitle={siteTitle} />
        )}
    </>
)

export default PageHeader
