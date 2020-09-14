import React from "react"
import ProjectDiv1 from "./projectDiv1"
import ProjectDiv2 from "./projectDiv2"


class Projects extends React.Component{
    
    constructor(){
        super()
        this.state = {
            projectDetails:[{
                project: "Movie/Show App",
                description: "This project required me to build a fully responsive app that allows you to fetch movies and shows from an api using the search box. This app uses firebase auth which allows a user to sign in/up with either email and password or Google login. The app also uses firebase cloud storage which allows the users to the movies/shows as favourites as long as they are signed in",
                img: "../images\portfolio\desktop\image-portfolio-manage.jpg",
                link:"https://react-movie-appppppp-ebp5gl8dv.vercel.app/"
            },
            {
                project: "Manage",
                description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
                img: "../images\portfolio\desktop\image-portfolio-manage.jpg",
                link: "https://manage-landing-page-by-henock-adane.vercel.app/"
            }
       ]
        }
    }


    render(){

        const projectDIV = this.state.projectDetails.map((a, i)=>{
            if(i % 2 === 0){
              return <ProjectDiv1 h1={a.project} img={a.img} description={a.description} link={a.link} />
            }
      
            else{
              return <ProjectDiv2 h1={a.project} img={a.img} description={a.description} link={a.link} />
            }
      })
      
      
        return(<div>
            {projectDIV}
            </div>

        )

    }
}

export default Projects