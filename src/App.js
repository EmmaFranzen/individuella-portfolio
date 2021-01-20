import './App.css';

import { Switch, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Home from './views/home/Home';
import Contact from './views/contact/Contact';
import Portfolio from './views/portfolio/Portfolio';
import About from './views/about/About';

function App() {
  return (
    <div className="App">
      <div id="outer-container">
        <Navigation></Navigation> 
        <main id="page-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About}/>
          </Switch>   
        </main>
      </div>
    </div>
  );
}

export default App;
