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
        return ( 
            <div className="header-container" style={{color: this.props.color, height: this.props.height + "vh", backgroundImage: 'url(' + this.props.img + ')'}}>
                {this.props.title !== "" && 
                <Typewriter
                    options={{
                    strings: [this.props.title, this.props.title2],
                    autoStart: true,
                    loop: true,
                    }}
                />
                }
            </div>
         );
    }
}
 
export default Header;