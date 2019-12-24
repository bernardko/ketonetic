import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
    <footer className="mt-auto py-3 gray-section">
        <div className="container">
            <div className="row m-xs p-w-xs">
                <p>The information provided on ketonetic.com is not medical advice and should be used for educational purposes only.</p>
            </div>
            <div className="row">

                <ul className="nav nav-pills nav-footer">
                    <li><strong>&copy; 2019 ketonetic.com</strong></li>
                    <li>
                        <Link to="/about/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy/">Privacy Policy</Link>
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
