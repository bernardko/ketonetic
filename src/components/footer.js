import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
    <footer className="mt-auto py-3 gray-section">
        <div className="container">
            <div className="row">
                <ul class="nav nav-pills nav-footer">
                    <li><strong>&copy; 2019 ketonetic.com</strong></li>
                    <li>
                        <a href="/privacy-policy/">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
