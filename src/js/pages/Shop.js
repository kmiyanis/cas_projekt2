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

export default class Shop extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { products, fetched, params } = this.props;

    if (products.length === 0 && !fetched) {
      if (fetched) {
        return <p class="alert-message">No items!</p>;
      } else {
        return <p class="message-loader">Loading...</p>;
      }
    }


    const mappedProducts = Object.keys(products).map((key, index) => {
      return <Product key={products[key]._id} {...products[key]} />;
    });

    return (
      <div>

          {fetched ? (
            "Loading..."
          ) : (
              <div class="shop__content grid">{mappedProducts}</div>
          )}

      </div>
    )
  }
}
