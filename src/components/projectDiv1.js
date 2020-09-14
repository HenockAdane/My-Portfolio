import React from "react"
import "../component-css/projectDiv.css"

class ProjectDiv1 extends React.Component{



    render(){
        return(
            <div className="projectContainer">
                <div className="projectImg" style={{backgroundImage: `url(${this.props.img})`}}></div>
                <div className="projectDescription">
                    <h1>{this.props.h1}</h1>

                    <p>{this.props.description}</p>
                    <a href={this.props.link} target="_blank">Visit Site</a>
                </div>
            </div>
        )
    }
}

export default ProjectDiv1