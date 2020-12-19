import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { gsap } from "gsap"
import Home from "./components/home"
import { ReactComponent as LinkedinLogo } from "./images/icons/linkedin.svg"
import { ReactComponent as GithubLogo } from "./images/icons/github.svg"
import Projects from "./components/projects"




class App extends React.Component {

  constructor(){
    super()
    this.state={
      ulStyle: "",
      menuStyle: "menu"
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

    if (this.state.menuStyle === "menu"){
      this.setState({
        menuStyle: "menu open",
        ulStyle: "flex"
      })


    }


    else{

      this.setState({
        menuStyle: "menu",
        ulStyle: "none"
      })

      
    }



   }




  
  render(){


    
 
    return (
    <div className="App">
    <header>

    <div className="another-menu">
    <Link to={"/"}><img className="logo" src="/favicon1.svg" alt="homeLogo"></img></Link>
        <div className={this.state.menuStyle} onClick={this.toggleMenu}>
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
        </Switch>

    <footer>
    <Link to={"/"}><img src="/favicon1.svg" alt="footerLogo"></img></Link>
    <div className="socialsDiv">
      <a href="https://github.com/HenockAdane" rel="noopener noreferrer"  target="_blank"><GithubLogo className="socials"/></a>
      <a href="https://www.linkedin.com/in/henock-adane-1ab49219b" rel="noopener noreferrer"  target="_blank"><LinkedinLogo className="socials"/></a>
    </div>
    </footer>

    </div>
  )};
}

export default App;
