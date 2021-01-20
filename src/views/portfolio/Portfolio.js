import React, { Component } from 'react';

import PortfolioItem from "../../components/portfolioItem/PortfolioItem"

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="portfolio-page">
                <PortfolioItem title="Mitt bästa projekt" url="https://github.com/EmmaFranzen/Emmas-Jumping-Game-Halloween-inspired-"></PortfolioItem>
                <PortfolioItem title="Mitt sämsta projekt"></PortfolioItem>
            </div>
         );
    }
}
 
export default Portfolio;