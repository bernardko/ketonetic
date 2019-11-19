import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const SummaryBlock = ({blockData}) => (
    <div class="row">
        <div class={"col-lg-12 wow fadeInLeft summary-box " + blockData.value.section_classes}>
        {ReactHtmlParser(blockData.value.text)}
        </div>
    </div>
)

SummaryBlock.propTypes = {
}

SummaryBlock.defaultProps = {
}

export default SummaryBlock