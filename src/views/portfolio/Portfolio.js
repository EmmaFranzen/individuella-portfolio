import React, { Component } from 'react';

import PortfolioItem from "../../components/portfolioItem/PortfolioItem";

import "./Portfolio.css";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="portfolio-page">
                <div className="portfolio-row">
                    <PortfolioItem title="Mitt bästa projekt" url="https://github.com/EmmaFranzen/Emmas-Jumping-Game-Halloween-inspired-"></PortfolioItem>
                    <PortfolioItem title="Mitt sämsta projekt"></PortfolioItem>
                    <PortfolioItem title="Mitt tredje projekt"></PortfolioItem>
                </div>
            </div>
         );
    }
}
 
export default Portfolio;