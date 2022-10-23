import React from "react";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import DynamicIcon from "../DynamicIcon.tsx";

library.add(fas, far, fab)

export class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div dangerouslySetInnerHTML={{__html: this.props.content[0].description}}/>
                {this.props.content[0].icone_id.map((icone) => (
                        <a href={icone.lien} key={icone.id}>
                            <DynamicIcon icon={icone.image}/>
                        </a>

                ))}
            </div>

        )
    }
}

