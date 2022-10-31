import React from "react";
import {Helmet} from "react-helmet";

export class MetaHead extends React.Component {

    render() {
        return (
            <div className="meta_head">
                <Helmet>
                    <title>{this.props.content.titre}</title>
                    lang="fr”
                </Helmet>
                {console.log(this.props.content.titre)}
            </div>
        )
    }
}
