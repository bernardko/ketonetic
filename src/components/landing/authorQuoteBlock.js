import React from "react"
import Img from "gatsby-image"

const AuthorQuoteBlock = ({blockData}) => (
<section class="comments gray-section" style={{marginTop:0}}>
    <div class="container">
        <div class="row features-block">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <div class="bubble">
                    {blockData.value.quote}
                </div>
                <div class="comments-avatar">
                    <a href="" class="float-left">
                        {blockData.portrait && blockData.portrait.imageFile ? (
                            <Img alt={blockData.portrait.alt} fluid={blockData.portrait.imageFile.childImageSharp.fluid} className="img-fluid rounded-circle" />
                        ):(
                            <img alt={blockData.portrait.alt} src={blockData.portrait.src} className="img-fluid rounded-circle" />
                        )}
                    </a>
                    <div class="media-body">
                        <div class="commens-name">
                            {blockData.value.first_name + " " + blockData.last_name}
                        </div>
                        {blockData.value.position && (
                            <small class="text-muted">{blockData.value.position}</small>
                        )}
                    </div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>
</section>
)

export default AuthorQuoteBlock