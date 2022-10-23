import React from "react";

export class Projects extends React.Component {

    render() {
        return (
            <div className="project">
                {this.props.content.map((project) => (
                    <div key={project.id}>
                        <img key={project.id} src={"http://localhost:8000/upload/images/projet/" + project.image}/>
                        <div dangerouslySetInnerHTML={{__html: project.titre}}/>
                        <div dangerouslySetInnerHTML={{__html: project.description}}/>
                        <div dangerouslySetInnerHTML={{__html: project.date_creation}}/>
                        <a href={project.lien}>Demo</a>
                    </div>
                ))}
            </div>
        )
    }
}
