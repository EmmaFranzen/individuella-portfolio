import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render() { 
        let style = this.props.img;
        return ( 
            <div className="header-container" style={{backgroundImage: 'url(' + this.props.img + ')'}}>
            </div>
         );
    }
}
 
export default Header;