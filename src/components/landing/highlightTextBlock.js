import React from "react"

const HighlightTextBlock = ({blockData}) => (
    <section className={"navy-section " + blockData.value.section_classes} style={{marginBottom: 0, paddingTop:"80px", paddingBottom:"90px"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center wow zoomIn">
                    <i class="fa fa-comment big-icon"></i>
                    <h2>
                        {blockData.value.title}
                    </h2>
                    <div class="testimonials-text">
                        <i>{blockData.value.text}</i>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HighlightTextBlock