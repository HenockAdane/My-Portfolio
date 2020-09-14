import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home"
import { ReactComponent as TwitterLogo } from "./images/icons/twitter.svg"
import { ReactComponent as LinkedinLogo } from "./images/icons/linkedin.svg"
import { ReactComponent as GithubLogo } from "./images/icons/github.svg"
import ProjectDiv1 from "./components/projectDiv1"
import ProjectDiv2 from "./components/projectDiv2"
import Projects from "./components/projects"




class App extends React.Component {



  
  render(){


    
 
    return (
    <div className="App">
    <header>
        <img src={logo} ></img>

        <nav>
          <ul>
            <Link className="nav-links" to={"/"} >HOME</Link>
            <Link className="nav-links" to={"/projects"} >PROJECTS</Link>
            <Link className="nav-links" to={"/contact"} >CONTACT</Link>

          </ul>
        </nav>
      
    </header>


     <Switch>
          <Route exact={true} path="/" render={()=>(
            <Home/>
          )}  />
          <Route exact={true} path="/projects" render={() =>(
            <Projects/>
          )}/>
          {/* <Route exact={true} path="/contact" render={()=>(
            !this.state.currentUser ? (<SignInOrUp inputChange={this.inputChange} input={this.state.input} signOut={this.signOut} user={this.state.userName} currentUser={this.state.currentUser}/>) : (<Redirect to="/" />)
          )} /> */}
        </Switch>

    <footer>
    <img src={logo} ></img>
    <div className="socialsDiv">
      <a href="https://github.com/HenockAdane" target="_blank"><GithubLogo className="socials"/></a>
      <a href="#" target="_blank"><TwitterLogo className="socials"/></a>
      <a href="#" target="_blank"><LinkedinLogo className="socials"/></a>
    </div>
    </footer>

    </div>
  )};
}

export default App;
