import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section class="middle-box text-center animated fadeInDown">
      <h1>404</h1>
      <h3 class="font-bold">Page Not Found</h3>
      <div class="error-desc">
        Sorry, this doesn't seem to exist. Try navigating the site from the main menu at the top of the page.
      </div>
      <a href="/" class="btn btn-primary m-t-xl">Return to Home Page</a>
    </section>
  </Layout>
)

export default NotFoundPage
