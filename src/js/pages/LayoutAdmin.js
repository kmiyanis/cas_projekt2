import React from "react";
import Footer from "../components/layout/FooterAdmin";
import Nav from "../components/layout/Nav";
import PageBg from "../components/layout/PageBg";


export default class LayoutAdmin extends React.Component {
    render() {
        const {location} = this.props;

        return (
            <div>
                <PageBg/>
                <Nav location={location} rol="navigation"/>

                <main class="main" role="main">

                    {this.props.children}

                </main>
                <Footer location={location} />
            </div>
        );
    }
}
