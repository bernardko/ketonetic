import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (<StaticQuery
        query={graphql`
            query {
                wagtail {
                    navMenuItems {
                      name
                     linkUrl
                      children {
                        name
                        linkUrl
                      }
                    }
                }
            }
        `}
        render={data => (
            <div className="navbar-wrapper">
                <nav className="navbar navbar-default navbar-fixed-top navbar-expand-md navbar-scroll" role="navigation">
                    <div className="container">
                        <a className="navbar-brand" href="/">TIAMAT</a>
                        <div className="navbar-header page-scroll">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar">
                            <ul className="nav navbar-nav navbar-right">
                                {data.wagtail.navMenuItems.map((navMenuItem, index) => {
                                    return (
                                        <li><a className="nav-link page-scroll" href={navMenuItem.linkUrl}>{navMenuItem.name}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )}
    />)
}

export default CustomNavbar
