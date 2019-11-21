import React from "react"
import Img from "gatsby-image"

const CenterImageFeatureBlock = ({blockData}) => (
    <section id={blockData.value.section_id} class={"p-xl " + blockData.value.section_classes}>
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="navy-line"></div>
                <h2 class={blockData.value.emphasis ? "emphasis" : ""}>{blockData.value.title} <br/> <span class="navy"> {blockData.value.emphasis_title}</span></h2>
                {blockData.value.subtitle && (
                    <p>{blockData.value.subtitle}</p>
                )}
            </div>
        </div>
        <div class="row">
            {!blockData.image && (<div class="col-md-2 text-center wow zoomIn"></div>)}
            <div class={blockData.image ? "col-md-3 text-center wow fadeInRight" : "col-md-4 text-center wow fadeInRight"}>
            {(blockData.value.features_left || []).map((feature, index) => {
                return (
                    <div className="m-t-xl">
                        {feature.icon && (
                            <i class={"fa " + feature.icon + " features-icon"}></i>
                        )}
                        {blockData.featuresLeft[index].image ? blockData.featuresLeft[index].image.imageFile ? (
                            <Img alt={blockData.featuresLeft[index].image.alt} fixed={blockData.featuresLeft[index].image.imageFile.childImageSharp.fixed} className="rounded-circle circle-border" />
                        ):(
                            <img alt={feature.image.alt} src={feature.image.src} className="rounded-circle circle-border" />
                        ):null}
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                )
            })}
            </div>
            {blockData.image ? (
                <div class="col-md-6 text-center wow zoomIn">
                    <img src={blockData.image.src} alt={blockData.image.alt} class="img-fluid" />
                </div>
            ):null}
            <div class={blockData.image ? "col-md-3 text-center wow fadeInRight" : "col-md-4 text-center wow fadeInRight"}>
                {(blockData.value.features_right || []).map((feature, index) => {
                    return (
                        <div className="m-t-xl">
                            {feature.icon && (
                                <i class={"fa " + feature.icon + " features-icon"}></i>
                            )}
                            {blockData.featuresRight[index].image ? blockData.featuresRight[index].image.imageFile ? (
                                <Img alt={blockData.featuresRight[index].image.alt} fixed={blockData.featuresRight[index].image.imageFile.childImageSharp.fixed} className="rounded-circle circle-border" />
                            ):(
                                <img alt={feature.image.alt} src={feature.image.src} className="rounded-circle circle-border" />
                            ):null}
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    )
                })}
            </div>
            {!blockData.image && (<div class="col-md-2 text-center wow zoomIn"></div>)}
        </div>
    </section>
)

export default CenterImageFeatureBlock