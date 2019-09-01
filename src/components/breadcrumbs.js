import { Link } from "gatsby"
import React from "react"

const Breadcrumbs = ({breadcrumbs}) => {
    return breadcrumbs.map((crumb, index) => {
        return (
            <><a href={crumb.linkUrl}>{crumb.menuTitle}</a> &raquo; </>
        )
    })
}

export default Breadcrumbs