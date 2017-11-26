import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Sidebar from "../components/layout/Sidebar";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "1.5rem"
    };
    console.log("layout");
    return (
      <div>
        <Nav location={location} />

        <div class="container">

          <div class="row">
            <Sidebar />
            <div class="col-lg-9" style={containerStyle}>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
