/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import Jumbotron from "../jumbotron"

const Columns = ({ children, columnLayout }) => {    
    switch (columnLayout) {
        case 1:
        return (
            <section className="features p-h-lg">
            <div className="container">
                {children}
            </div>
            </section>
        )
        case 2:
        return (
            <section className="features p-h-lg">
                <div className="container">
                    <div className="col-sm-8">            
                    {children}
                    </div>
                    <div className="col-sm-4">
                    <Jumbotron />
                    </div>
                </div>
            </section>
        )
        default:
            return (
            <>
            {children}
            </>
            )
    }
}

export default Columns
