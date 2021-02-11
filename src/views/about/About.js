import React, { Component } from 'react';

import Header from "../../components/header/Header";
import ShadowBox from "../../hoc/shadowbox/ShadowBox";
import AboutHeader from "../../images/about.jpg";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="about-page">
                <Header title="" img={AboutHeader} height="100"></Header>
                <div style={{marginTop: 45}} ></div>
                <ShadowBox style>
                    <h1>Who am i?</h1>
                    <p>Lorem ipsum</p>
                </ShadowBox>
            </div>
         );
    }
}
 
export default About;