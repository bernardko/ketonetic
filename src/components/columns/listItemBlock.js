import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListItemBlock = ({page}) => (
    <div className="vote-item">
        <div className="row">
            <div className="col-md-1">
                <div className="vote-icon">
                    <i className="fa fa-css3"> </i>
                </div>
            </div>
            <div className="col-md-11">
                <a href="#" className="vote-title no-vote">
                    {page.title}
                </a>
                <div className="vote-info no-vote">
                    <i className="fa fa-comments-o"></i> <a href="#">Comments (32)</a>
                    <i className="fa fa-clock-o"></i> <a href="#">1 Hours ago</a>
                    <i className="fa fa-user"></i> <a href="#">Andrew Williams</a>
                </div>
            </div>
        </div>
    </div>
)

ListItemBlock.propTypes = {
}

ListItemBlock.defaultProps = {
}

export default ListItemBlock