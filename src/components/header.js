import { Link } from "gatsby"
import Img from "gatsby-image";
import PropTypes from "prop-types"
import React from "react"
import Moment from 'react-moment';
import 'moment-timezone';
import Breadcrumbs from './breadcrumbs'

const Header = ({ blockData, pageData }) => (
  <section id="header" className="container">
    <div className="row">
        <div className="col-sm-12">
            {pageData.breadcrumbs.length > 0 ? (
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
                                <a href="/about/" class="float-left">
                                    {pageData.author.image.imageFile ? (
                                        <Img alt={pageData.author.image.alt} fixed={pageData.author.image.imageFile.childImageSharp.fixed} className="rounded-circle m-r-sm"/>
                                    ):(
                                        <img alt={pageData.author.image.alt} src={pageData.author.image.src} className="rounded-circle m-r-sm"/>
                                    )}
                                </a>
                            )}
                            <div class="media-body" style={{color:"#aeaeae"}}>
                                <a href="/about/">
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
