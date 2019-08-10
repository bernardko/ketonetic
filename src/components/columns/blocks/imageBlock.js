import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ImageBlock = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 text-center wow fadeInRight">
            <img src={blockData.src} alt={blockData.alt} class="img-fluid" />
        </div>
    </div>
)

ImageBlock.propTypes = {
}

ImageBlock.defaultProps = {
}

export default ImageBlock

