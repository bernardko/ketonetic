import React from "react"

const FeatureSliderBlock = ({blockData}) => (
    <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        {blockData.value.features.map((feature, index) => {
            const isActive = index == 1 ? "active" : null
            return (
                <li data-target="#inSlider" data-slide-to={index} className={isActive} key={blockData.value.section_id+"-indicators-"+index}></li>
            )
        })}
        </ol>
        <div className="carousel-inner" role="listbox">
            {blockData.value.features.map((feature, index) => {
                return (
                    <div className="carousel-item active" key={blockData.value.section_id+"-features-"+index}>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>{feature.title}</h1>
                                <p>{feature.subtitle}</p>
                                {feature.button_url && feature.button_text && feature.caption_url && feature.caption_text && (
                                <p>
                                    <a className="btn btn-lg btn-primary" href="{feature.button_url}" role="button">{feature.button_text}</a>
                                    <a className="caption-link" href="{feature.caption_url}" role="button">{feature.caption_text}</a>
                                </p>
                                )}
                            </div>
                            {feature.overlay_image && (
                            <div className="carousel-image wow zoomIn">
                                <img src="{feature.image.src}" alt="{feature.image.alt}"/>
                            </div>
                            )}
                        </div>
                        {blockData.features[index].image && blockData.features[index].image.imageFile && feature.image_position ? (
                            <div className="header-back" style={{background: 'url("'+ blockData.features[index].image.imageFile.childImageSharp.fluid.src +'") '+ feature.image_position}}></div>
                        ):(
                            <div className="header-back" style={{background: 'url("'+ blockData.features[index].image.src +'") '+ feature.image_position}}></div>
                        )}
                    </div>
                )
            })}
        </div>
        {blockData.value.features.length > 1 && (
            <>
                <a className="carousel-control-prev" href="#inSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#inSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </>
        )}
    </div>
    
)

export default FeatureSliderBlock