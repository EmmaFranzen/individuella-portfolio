import React, { Component } from 'react';

import Header from '../../components/header/Header';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='homePage'>
                <Header img="https://www.rd.com/wp-content/uploads/2020/01/isn-t-he-so-cute-scaled.jpg"></Header>
            </div>
         );
    }
}
 
export default Home;