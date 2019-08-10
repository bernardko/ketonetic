import React from "react"

const TextFeatureRowBlock = ({blockData}) => (
    <section id={blockData.section_id} class={"container"+blockData.section_classes}>
        <div class="row">
            {blockData.paragraphs.map((paragraph, index) => {
                const gridSize = 12/blockData.paragraphs.length
                return (
                    <div class={"col-sm-"+gridSize}>
                        <h2>{paragraph.title}</h2>
                        <p>{paragraph.text}</p>
                        <p><a class="navy-link" href="{paragraph.link_url}" role="button">{paragraph.link_text} &raquo;</a></p>
                    </div>
                )
            })}
        </div>
    </section>
)

export default TextFeatureRowBlock