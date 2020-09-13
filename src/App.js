import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import Home from "./components/home"

class App extends React.Component {
  
  render(){return (
    <div className="App">
    <header>
        <img src={logo} ></img>

        <nav>
          <ul>
            <Link className="nav-links" to={"./home"} >HOME</Link>
            <Link className="nav-links" to={"./projects"} >PROJECTS</Link>
            <Link className="nav-links" to={"./contact"} >CONTACT</Link>

          </ul>
        </nav>
      
    </header>
    <Home />

    <footer>
    <img src={logo} ></img>
    <div></div>
    </footer>

    </div>
  )};
}

export default App;
