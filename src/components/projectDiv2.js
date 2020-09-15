import React from "react"
import "../component-css/projectDiv.css"

class ProjectDiv2 extends React.Component{



    render(){
        return(
            <div className="projectContainer two">
                <div className="projectDescription">
                    <h1>{this.props.h1}</h1>

                    <p>{this.props.description}</p>
                    <a href={this.props.link} target="_blank">Visit Site</a>
                </div>
                <img className="projectImg" alt="1" src={this.props.img} />

            </div>
        )
    }
}

export default ProjectDiv2