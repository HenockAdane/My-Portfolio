import React from "react"
import "../component-css/projectDiv.css"

class ProjectDiv2 extends React.Component{



    render(){
        return(
            <div className="projectContainer">
                <div className="projectDescription">
                    <h1>{this.props.h1}</h1>

                    <p>{this.props.descripition}</p>
                    <a href={this.props.link} target="_blank">Visit Site</a>
                </div>
                <div className="projectImg" style={{backgroundImage: `url(${this.props.img})`}}></div>
            </div>
        )
    }
}

export default ProjectDiv2