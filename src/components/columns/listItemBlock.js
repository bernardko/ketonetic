import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Moment from 'react-moment';
import 'moment-timezone';
import Img from "gatsby-image"

const ListItemBlock = ({page}) => (
    <div className="vote-item">
        <div className="row">
            {page.searchImage ? (
                <div className="col-md-2">
                    <div className="img-fluid rounded-circle" style={{margin:"0 auto"}}>
                        <Img alt={page.searchImage.alt} fluid={page.searchImage.imageFile.childImageSharp.fluid} />
                    </div>
                </div>
            ) : null}
            <div className={page.searchImage ? "col-md-10": "col-md-12"}>
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
                            <i className="fa fa-user"></i> <Link to="/about/">{page.author.fullName}</Link>
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