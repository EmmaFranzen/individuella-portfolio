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
                    <PortfolioItem title="Individuellt Projekt 1: Puggins" url="https://github.com/EmmaFranzen/Puggins-Individuellt-Projekt-1" description="Detta projekt handlade om..." image=""></PortfolioItem>
                    <PortfolioItem title="Mitt sämsta projekt"></PortfolioItem>
                    <PortfolioItem title="Mitt tredje projekt"></PortfolioItem>
                </div>
            </div>
         );
    }
}
 
export default Portfolio;