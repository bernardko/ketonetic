import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ActionButtonBlock from "./blocks/actionButtonBlock"
import ImageBlock from "./blocks/imageBlock"
import LineH2Block from "./blocks/lineH2Block"
import TaggedH2Block from "./blocks/taggedH2Block"
import RichTextBlock from "./blocks/richTextBlock"
import Columns from "./columns"
import H2Block from "./blocks/h2Block"

const ColumnBlock = ({blockData, columnLayout}) => (
    <Columns columnLayout={columnLayout}>
        {blockData.map((block, index) => {
            switch (block.type) {
                case 'tagged_h2':
                    return (
                        <TaggedH2Block blockData={block.value} />
                    )
                case 'line_h2':
                    return (
                        <LineH2Block blockData={block.value} />
                    )
                case 'h2':
                    return (
                        <H2Block blockData={block.value} />
                    )
                case 'image':
                    return (
                        <ImageBlock blockData={block.value} />
                    )
                case 'rich_text':
                    return (
                        <RichTextBlock blockData={block.value} />
                    )
                case 'action_button':
                    return (
                        <ActionButtonBlock blockData={block.value} />
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