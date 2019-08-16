import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ pageTitle, intro }) => (
  <section id="header" className="container">
    <div className="row">
        <div className="col-sm-12">
            <h1>{pageTitle}</h1>
            <p>{intro}</p>
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
