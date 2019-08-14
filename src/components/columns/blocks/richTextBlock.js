import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const RichTextBlock = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
        {ReactHtmlParser(blockData)}
        </div>
    </div>
)

RichTextBlock.propTypes = {
}

RichTextBlock.defaultProps = {
}

export default RichTextBlock