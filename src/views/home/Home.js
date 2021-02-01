import React, { Component } from 'react';

import Header from '../../components/header/Header';

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
            </div>
         );
    }
}
 
export default Home;