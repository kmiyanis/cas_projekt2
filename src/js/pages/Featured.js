import React from "react";
import { connect } from "react-redux";

import Product from "../components/Product";
import { fetchProducts } from "../actions/productsActions";

@connect((store) => {
  return {
    products: store.products.products,
    productsFetched: store.products.fetched,
  };
})

export default class Featured extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { products, fetched, params } = this.props;

    const containerStyle = {
      marginTop: "1.5rem"
    };

    const mappedProducts = products
      .filter(p => p.featured)
      .map((product, i) => {
        return <Product key={product._id} {...product} />;
      });

    return <div style={containerStyle} class="row">{mappedProducts}</div>
  }
}