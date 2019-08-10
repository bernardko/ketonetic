import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const RichTextBlock = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            {blockData}
        </div>
    </div>
)

RichTextBlock.propTypes = {
}

RichTextBlock.defaultProps = {
}

export default RichTextBlock