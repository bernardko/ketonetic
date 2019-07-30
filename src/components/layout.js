/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import PageHeader from "./pageHeader"
import Jumbotron from "./jumbotron"
import Footer from "./footer"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <PageHeader siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
      {pageInfo.twoCol ? (
        <section id="columns" className="container">
          <div className="row">
            <div className="col-sm-8">            
              {children}
            </div>
            <div className="col-sm-4">
              <Jumbotron />7
            </div>
          </div>
        </section>
      ) : (
        <section id="columns" className="container">
          <div className="row">
            <div className="col-sm-12">            
              {children}
            </div>
          </div>
        </section>
      )}
      <Footer />
      </>
    )}
  />
)

export default Layout
