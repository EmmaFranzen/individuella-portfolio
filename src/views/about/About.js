import React, { Component } from 'react';

import Header from "../../components/header/Header";
import ShadowBox from "../../hoc/shadowbox/ShadowBox";
import AboutHeader from "../../images/about.jpg";

import "./About.css";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="about-page">
                <Header title="Who am I?" color="#fff" img={AboutHeader} height="100"></Header>
                <div style={{marginTop: 45}} ></div>
                <ShadowBox style>
                    <h1>Hi you!</h1>
                    <p>Welcome to my portfolio page. My name is Emma and I am a 24 year old front-end developer student. I am three apples high and my hobbies include styling and creating wigs and hanging out with dogs. </p><br></br>
                    <p>Feel free to check out my projects and hopefully I’ll meet you someday!</p><br></br>
                    <p>Au Revoir!</p>
                </ShadowBox>
            </div>
         );
    }
}
 
export default About;