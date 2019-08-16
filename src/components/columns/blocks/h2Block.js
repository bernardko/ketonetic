import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const H2Block = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft m-t-lg">
            {blockData.show_line ? (
                <div class="navy-line-left"></div>
            ) : blockData.tag && (
                <small>{blockData.tag}</small>
            )}
            <h2>{blockData.title}</h2>
        </div>
    </div>
)

H2Block.propTypes = {
}

H2Block.defaultProps = {
}

export default H2Block