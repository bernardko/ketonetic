import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ActionButtonBlock from "./blocks/actionButtonBlock"
import TextImageBlock from "./blocks/textImageBlock"
import LineH2Block from "./blocks/lineH2Block"
import TaggedH2Block from "./blocks/taggedH2Block"
import RichTextBlock from "./blocks/richTextBlock"
import SummaryBlock from "./blocks/summaryBlock"
import RelatedLinksBlock from "./blocks/relatedLinksBlock"
import ListingBlock from "./listingBlock"
import Columns from "./columns"
import H2Block from "./blocks/h2Block"

const ColumnBlock = ({blockData, columnLayout}) => (
    <Columns columnLayout={columnLayout}>
        {blockData.value.content.map((block, index) => {
            switch (block.type) {
                case 'tagged_h2':
                    return (
                        <TaggedH2Block blockData={block} />
                    )
                case 'line_h2':
                    return (
                        <LineH2Block blockData={block} />
                    )
                case 'h2':
                    return (
                        <H2Block blockData={block} />
                    )
                case 'text_image':
                    return (
                        <TextImageBlock blockData={block} blockContent={blockData.content[index]} />
                    )
                case 'rich_text':
                    return (
                        <RichTextBlock blockData={block} />
                    )
                case 'summary':
                    return (
                        <SummaryBlock blockData={block} />
                    )
                case 'action_button':
                    return (
                        <ActionButtonBlock blockData={block} />
                    )
                case 'related_links':
                    return (
                        <RelatedLinksBlock blockData={block} pages={blockData.content[index].links} />
                    )
            }
        })}
    </Columns>
)

ColumnBlock.propTypes = {
}

ColumnBlock.defaultProps = {
}

export default ColumnBlock