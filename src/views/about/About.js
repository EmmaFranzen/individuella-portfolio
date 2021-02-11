import React, { Component } from 'react';

import Header from "../../components/header/Header";
import ShadowBox from "../../hoc/shadowbox/ShadowBox";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="about-page">
                <Header img=""></Header>
                <ShadowBox>
                    <h1>Who am i?</h1>
                    <p>Lorem ipsum</p>
                </ShadowBox>
            </div>
         );
    }
}
 
export default About;