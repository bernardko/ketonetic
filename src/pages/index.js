import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import ArticlesBlock from "../components/articles/articlesBlock"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index", twoCol: false }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <ArticlesBlock articles={[1,2,3,4,5,6,7,8,9,10]} />
    <Pagination paginator={{pages:3}} />
  </Layout>
)

export default IndexPage
