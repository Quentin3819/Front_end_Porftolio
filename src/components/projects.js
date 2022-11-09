import React from "react";
import {format} from "date-fns";

export class Projects extends React.Component {
    render() {
        return (
            <div className="project">
                {this.props.content.map((project) => (
                    <div key={project.id}>
                        <img key={project.id} src={"https://backoffice.nitweb.fr/upload/images/projet/" + project.image}/>
                        <div className="projectTitle" dangerouslySetInnerHTML={{__html: project.titre}}/>
                        <div className="projectDescription" dangerouslySetInnerHTML={{__html: project.description}}/>
                        <div className="projectInfo">
                            <p className="projectDate" >{format(new Date(project.date_creation), 'MMM/y')}</p>
                            <a href={project.lien} target="_blank">Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
