import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ActionButtonBlock from "./blocks/actionButtonBlock"
import ImageBlock from "./blocks/imageBlock"
import LineH2Block from "./blocks/lineH2Block"
import TaggedH2Block from "./blocks/taggedH2Block"
import RichTextBlock from "./blocks/richTextBlock"

import steak from "../../img/louis-hansel-oyUqUV1Q0Zg-unsplash.jpg"

const ArticleBlock = ({article}) => (
    <>
        <ImageBlock src={steak} alt="Steak" />
        <TaggedH2Block title="Perfectly designed" tag="INSPINIA" />
        <ActionButtonBlock richText="" buttonText="" link="" />
        <RichTextBlock richText="" />
    </>
)

ArticleBlock.propTypes = {
}

ArticleBlock.defaultProps = {
}

export default ArticleBlock