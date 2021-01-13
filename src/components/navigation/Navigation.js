import React, { Component } from 'react';

import { elastic as Menu } from 'react-burger-menu';

import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
                <a id="about" className="menu-item" href="/about">About</a>
            </Menu>
         );
    }
}
 
export default Navigation;