import React from "react"

const WideImageBlock = ({blockData}) => (
    <section id={blockData.section_id} class={"m-t-lg " + blockData.section_classes}>
        <div className="col-lg-12 text-center wow zoomIn">
            <img src={blockData.image.src} alt={blockData.image.alt} className="img-fluid wide-image" />
        </div>
    </section>
)

export default WideImageBlock