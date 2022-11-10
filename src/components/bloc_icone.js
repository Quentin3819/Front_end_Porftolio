import React from "react";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import DynamicIcon from "../DynamicIcon.tsx";

library.add(fas, far, fab)


export class BlocIcone extends React.Component {

    render() {
        return (
            <div className="blocIcones">
                {this.props.content?.length > 0 &&
                    <>
                        {this.props.content.map((bloc_logo_content) => (
                            <div key={bloc_logo_content.id} className="blocIcone">
                                <div className="iconeTitre">
                                    <div dangerouslySetInnerHTML={{__html: bloc_logo_content.titre}}/>
                                    <div dangerouslySetInnerHTML={{__html: bloc_logo_content.description}}/>
                                </div>

                                <div className="icone">
                                    {bloc_logo_content.icone_id.map((icone) => (
                                        <div key={icone.id}>
                                            {icone.lien?.length > 0 ?
                                                <a href={icone.lien}>
                                                    <DynamicIcon icon={icone.image}/>
                                                </a> :
                                                <>
                                                    <div className="iconeName">
                                                        <p>{icone.nom}</p>
                                                    </div>
                                                    <DynamicIcon icon={icone.image}/>
                                                </>

                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        )
    }
}