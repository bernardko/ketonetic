import React from "react"

const StackedFeatureListBlock = ({blockData}) => (
    <section id={blockData.section_id} className={"container " + blockData.section_classes}>
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="navy-line"></div>
                <h2>{blockData.title}</h2>
                <p>{blockData.subtitle}</p>
            </div>
        </div>
        {(blockData.features || []).map((feature, index) => {
            return (
                <div class="row features-block">
                    <div class="col-lg-6 features-text wow fadeInLeft">
                        {feature.highlight_tag && (
                            <small>{feature.highlight_tag}</small>
                        )}
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                        {feature.link_text && feature.link_url && (
                            <a href={feature.link_url} class="btn btn-primary">{feature.link_text}</a>
                        )}
                    </div>
                    <div class="col-lg-6 text-right wow fadeInRight">
                        {feature.image && (
                            <img src={feature.image.src} alt={feature.image.alt} class="img-fluid float-right" />
                        )}
                    </div>
                </div>
            )
        })}

    </section>
)

export default StackedFeatureListBlock