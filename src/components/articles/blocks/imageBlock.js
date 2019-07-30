import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ImageBlock = ({src, alt}) => (
    <div class="row">
        <div class="col-lg-12 text-center wow fadeInRight">
            <img src={src} alt={alt} class="img-fluid" />
        </div>
    </div>
)

ImageBlock.propTypes = {
}

ImageBlock.defaultProps = {
}

export default ImageBlock

