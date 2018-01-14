import React from "react";
import {Link} from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import PageBg from "../components/layout/PageBg";
import CartMini from "../components/CartMini";

export default class Layout extends React.Component {
    render() {
        const {location} = this.props;

        return (
            <div>
                <PageBg/>
                <Nav location={location} rol="navigation"/>

                <main class="main" role="main">

                    {this.props.children}

                </main>
                <Footer />
            </div>
        );
    }
}
