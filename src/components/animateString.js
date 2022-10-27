import React from "react";
import Typewriter from "typewriter-effect";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

export class AnimateString extends React.Component {
    stringToArrays (content){
        return content.split(',')
    }
    render() {
        return (
                <Typewriter
                    options={{
                        strings: this.stringToArrays(this.props.content),
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 50,
                    }}
                />
        )
    }
}