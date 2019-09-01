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
        switch (block.type) {
            case 'theme_header':
                return (
                    <ThemeHeaderBlock blockData={block.value} pageData={pageData} key={block.type+"-"+index} />
                )
            case 'default_header':
                return (
                    <Header blockData={block.value} pageData={pageData} key={block.type+"-"+index} />
                )
            case 'feature_slider':
                return (
                    <FeatureSliderBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'text_feature_row':
                return (
                    <TextFeatureRowBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'center_image_feature':
                return (
                    <CenterImageFeatureBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'stacked_feature_list':
                return (
                    <StackedFeatureListBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'portrait_item_row':
                return (
                    <FeatureSliderBlock blockData={block.value} />
                )
            case 'column':
                return (
                    <ColumnBlock blockData={block.value.content} columnLayout={block.value.columns} key={block.type+"-"+index} />
                )
            case 'highlight_text':
                return (
                    <HighlightTextBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'wide_image':
                return (
                    <WideImageBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'raw_html':
                return (
                    <FeatureSliderBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'author':
                return (
                    <AuthorBlock blockData={block.value} key={block.type+"-"+index} />
                )
            case 'author_quote':
                return (
                    <AuthorQuoteBlock blockData={block.value} key={block.type+"-"+index} />
                )
        }
    })
}

export default StreamBlock
