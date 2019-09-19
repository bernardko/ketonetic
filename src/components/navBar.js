import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import logo_ketonetic from "../img/logo_ketonetic.png"

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
                        <Link className="navbar-brand" to="/">
                            <img src={logo_ketonetic} width="200" alt="Ketonetic Logo" />
                        </Link>
                        <div className="navbar-header page-scroll">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav navbar-right">
                                {data.wagtail.navMenuItems.map((navMenuItem, index) => {
                                    return (
                                        <li><Link className="nav-link page-scroll" to={navMenuItem.linkUrl}>{navMenuItem.name}</Link></li>
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
