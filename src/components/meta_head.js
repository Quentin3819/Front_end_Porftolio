import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";

export class MetaHead extends React.Component {

    render() {
        const helmetContext = {};
        return (
            <div className="meta_head">
                <HelmetProvider context={helmetContext}>
                    <Helmet>
                        <title>{this.props.content.titre}</title>
                    </Helmet>
                </HelmetProvider>
            </div>
        )
    }
}
