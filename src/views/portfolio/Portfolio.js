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
                    <PortfolioItem title="Individuellt Projekt 1: Puggins" url="https://github.com/EmmaFranzen/Puggins-Individuellt-Projekt-1" description="Puggins was created as my second individual programming school project and is written in pure HTML and CSS." image={Puggins}></PortfolioItem>
                    <PortfolioItem title="Halloween Jumping Game" url="https://github.com/EmmaFranzen/Emmas-Jumping-Game-Halloween-inspired-" description="This was a halloween inspired jumping game that was created with HTML, CSS and Javascript." image={Jumping}></PortfolioItem>
                    <PortfolioItem title="Quire - JS note app" url="https://github.com/simonlindqvist/fe20tp1_staple" description="We created an note writing app called Quire and our group consisted of four members including me. This was written in HTML, CSS and Javascript combined with an agile leadership and multiple Scrum masters." image={Quire}></PortfolioItem>
                </div>
            </div>
         );
    }
}
 
export default Portfolio;