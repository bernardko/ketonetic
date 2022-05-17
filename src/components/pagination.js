import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Pagination = ({paginator}) => (
    <nav id="pagination" aria-label="...">
        <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1">1</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
    </nav>
)

Pagination.propTypes = {

}

Pagination.defaultProps = {

}

export default Pagination