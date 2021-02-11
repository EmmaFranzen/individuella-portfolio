import React, { Component } from 'react';

import "./PageContainer.css";

class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-container">
                {this.props.children}
            </div>
         );
    }
}
 
export default PageContainer;