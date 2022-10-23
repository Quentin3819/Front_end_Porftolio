import React from "react";
import GitHubCalendar from "react-github-calendar";

export class Github extends React.Component {

    render() {
        return (
            <GitHubCalendar
                username={this.props.content[0].nom_utilisateur}
                hideTotalCount
                hideColorLegend
            />
        )
    }
}

