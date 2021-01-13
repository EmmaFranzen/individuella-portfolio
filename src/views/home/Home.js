import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img className="header-image" src="https://www.rd.com/wp-content/uploads/2020/01/isn-t-he-so-cute-scaled.jpg"></img>
            </div>
         );
    }
}
 
export default Home;