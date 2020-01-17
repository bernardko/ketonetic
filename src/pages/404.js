import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Fix for 404 flash on redirect (https://github.com/gatsbyjs/gatsby/issues/5329)
const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return browser && (
    <Layout>
      <SEO title="404: Not found" />
      <section class="middle-box text-center animated fadeInDown">
        <h1>404</h1>
        <h3 class="font-bold">Page Not Found</h3>
        <div class="error-desc">
          Sorry, this doesn't seem to exist. Try navigating the site from the main menu at the top of the page.
        </div>
        <Link to="/" className="btn btn-primary m-t-xl">Return to Home Page</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
