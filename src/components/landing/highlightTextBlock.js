import React from "react"

const HighlightTextBlock = ({blockData}) => (
    <section className={"theme-section " + blockData.value.section_classes} style={{marginBottom: 0, paddingTop:"80px", paddingBottom:"90px"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center wow zoomIn">
                    {blockData.value.fa_icon && (
                        <i className={"fa " + blockData.value.fa_icon + " big-icon"}></i>
                    )}
                    <h2>
                        {blockData.value.title}
                    </h2>
                    <div class="testimonials-text">
                        <p>{blockData.value.text}</p>
                        {blockData.value.button_url && blockData.value.button_text && (
                            <a href={blockData.value.button_url} class="btn btn-default btn-rounded">{blockData.value.button_text}</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HighlightTextBlock