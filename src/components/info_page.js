import React from "react";

export class InfoPage extends React.Component {

    render() {
        return (
            <div className="infoPage">
                    <div dangerouslySetInnerHTML={{__html: this.props.content.sous_titre}}/>
                {(this.props.content.image !== undefined || this.props.content.image?.length > 0) &&
                    <img src={"http://localhost:8000/upload/images/page/" + this.props.content.image}/>
                }
            </div>
        )
    }
}
