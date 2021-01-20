import React, { Component } from 'react';

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioTitle: this.props.title,
            portfolioUrl: this.props.url
        }
    }
    render() { 
        return ( 
            <a href={this.state.portfolioUrl}>
                <div className="portfolio-item">
                    <h1>{this.state.portfolioTitle}</h1>
                </div>
            </a>
         );
    }
}
 
export default PortfolioItem;