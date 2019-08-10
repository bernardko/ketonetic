import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ActionButtonBlock from "./blocks/actionButtonBlock"
import ImageBlock from "./blocks/imageBlock"
import LineH2Block from "./blocks/lineH2Block"
import TaggedH2Block from "./blocks/taggedH2Block"
import RichTextBlock from "./blocks/richTextBlock"
import Columns from "./columns"

const ColumnBlock = ({blockData, columnLayout}) => (
    <Columns columnLayout={columnLayout}>
        {blockData.map((block, index) => {
            switch (block.type) {
                case 'tagged_h2':
                    return (
                        <TaggedH2Block blockData={block} />
                    )
                case 'line_h2':
                    return (
                        <LineH2Block blockData={block} />
                    )
                case 'image':
                    return (
                        <ImageBlock blockData={block} />
                    )
                case 'rich_text':
                    return (
                        <RichTextBlock blockData={block} />
                    )
                case 'action_button':
                    return (
                        <ActionButtonBlock blockData={block} />
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