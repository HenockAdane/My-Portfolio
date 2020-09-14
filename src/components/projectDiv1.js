import React from "react"
import "../component-css/projectDiv.css"

class ProjectDiv1 extends React.Component{



    render(){
        return(
            <div className="projectContainer">
                <img className="projectImg" alt="1" src={this.props.img} />
                <div className="projectDescription one">
                    <h1>{this.props.h1}</h1>

                    <p>{this.props.description}</p>
                    <a href={this.props.link} target="_blank">Visit Site</a>
                </div>
            </div>
        )
    }
}

export default ProjectDiv1