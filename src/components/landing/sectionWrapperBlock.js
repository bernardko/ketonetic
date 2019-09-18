import React from "react"

const SectionWrapperBlock = ({children, blockData}) => (
    <section id={blockData.value.section_id} class={blockData.value.section_classes}>
        {children}
    </section>
)

export default SectionWrapperBlock