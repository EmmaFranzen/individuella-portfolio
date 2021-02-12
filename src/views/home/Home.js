import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Button from "../../components/button/Button";
import { Link } from 'react-router-dom';

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
                <Header img={Hero} height="100" color="#ffa580" title="Hi, I'm Emma!" title2="Welcome to my portfolio!"></Header>
                <div className="button-container">
                    <Link to="/portfolio"><Button text="My work" /*url="/portfolio"*/></Button></Link>
                    <Link to="/contact"><Button text="Contact me" /*url="/contact"*/></Button></Link>
                </div>
            </div>
         );
    }
}
 
export default Home;