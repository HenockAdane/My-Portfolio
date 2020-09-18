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
import Projects from "./components/projects"




class App extends React.Component {

  constructor(){
    super()
    this.state={
      ulStyle: ""
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }


  componentDidMount(){
    const timeline = gsap.timeline({ defaults: {duration: 1}})
    timeline.from(".logo", {x:"-100vw"})
    .from(".nav-links", {x: "100vw"}, 0)
    .from(".menu", {x:"100vw"}, 0)


      console.log(window.innerWidth)
      window.addEventListener("resize", (e)=>{
        if (window.innerWidth > 768){
          this.setState({
            ulStyle: "unset"
          })
        }

        else{
          this.setState({
            ulStyle: "none"
          })
        }
      })
    
  }





  toggleMenu(e){
    console.log(e.target)
    if (e.target.classList.contains === "menu"){
      e.target.classList.toggle("open")
    }

    else{
    e.target.parentElement.classList.toggle("open")
    }

    if (this.state.ulStyle === "none"){
      this.setState({
        ulStyle: "flex"
      })
      gsap.from(".odd", {x:"-100%", duration: 0.3})
      gsap.from(".even", {x:"100%", duration: 0.3})
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
    <Link to={"/"}><img className="logo" src={logo} ></img></Link>
        <div className="menu" onClick={this.toggleMenu}>
            <div className="burger"></div>
          </div>
    </div>

        <nav>
          <ul style={{display:this.state.ulStyle}}>
            <Link className="nav-links odd" to={"/"} >HOME</Link>
            <Link className="nav-links even" to={"/projects"} >PROJECTS</Link>
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
    <Link to={"/"}><img src={logo} ></img></Link>
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
