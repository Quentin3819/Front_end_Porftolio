import React from "react";
import {AnimateString} from "./animateString";

export class InfoPage extends React.Component {

    render() {
        return (
            <div className="infoPage">
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.props.content.sous_titre}}/>
                    {(this.props.content.animateText !== undefined || this.props.content.animateText?.length > 0 )&&
                        <AnimateString content={this.props.content.animateText} className="test"/>
                    }
                </div>

                {(this.props.content.image !== undefined || this.props.content.image?.length > 0) &&
                    <img src={"http://localhost:8000/upload/images/page/" + this.props.content.image}/>
                }
            </div>
        )
    }
}
