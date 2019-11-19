import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const H2Block = ({blockData}) => (
    <div class="row">
        <div class={blockData.value.align_center ? "col-lg-12 wow fadeInLeft m-t-lg text-center" : "col-lg-12 wow fadeInLeft m-t-lg"}>
            {blockData.value.show_line ? (
                <div class={blockData.value.align_center ? "navy-line" : "navy-line-left"}></div>
            ) : blockData.value.tag && (
                <small>{blockData.value.tag}</small>
            )}
            {blockData.value.align_center ? (
                <>
               {(blockData.value.fa_icon||blockData.value.emoji) && (
                    <>
                    {blockData.value.emoji ? (
                        <span className={blockData.value.fa_icon + " m-t-md m-r-xs"}>{blockData.value.emoji}</span>
                    ):(
                        <i className={blockData.value.fa_icon + " m-t-md m-r-xs"}>{blockData.value.emoji}</i>
                    )}
                    </>
                )}
                <h2 class={blockData.value.emphasis ? "emphasis" : ""}>{blockData.value.title}</h2>
                </>
            ) : (
                <>
                {(blockData.value.fa_icon||blockData.value.emoji) && (
                    <>
                    {blockData.value.emoji ? (
                        <span className={blockData.value.fa_icon + " m-t-md m-r-xs"} style={{float:"left"}}>{blockData.value.emoji}</span>
                    ):(
                        <i className={blockData.value.fa_icon + " m-t-md m-r-xs"} style={{float:"left"}}>{blockData.value.emoji}</i>
                    )}
                    </>
                )}
                <h2 class={blockData.value.emphasis ? "emphasis" : ""}>{blockData.value.title}</h2>
                </>
            )}

        </div>
    </div>
)

H2Block.propTypes = {
}

H2Block.defaultProps = {
}

export default H2Block