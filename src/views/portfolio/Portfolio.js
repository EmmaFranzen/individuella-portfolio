import React, { Component } from 'react';

import PortfolioItem from "../../components/portfolioItem/PortfolioItem";
import Puggins from "../../images/portfolio/puggins.png";
import Jumping from "../../images/portfolio/jumping_game.png";
import Quire from "../../images/portfolio/quire.png";

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
                    <PortfolioItem title="Individuellt Projekt 1: Puggins" url="https://github.com/EmmaFranzen/Puggins-Individuellt-Projekt-1" description="Detta projekt handlade om..." image={Puggins}></PortfolioItem>
                    <PortfolioItem title="Jumping game" url="https://github.com/EmmaFranzen/Emmas-Jumping-Game-Halloween-inspired-" description="Detta projekt handlade om..." image={Jumping}></PortfolioItem>
                    <PortfolioItem title="Quire - JS note app" url="https://github.com/simonlindqvist/fe20tp1_staple" description="Detta projekt handlade om..." image={Quire}></PortfolioItem>
                </div>
            </div>
         );
    }
}
 
export default Portfolio;