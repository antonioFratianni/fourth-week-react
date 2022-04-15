import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Div, Link, P } from './link';

 function App() {
   const obj = {
     name: "Antonio",
     lastname: "Fratianni"
   }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link/>

      </header>
    </div>
  );
}

export default App;

