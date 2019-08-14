import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TaggedH2Block = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 features-text wow fadeInLeft">
            <small>{blockData.tag}</small>
            <h2 class="tag">{blockData.title}</h2>
        </div>
    </div>
)

TaggedH2Block.propTypes = {
}

TaggedH2Block.defaultProps = {
}

export default TaggedH2Block