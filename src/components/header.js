import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Moment from 'react-moment';
import 'moment-timezone';
import Breadcrumbs from './breadcrumbs'

const Header = ({ blockData, pageData }) => (
  <section id="header" className="container">
    <div className="row">
        <div className="col-sm-12">
            {pageData.breadcrumbs ? (
                <>
                <Breadcrumbs breadcrumbs={pageData.breadcrumbs} />
                <h1 style={{marginTop:0}}>{pageData.title}</h1>
                </>
            ):(
                <h1>{pageData.title}</h1>
            )}
            {pageData.intro && (
                <p>{pageData.intro}</p>
            )}
            {pageData.author && (
                <div className="col-sm-4">
                    <div className="social-feed-box no-borders">
                        <div className="social-avatar">
                            {pageData.author.image && (
                                <a href="" class="float-left">
                                    <img alt={pageData.author.image.alt} src={pageData.author.image.src} className="rounded-circle" width={50}/>
                                </a>
                            )}
                            <div class="media-body" style={{color:"#aeaeae"}}>
                                <a href="#">
                                    {pageData.author.fullName}
                                </a>
                                <small class="text-muted">published on <Moment format="D MMMM YYYY">{pageData.lastPublishedAt}</Moment></small>
                            </div>
                        </div>
                    </div>
                </div>                  
            )}
        </div>
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
