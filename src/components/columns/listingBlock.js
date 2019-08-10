import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ListItemBlock from "./listItemBlock"

const ListingBlock = ({articles}) => (
    <Columns columnLayout={columnLayout}>
        <div className="row">
            <div className="col-lg-12">
                {(articles || []).map((article, index) => (
                    <ListItemBlock />
                ))}
            </div>
        </div>
    </Columns>
)

ListingBlock.propTypes = {
}

ListingBlock.defaultProps = {
}

export default ListingBlock