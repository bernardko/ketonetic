import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const BigNumberTodoBlock = ({blockData}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            <ol className="bigNumberTodo">
                {blockData.value.items.map((item, index) => {
                    return (
                        <li>
                            <em>{item.heading}</em>
                            <p>{item.text}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    </div>
)

BigNumberTodoBlock.propTypes = {
}

BigNumberTodoBlock.defaultProps = {
}

export default BigNumberTodoBlock