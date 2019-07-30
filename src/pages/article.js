import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import ArticleBlock from "../components/articles/articleBlock"
import SEO from "../components/seo"

const ArticlePage = () => (
  <Layout pageInfo={{ pageName: "index", twoCol: true }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <ArticleBlock articles={{}} />
  </Layout>
)

export default ArticlePage