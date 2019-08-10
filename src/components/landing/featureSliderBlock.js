import React from "react"

const FeatureSliderBlock = ({blockData}) => (
    <div id="inSlider" class="carousel slide" data-ride="carousel" >
        <ol class="carousel-indicators">
        {blockData.features.map((feature, index) => {
            const isActive = index == 1 ? true : false
            return (
                <li data-target="#inSlider" data-slide-to={index} class={isActive}></li>
            )
        })}
        </ol>
        <div class="carousel-inner" role="listbox">
            {blockData.features.map((feature, index) => {
                return (
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>{feature.title}</h1>
                                <p>{feature.subtitle}</p>
                                {feature.button_url && feature.button_text && feature.caption_url && feature.caption_text && (
                                <p>
                                    <a class="btn btn-lg btn-primary" href="{feature.button_url}" role="button">{feature.button_text}</a>
                                    <a class="caption-link" href="{feature.caption_url}" role="button">{feature.caption_text}</a>
                                </p>
                                )}
                            </div>
                            {feature.overlay_image && (
                            <div class="carousel-image wow zoomIn">
                                <img src="{feature.image.src}" alt="{feature.image.alt}"/>
                            </div>
                            )}
                        </div>
                        {feature.image && feature.image_position && (
                            <div class="header-back" style={{background: 'url("'+ feature.image.src +'") '+ feature.image_position +''}}></div>
                        )}
                    </div>
                )
            })}
        </div>
        {blockData.features.length > 1 && (
            <>
                <a class="carousel-control-prev" href="#inSlider" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#inSlider" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </>
        )}
    </div>
    
)

export default FeatureSliderBlock