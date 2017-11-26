import React from "react";
import { IndexLink, Link } from "react-router";

import Cart from '../Cart';

export default class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const SiderbarLinks = [
            "Tee",
            "Socken",
            "Nierenwärmer"
        ].map((title, i) => <a href="#" class="list-group-item" key={i} alt={title}>{title}</a>);
        return (
            <div class="col-lg-3">
                <h1 class="my-4">Miya Japan Tee</h1>
                <div class="list-group">
                    {SiderbarLinks}
                </div>
                <Cart />
            </div>
        );
    }
}
