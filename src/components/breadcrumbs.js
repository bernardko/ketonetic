import { Link } from "gatsby"
import React from "react"

const Breadcrumbs = ({breadcrumbs}) => {
    return breadcrumbs.map((crumb, index) => {
        return (
            <><Link to={crumb.linkUrl}>{crumb.menuTitle}</Link> &raquo; </>
        )
    })
}

export default Breadcrumbs