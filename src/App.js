import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <p>
          Hej pig!
        </p>
      </header>
    </div>
  );
}

export default App;
