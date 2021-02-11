import React, { Component } from 'react';

import "./ShadowBox.css";

class ShadowBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="shadow-box">
            {this.props.children}
        </div> 
        );
    }
}
 
export default ShadowBox;