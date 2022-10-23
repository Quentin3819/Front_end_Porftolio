import React from "react";

export class BlocText extends React.Component {

    render() {
        return (
            <div className="blocText">
                {this.props.content?.length > 0 &&
                    <>
                        {this.props.content.map((bloc_text_content) => (
                            <div key={bloc_text_content.id}>
                                <div dangerouslySetInnerHTML={{__html: bloc_text_content.titre}}/>
                                <div dangerouslySetInnerHTML={{__html: bloc_text_content.sous_titre}}/>
                            </div>
                        ))}
                    </>
                }
            </div>
        )
    }
}
