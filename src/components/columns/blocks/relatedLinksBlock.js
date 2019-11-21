import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import ListingBlock from "../listingBlock"

const RelatedLinksBlock = ({blockData, pages}) => (
    <>
    <div class="row">
        <div class={"col-lg-12 wow fadeInLeft m-t-xl m-b-lg"}>
            <div className="navy-line-left"></div>
            <i className="fa fa-book fa-2x m-r-xs text-danger" style={{marginTop: "7px", float:"left"}}></i>
            <h3 class="emphasis">LEARN MORE</h3>
        </div>
    </div>
    <ListingBlock pages={pages}  />
    </>
)

RelatedLinksBlock.propTypes = {
}

RelatedLinksBlock.defaultProps = {
}

export default RelatedLinksBlock