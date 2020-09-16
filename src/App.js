import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { gsap } from "gsap"
import Home from "./components/home"
import { ReactComponent as TwitterLogo } from "./images/icons/twitter.svg"
import { ReactComponent as LinkedinLogo } from "./images/icons/linkedin.svg"
import { ReactComponent as GithubLogo } from "./images/icons/github.svg"
import ProjectDiv1 from "./components/projectDiv1"
import ProjectDiv2 from "./components/projectDiv2"
import Projects from "./components/projects"




class App extends React.Component {

  constructor(){
    super()
    this.state={
      ulStyle: "unset"
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }





  toggleMenu(e){
    console.log(e.target)
    e.target.parentElement.classList.toggle("open")

    if (this.state.ulStyle === "none"){
      this.setState({
        ulStyle: "flex"
      })
      gsap.from(".odd", {duration:1, x:"-100%", duration: 0.3})
      gsap.from(".even", {duration:1, x:"100%", duration: 0.3})
    }

    else{

      gsap.from(".odd", {duration:1, x:"-100%", duration: 0.3})
      gsap.from(".even", {duration:1, x:"100%", duration: 0.3})

      this.setState({
        ulStyle: "none"
      })
    }

  }
  
  render(){


    
 
    return (
    <div className="App">
    <header>

    <div className="another-menu">
        <img src={logo} ></img>
        <div className="menu" onClick={this.toggleMenu}>
            <div className="burger"></div>
          </div>
    </div>

        <nav>
          <ul style={{display:this.state.ulStyle}}>
            <Link className="nav-links odd" to={"/"} >HOME</Link>
            <Link className="nav-links even" to={"/projects"} >PROJECTS</Link>
            <Link className="nav-links odd" to={"/contact"} >CONTACT</Link>
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
