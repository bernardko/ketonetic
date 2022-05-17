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
import ThemeHeaderBlock from "./landing/themeHeaderBlock"
import Header from "./header"

const StreamBlock = ({streamField, pageData}) => {
    return streamField.map((block, index) => {
        switch (block.blockType) {
            case 'theme_header':
                return (
                    <ThemeHeaderBlock blockData={block} pageData={pageData} key={block.blockType+"-"+index} />
                )
            case 'default_header':
                return (
                    <Header blockData={block} pageData={pageData} key={block.blockType+"-"+index} />
                )
            case 'feature_slider':
                return (
                    <FeatureSliderBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'text_feature_row':
                return (
                    <TextFeatureRowBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'center_image_feature':
                return (
                    <CenterImageFeatureBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'stacked_feature_list':
                return (
                    <StackedFeatureListBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'column':
                return (
                    <ColumnBlock blockData={block} columnLayout={block.value.columns} key={block.blockType+"-"+index} />
                )
            case 'highlight_text':
                return (
                    <HighlightTextBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'wide_image':
                return (
                    <WideImageBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'raw_html':
                return (
                    <FeatureSliderBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'author':
                return (
                    <AuthorBlock blockData={block} key={block.blockType+"-"+index} />
                )
            case 'author_quote':
                return (
                    <AuthorQuoteBlock blockData={block} key={block.blockType+"-"+index} />
                )
        }
    })
}

export default StreamBlock
