import React, { Component } from 'react';

class Weather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        main: null
      };
    }
  
    componentDidMount() {
      fetch("https://api.openweathermap.org/data/2.5/weather?id=2673722&units=metric&appid=26edddc28c8b3e1465b164af494c8a59")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              main: result.main
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, main } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <p>It it currently {main.temp}° in<br></br>Stockholm, Sweden
          </p>
        );
      }
    }
  }

  export default Weather;