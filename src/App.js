import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './views/home/Home';

function App() {
  return (
    <div className="App">
      <div id="outer-container">
        <Navigation></Navigation>
        <main id="page-wrap">
          <Home></Home>
        </main>
      </div>
    </div>
  );
}

export default App;
