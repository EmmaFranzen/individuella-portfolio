import React, { Component } from 'react';

import "./PortfolioItem.css";

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioTitle: this.props.title,
            portfolioUrl: this.props.url,
            portfolioDesc: this.props.description
        }
    }
    render() { 
        return ( 
            <a className="portfolio-item" href={this.state.portfolioUrl}>
                <div className="portfolio-content">
                    <img className="portfolio-img" src="https://magcentre.com/wp-content/uploads/2017/06/how-to-create-a-website-feature-image-e1496943224192.jpg"></img>
                    <h1 className="portfolio-title">{this.state.portfolioTitle}</h1>
                    <p>{this.state.portfolioDesc}</p>
                </div>
            </a>
         );
    }
}
 
export default PortfolioItem;