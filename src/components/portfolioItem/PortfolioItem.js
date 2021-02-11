import React, { Component } from 'react';

import ShadowBox from "../../hoc/shadowbox/ShadowBox";

import "./PortfolioItem.css";
class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioTitle: this.props.title,
            portfolioUrl: this.props.url,
            portfolioDesc: this.props.description,
            portfolioImg: this.props.image
        }
    }
    render() { 
        return (
            <ShadowBox>
            <a className="portfolio-item" href={this.state.portfolioUrl}>
                <div className="portfolio-content">
                    <img className="portfolio-img" src={this.state.portfolioImg}></img>
                    <h1 className="portfolio-title">{this.state.portfolioTitle}</h1>
                    <p>{this.state.portfolioDesc}</p>
                </div>
            </a>
            </ShadowBox>
         );
    }
}
 
export default PortfolioItem;