import React from "react"
import Img from "gatsby-image"

const StackedFeatureListBlock = ({blockData}) => (
    <section id={blockData.value.section_id} className={"container " + blockData.value.section_classes}>
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="navy-line"></div>
                <h2>{blockData.value.title}</h2>
                <p>{blockData.value.subtitle}</p>
            </div>
        </div>
        {(blockData.value.features || []).map((feature, index) => {
            return (
                <div class="row features-block">
                    <div class={blockData.features[index].image ? "col-lg-12 features-text wow fadeInLeft" :"col-lg-6 features-text wow fadeInLeft"}>
                        {feature.highlight_tag && (
                            <small>{feature.highlight_tag}</small>
                        )}
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                        {feature.link_text && feature.link_url && (
                            <a href={feature.link_url} class="btn btn-primary">{feature.link_text}</a>
                        )}
                    </div>
                    {blockData.features[index].image ? blockData.features[index].image.imageFile ? (
                    <div class="col-lg-6 text-right wow fadeInRight">
                        {blockData.features[index].image && (
                            <Img fluid={blockData.features[index].image.imageFile.childImageSharp.fluid} alt={blockData.features[index].image.alt} class="img-fluid float-right" />
                        )}
                    </div>
                    ):null:null}
                </div>
            )
        })}

    </section>
)

export default StackedFeatureListBlock