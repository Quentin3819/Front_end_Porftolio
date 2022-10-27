import React from "react";
import {Contents} from "./contents";
import {Footer} from "./footer";
import logo from "../assets/images/logo.png"
import {HiMenu} from "react-icons/hi";
import {IoCloseSharp} from "react-icons/io5";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import DynamicIcon from "../DynamicIcon.tsx";

library.add(fas, far, fab)

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            fetchApiData: [],
            pageId: 3,
            fetchFooter: [],
            active: false
        };
        this.changeContent = this.changeContent.bind(this)
        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)

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

    openMenu (){
        if (!this.state.active){
            this.setState({active : true})
            this.forceUpdate()
        }
    }

    closeMenu (){
        if (this.state.active){
            this.setState({active : false})
            this.forceUpdate()
        }
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className={"headerContent " + (this.state.active ? "open" : "close")}>
                        <a href="/">
                            <img src={logo}/>
                        </a>
                        <div className="navbar">
                                {this.state.fetchApiData.map((page) => (
                                    <div key={page.id} className="navbarItem">
                                        <DynamicIcon icon={page.iconePage}/>
                                        <p id={page.id}  onClick={this.changeContent}>{page.titre}</p>
                                    </div>
                                ))}
                        </div>
                        <div className="navbarButton">
                            <div className="burger" onClick={this.openMenu}>
                                <HiMenu />
                            </div>
                            <div className="close" onClick={this.closeMenu}>
                                <IoCloseSharp/>
                            </div>
                        </div>
                    </div>

                </div>

                <Contents pageid={this.state.pageId}/>

                {(this.state.fetchFooter?.length > 0) &&
                    <Footer content={this.state.fetchFooter}/>
                }
            </div>
        )
    }
}