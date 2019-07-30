import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ActionButtonBlock = ({richText, buttonText, link}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
            <a href="" class="btn btn-primary">Learn more</a>    
        </div>
    </div>
)

ActionButtonBlock.propTypes = {
}

ActionButtonBlock.defaultProps = {
}

export default ActionButtonBlock