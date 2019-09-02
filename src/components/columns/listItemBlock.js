import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Moment from 'react-moment';
import 'moment-timezone';

const ListItemBlock = ({page}) => (
    <div className="vote-item">
        <div className="row">
            <div className="col-md-12">
                <Link className="vote-title no-vote" to={page.pageUrl}>
                    {page.title}
                </Link>
                <div className="vote-info no-vote">
                    <i className="fa fa-clock-o"></i> <a href="#">
                        <Moment format="D MMMM YYYY">
                            {page.lastPublishedAt}
                        </Moment>
                    </a>
                    {page.author && (
                        <>
                            <i className="fa fa-user"></i> <a href="#">{page.author.fullName}</a>
                        </>
                    )}
                    
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