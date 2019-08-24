import React from "react"

const CenterImageFeatureBlock = ({blockData}) => (
    <section id={blockData.section_id} class={"container" + blockData.section_classes}>
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="navy-line"></div>
                <h2>{blockData.title} <br/> <span class="navy"> {blockData.emphasis_title}</span></h2>
                {blockData.subtitle && (
                    <p>{blockData.subtitle}</p>
                )}
            </div>
        </div>
        <div class="row">
            <div class={blockData.image ? "col-md-3 text-center wow fadeInRight" : "col-md-6 text-center wow fadeInRight"}>
            {(blockData.features_left || []).map((feature, index) => {
                return (
                    <div>
                        <i class={"fa fa-" + feature.icon + " features-icon"}></i>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                )
            })}
            </div>
            {blockData.image && (
            <div class="col-md-6 text-center wow zoomIn">
                <img src={blockData.image.src} alt={blockData.image.alt} class="img-fluid" />
            </div>
            )}
            <div class={blockData.image ? "col-md-3 text-center wow fadeInRight" : "col-md-6 text-center wow fadeInRight"}>
                {(blockData.features_right || []).map((feature, index) => {
                    return (
                        <div>
                            <i class={"fa fa-" + feature.icon + " features-icon"}></i>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)

export default CenterImageFeatureBlock