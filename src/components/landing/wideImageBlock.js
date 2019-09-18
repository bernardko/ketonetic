import React from "react"
import Img from "gatsby-image"

const WideImageBlock = ({blockData}) => (
    <section id={blockData.value.section_id} class={"m-t-lg " + blockData.value.section_classes}>
        <div className="col-lg-12 text-center wow zoomIn">
            <Img alt={blockData.image.alt} fluid={blockData.image.imageFile.childImageSharp.fluid} className="img-fluid wide-image" />
        </div>
    </section>
)

export default WideImageBlock