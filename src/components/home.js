import React from "react"
import { gsap } from "gsap"
import "../component-css/home.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  



class Home extends React.Component{

    constructor(){
        super();
    }


    componentDidMount(){
        gsap.from(".homeBody", {opacity: 0, duration: 2})
    }




    render(){

        return(<div className="homeBody">

        <div className="introDiv">

        <img className="introImg" src="/images/homepage/desktop/image-homepage-hero.jpg"></img>

            <div className="intro">
                <h1>Hey, I'm Henock Adane and I love building beautiful websites</h1>
                <a href="#aboutMe"><div className="arrowDown"></div>ABOUT ME</a>
            </div>
            </div>

        
        <div id="aboutMe">
            <img id="profilePic" alt="Profile Picture" src="/images/ProfilePicture.jpg" />

            <div>
            <h1>ABOUT ME</h1>
            <p id="description">I am a self taught junior front-end developer looking for a role in an exciting company where I am able to improve myself. The tech stack I use at the moment includes HTML,CSS,vanilla JS, React.JS, Redux.JS and firebase but I am willing to use whatever tools are required as I am able to adapt quickly due to overcoming and learning from the many difficulties I have faced during my self taught dev journy so far. I am based in London, UK, but I am happy working remotely. Please click <Link to={"/projects"}>Here</Link> to view my projects</p>
            </div>


            <p id="contactMe">CONTACT ME</p>

            <a className="footer-links" href="mailto:adanehenock@gmail.com" target="_blank">adanehenock@gmail.com</a>
            <a className="footer-links" href="tel:07938888763">07938888763</a>


        </div>

        </div>)
    }
    
}

export default Home