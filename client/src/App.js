import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import StartUp from './Pages';
import Login from './Pages/login';
import SignUp from './Pages/signup';
import Dashboard from './Pages/dashboard';
import Inventory from './Pages/inventory';
import Scheduler from './Pages/scheduler';
import DataReport from './Pages/data-report';

function App() {
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
      </header>
    </div>
  );
}

export default App;
