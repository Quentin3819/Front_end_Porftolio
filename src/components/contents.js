import React from "react";
import {BlocIcone} from "./bloc_icone";
import {BlocText} from "./bloc_text";
import {InfoPage} from "./info_page";
import {Projects} from "./projects";
import GitHubCalendar from "react-github-calendar";
import {Github} from "./github";
import {MetaHead} from "./meta_head";

export class Contents extends React.Component {
    icone;

    constructor(props) {
        super();
        this.state = {
            fetchApiData: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/pages/" + this.props.pageid)
            .then((respo) => {
                return respo.json();
            })
            .then((data) => {
                this.setState({fetchApiData: data});
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pageid !== this.props.pageid) {
            this.componentDidMount()
        }
    }


    render() {
        return (
            <div className={"contents " + this.state.fetchApiData.titre}>
                <MetaHead content={this.state.fetchApiData} />
                {(this.state.fetchApiData.sous_titre?.length > 0) &&
                    <InfoPage content={this.state.fetchApiData}/>
                }
                {(this.state.fetchApiData.bloc_text_id?.length > 0) &&
                    <BlocText content={this.state.fetchApiData.bloc_text_id}/>
                }
                {(this.state.fetchApiData.bloc_logo_id?.length > 0) &&
                    <BlocIcone content={this.state.fetchApiData.bloc_logo_id}/>
                }
                {(this.state.fetchApiData.githubs?.length > 0) &&
                    <Github content={this.state.fetchApiData.githubs}/>
                }
                {(this.state.fetchApiData.projet_id?.length > 0) &&
                    <Projects content={this.state.fetchApiData.projet_id}/>
                }
            </div>
        )
    }
}