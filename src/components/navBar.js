import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
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
                        <li><a className="nav-link page-scroll" href="#page-top">Home</a></li>
                        <li><a className="nav-link page-scroll" href="#features">Features</a></li>
                        <li><a className="nav-link page-scroll" href="#team">Team</a></li>
                        <li><a className="nav-link page-scroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="nav-link page-scroll" href="#pricing">Pricing</a></li>
                        <li><a className="nav-link page-scroll" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default CustomNavbar
