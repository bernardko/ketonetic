import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ActionButtonBlock = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            <p>{blockData.description}</p>
            <a href={blockData.button_url} class="btn btn-primary">{blockData.button_text}</a>    
        </div>
    </div>
)

ActionButtonBlock.propTypes = {
}

ActionButtonBlock.defaultProps = {
}

export default ActionButtonBlock