import React, { Component } from 'react';

import Header from "../../components/header/Header";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="about-page">
                <Header img=""></Header>
                <h1>Who am i?</h1>
                <p>Lorem ipsum</p>
            </div>
         );
    }
}
 
export default About;