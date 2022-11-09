import React from "react";

export class BlocText extends React.Component {

    render() {
        return (
            <div className="blocText">
                {this.props.content?.length > 0 &&
                    <>
                        {this.props.content.map((bloc_text_content) => (
                            <div key={bloc_text_content.id}>
                                <div className="blocText_titre">
                                    <div dangerouslySetInnerHTML={{__html: bloc_text_content.titre}}/>
                                    <div dangerouslySetInnerHTML={{__html: bloc_text_content.sous_titre}}/>
                                </div>
                                {(bloc_text_content.image !== undefined || bloc_text_content.image?.length > 0) &&
                                    <div className="blocText_img">
                                        <img src={"https://backoffice.nitweb.fr/upload/images/blocTexte/" + bloc_text_content.image}/>
                                    </div>
                                }
                            </div>
                        ))}
                    </>
                }
            </div>
        )
    }
}
