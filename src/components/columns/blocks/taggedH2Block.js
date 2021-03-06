import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TaggedH2Block = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            <small>{blockData.value.tag}</small>
            <h2 class="tag">{blockData.value.title}</h2>
        </div>
    </div>
)

TaggedH2Block.propTypes = {
}

TaggedH2Block.defaultProps = {
}

export default TaggedH2Block