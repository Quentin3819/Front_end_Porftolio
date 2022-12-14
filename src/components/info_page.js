import React from "react";
import {AnimateString} from "./animateString";

export class InfoPage extends React.Component {

    render() {
        return (
            <div className="infoPage">
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.props.content.sous_titre}}/>
                    {(this.props.content.animateText !== undefined || this.props.content.animateText?.length > 0 )&&
                        <div className="animateText">Développeur&nbsp;<AnimateString content={this.props.content.animateText}/></div>
                    }
                </div>

                {(this.props.content.image !== undefined || this.props.content.image?.length > 0) &&
                    <img src={"https://backoffice.nitweb.fr/upload/images/page/" + this.props.content.image}/>
                }
            </div>
        )
    }
}
