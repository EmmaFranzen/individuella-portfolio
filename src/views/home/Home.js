import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Button from "../../components/button/Button";

import Hero from "../../images/hero-scaled.jpg"

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='homePage'>
                <Header img={Hero} height="100" title="Hi, I'm Emma!" title2="Welcome to my portfolio!"></Header>
                <div className="button-container">
                    <Button text="My work" url="/portfolio"></Button>
                    <Button text="Contact me" url="/contact"></Button>
                </div>
            </div>
         );
    }
}
 
export default Home;