import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactHtmlParser from "react-html-parser"
import PropTypes from "prop-types"
import React from "react"

const TextImageBlock = ({blockData, blockContent}) => {
    if (blockData.value.text) {
        if (blockData.value.align_image_left) {
            return (
                <div className="row">
                    <div className={"col-lg-" + blockData.value.image_col_size  + " text-center wow fadeInRight"}>
                        {blockContent.image ? (
                            <div className="img-fluid rounded" style={{margin:"0 auto", paddingBottom:"20px"}}>
                                <Img alt={blockContent.image.alt} fluid={blockContent.image.imageFile.childImageSharp.fluid} />
                            </div>
                        ) : null}
                    </div>
                    <div className={"col-lg-" + (12 - blockData.value.image_col_size) + " wow fadeInRight richText"}>
                        {ReactHtmlParser(blockData.value.text)}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <div className={"col-lg-" + (12 - blockData.value.image_col_size) + " wow fadeInRight richText"}>
                        {ReactHtmlParser(blockData.value.text)}
                    </div>
                    <div class={"col-lg-" + blockData.value.image_col_size  + " text-center wow fadeInRight"}>
                        {blockContent.image ? (
                            <div className="img-fluid rounded" style={{margin:"0 auto", paddingBottom:"20px"}}>
                                <Img alt={blockContent.image.alt} fluid={blockContent.image.imageFile.childImageSharp.fluid} />
                            </div>
                        ) : null}
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="row">
                <div class="col-lg-12 text-center wow fadeInRight">
                    {blockContent.image ? (
                        <div className="img-fluid" style={{margin:"0 auto", paddingBottom:"20px"}}>
                            <Img alt={blockContent.image.alt} fluid={blockContent.image.imageFile.childImageSharp.fluid} />
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

TextImageBlock.propTypes = {
}

TextImageBlock.defaultProps = {
}

export default TextImageBlock

