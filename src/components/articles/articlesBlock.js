import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ArticleItemBlock from "./articleItemBlock"

const ArticlesBlock = ({articles}) => (
    <div className="row">
        <div className="col-lg-12">
            {(articles || []).map((article, index) => (
                <ArticleItemBlock />
            ))}
        </div>
    </div>
)

ArticlesBlock.propTypes = {
}

ArticlesBlock.defaultProps = {
}

export default ArticlesBlock