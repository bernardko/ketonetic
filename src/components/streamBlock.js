import React from "react"
import { graphql } from 'gatsby'

import FeatureSliderBlock from "./landing/featureSliderBlock"
import HighlightTextBlock from "./landing/highlightTextBlock"
import TextFeatureRowBlock from "./landing/textFeatureRowBlock"
import CenterImageFeatureBlock from "./landing/centerImageFeatureBlock"
import StackedFeatureListBlock from "./landing/stackedFeatureListBlock"
import ColumnBlock from "./columns/columnBlock"
import AuthorBlock from "./landing/authorBlock"
import AuthorQuoteBlock from "./landing/authorQuoteBlock"
import WideImageBlock from "./landing/wideImageBlock"

const StreamBlock = ({streamField}) => {
    return streamField.map((block, index) => {
        switch (block.type) {
            case 'feature_slider':
                return (
                    <FeatureSliderBlock blockData={block.value} />
                )
            case 'text_feature_row':
                return (
                    <TextFeatureRowBlock blockData={block.value} />
                )
            case 'center_image_feature':
                return (
                    <CenterImageFeatureBlock blockData={block.value} />
                )
            case 'stacked_feature_list':
                return (
                    <StackedFeatureListBlock blockData={block.value} />
                )
            case 'portrait_item_row':
                return (
                    <FeatureSliderBlock blockData={block.value} />
                )
            case 'column':
                return (
                    <ColumnBlock blockData={block.value.content} columnLayout={block.value.columns} />
                )
            case 'highlight_text':
                return (
                    <HighlightTextBlock blockData={block.value} />
                )
            case 'wide_image':
                return (
                    <WideImageBlock blockData={block.value} />
                )
            case 'raw_html':
                return (
                    <FeatureSliderBlock blockData={block.value} />
                )
            case 'author':
                return (
                    <AuthorBlock blockData={block.value} />
                )
            case 'author_quote':
                return (
                    <AuthorQuoteBlock blockData={block.value} />
                )
        }
    })
}

export default StreamBlock
