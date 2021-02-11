import React, { Component } from 'react'

import "./Button.css";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            url: this.props.url
        }
    }
    render() { 
        return ( 
            <a className="cButton" href={this.state.url}>
                {this.state.text}
            </a> 
        );
    }
}

export default Button; 