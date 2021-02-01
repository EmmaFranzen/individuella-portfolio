import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { elastic as Menu } from 'react-burger-menu';

import Weather from "../weather/Weather";

import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Menu disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="about" className="menu-item" to="/about">About</Link>
                <Link id="portfolio" className="menu-item" to="/portfolio">Portfolio</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
                <div className="nav-contact-info">
                    <p>Emma</p>
                    <p>contact@emma.com</p>
                    <p><a href="https://github.com/EmmaFranzen">Github</a></p>
                    <Weather></Weather>
                </div>
            </Menu>
         );
    }
}
 
export default Navigation;