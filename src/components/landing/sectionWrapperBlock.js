import React from "react"

const SectionWrapperBlock = ({children, blockData}) => (
    <section id={blockData.section_id} class={blockData.section_classes}>
        {children}
    </section>
)

export default SectionWrapperBlock