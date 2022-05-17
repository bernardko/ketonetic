import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ActionButtonBlock = ({blockData}) => (
    <div class="row">
        <div class={blockData.value.align_center ? "col-lg-12 wow fadeInLeft text-center" : "col-lg-12 wow fadeInLeft"}>
            <p>{blockData.value.description}</p>
            {blockData.value.button_url && blockData.value.button_text && blockData.value.button_url.startsWith("/") && (
                <Link to={blockData.value.button_url} class="btn btn-primary btn-rounded">{blockData.value.button_text}</Link>
            )}
            {blockData.value.button_url && blockData.value.button_text && blockData.value.button_url.startsWith("http") && (
                <a href={blockData.value.button_url} class="btn btn-primary btn-rounded">{blockData.value.button_text}</a>
            )} 
        </div>
    </div>
)

ActionButtonBlock.propTypes = {
}

ActionButtonBlock.defaultProps = {
}

export default ActionButtonBlock