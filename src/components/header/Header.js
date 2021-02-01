import React, { Component } from 'react';

import Typewriter from 'typewriter-effect';

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
            <div className="header-container" style={{height: this.props.height + "vh", backgroundImage: 'url(' + this.props.img + ')'}}>
                <Typewriter
                    options={{
                    strings: [this.props.title, this.props.title2],
                    autoStart: true,
                    loop: true,
                    }}
                />
            </div>
         );
    }
}
 
export default Header;