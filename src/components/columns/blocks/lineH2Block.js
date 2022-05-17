import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const LineH2Block = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            <div class="navy-line-left"></div>
            <h2 class="line">{blockData.value.title}</h2>
        </div>
    </div>
)

LineH2Block.propTypes = {
}

LineH2Block.defaultProps = {
}

export default LineH2Block