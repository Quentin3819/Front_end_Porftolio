import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export class Github extends React.Component {

    render() {
        return (
            <div className="github">
                <div className="githubTitre" dangerouslySetInnerHTML={{__html: this.props.content[0].titre}}/>
                <GitHubCalendar
                    username={this.props.content[0].nom_utilisateur}
                    hideTotalCount
                    hideColorLegend
                    color="#3589DD"
                    blockMargin={5}
                    blockRadius={4}
                    blockSize={16}
                >
                    <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
            </div>

        )
    }
}

