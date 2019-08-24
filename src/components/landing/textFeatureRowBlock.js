import React from "react"

const TextFeatureRowBlock = ({blockData}) => (
    <section id={blockData.section_id} className={"p-h-xl " + blockData.section_classes}>
        <div className="container">
            <div className="row">
                {blockData.paragraphs.map((paragraph, index) => {
                    const gridSize = 12/blockData.paragraphs.length
                    return (
                        <div className={"col-sm-"+gridSize} key={blockData.section_id+"-"+index}>
                            <h2>{paragraph.title}</h2>
                            <p>{paragraph.text}</p>
                            {paragraph.link_url && paragraph.link_text && (
                                <p><a className="navy-link" href="{paragraph.link_url}" role="button">{paragraph.link_text} &raquo;</a></p>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)

export default TextFeatureRowBlock