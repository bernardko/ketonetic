import React from "react"

const AuthorQuoteBlock = ({blockData}) => (
<section class="comments gray-section" style={{marginTop:0}}>
    <div class="container">
        <div class="row features-block">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <div class="bubble">
                    {blockData.quote}
                </div>
                <div class="comments-avatar">
                    <a href="" class="float-left">
                        {blockData.portrait && (
                            <img src={blockData.portrait.src} alt={blockData.portrait.alt} />
                        )}
                    </a>
                    <div class="media-body">
                        <div class="commens-name">
                            {blockData.first_name + " " + blockData.last_name}
                        </div>
                        {blockData.position && (
                            <small class="text-muted">{blockData.position}</small>
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