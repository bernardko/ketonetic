import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <section id="header" className="container">
    <div className="row">
        <div className="col-sm-12">
            <h1>{siteTitle}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci semper, venenatis ligula in, accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet sapien purus, ac rhoncus magna lacinia at. Quisque eu eros nec quam sodales commodo non at lacus. Donec eget sem vulputate, scelerisque diam maximus, dignissim libero. Donec neque ex, ornare sit amet lorem eget, gravida consequat nisl. Pellentesque ut ante vel ex commodo sodales id id nulla. Integer id aliquam tortor. Vestibulum iaculis luctus lacus. Etiam efficitur dui vitae augue varius accumsan vel vel ipsum. Etiam et sagittis purus. Duis porta imperdiet molestie.</p>
        </div>
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
