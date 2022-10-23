import React from "react";
import {Contents} from "./contents";
import {Footer} from "./footer";
import logo from "../assets/images/logo.png"

export class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            fetchApiData: [],
            pageId: 3,
            fetchFooter: [],
        };
        this.changeContent = this.changeContent.bind(this)

    }

    componentDidMount() {
        fetch("http://localhost:8000/api/pages")
            .then((respo) => {
                return respo.json();
            })
            .then((data) => {
                this.setState({fetchApiData: data['hydra:member']});
            });
        fetch("http://localhost:8000/api/footers")
            .then((respo) => {
                return respo.json();
            })
            .then((data) => {
                this.setState({fetchFooter: data['hydra:member']});
            });
    }

    changeContent(e) {
        let id = e.currentTarget.id
        this.setState({pageId: id})
        this.forceUpdate()
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <a href="/">
                        <img src={logo}/>
                    </a>
                    <div className="navbar">
                        {this.state.fetchApiData.map((page) => (
                            <p id={page.id} key={page.id} onClick={this.changeContent}>{page.titre}</p>
                        ))}
                    </div>
                </div>

                <Contents pageid={this.state.pageId}  className="contents"/>

                {(this.state.fetchFooter?.length > 0) &&
                    <Footer content={this.state.fetchFooter}/>
                }
            </div>
        )
    }
}