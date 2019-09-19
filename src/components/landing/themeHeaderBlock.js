import React from "react"
import Moment from 'react-moment';
import 'moment-timezone';
import Breadcrumbs from '../breadcrumbs'
import Img from "gatsby-image"

const ThemeHeaderBlock = ({blockData, pageData}) => (
    <section className={"theme-section " + blockData.value.section_classes} style={{marginBottom: 0, paddingTop:"15px", paddingBottom:"15px"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 wow zoomIn">
                {pageData.breadcrumbs.length > 0 ? (
                        <>
                        <Breadcrumbs breadcrumbs={pageData.breadcrumbs} />
                        <h1 style={{marginTop:0}}>{blockData.value.title}</h1>
                        </>
                ):(
                    <h1>{blockData.value.title}</h1>
                )}
                </div>
                <div className={"col-md-" + (pageData.author ? "8" : "12") + " wow zoomIn m-t-xs"}>
                    <p>{blockData.value.text}</p>
                </div>
                {pageData.author && (
                    <div class="col-md-4 m-t-xs">    
                        <div className="social-feed-box b-r-md">
                            <div className="social-avatar">
                                {pageData.author.image && (
                                    <a href="/about/" class="float-left">
                                        <Img alt={pageData.author.image.alt} fixed={pageData.author.image.imageFile.childImageSharp.fixed} className="rounded-circle m-r-sm" />
                                    </a>
                                )}
                                <div class="media-body" style={{color:"#aeaeae"}}>
                                    <a href="/about/">
                                         {pageData.author.fullName}
                                    </a>
                                    <small class="text-muted">published on <Moment format="D MMMM YYYY">{pageData.lastPublishedAt}</Moment></small>
                                </div>
                                <div className="social-body">
                                    <p>{pageData.author.intro}</p>
                                </div>
                            </div>
                        </div>                    
                    </div>
                )}
            </div>
        </div>
    </section>
)

export default ThemeHeaderBlock