import React from "react";

import Product from "../components/Product";

export default class Featured extends React.Component {
  render() {
    const ProductsFeatured = [
      "Tsurezure",
      "Kisen",
      "Kasei",
      "Seiso",

    ].map((title, i) => <Product key={i} title={title} />);

    const containerStyle = {
      marginTop: "1.5rem"
    };

    console.log("featured");
    return <div style={containerStyle} class="row">{ProductsFeatured}</div>
  }
}
