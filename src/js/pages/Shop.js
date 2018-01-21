import React from "react";
import {connect} from "react-redux";

import Product from "../components/Product";
import {fetchProducts, fetchCategories} from "../actions/productsActions";

@connect((store) => {
  return {
    products: store.products.products,
    fetched: store.products.fetched,
  };
})

export default class Shop extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {

    const cat = this.props.params.filter;
    const {products, fetched, params} = this.props;
/*
    if (products.length === 0) {
      if (fetched) {
        return <p class="alert-message">No items!</p>;
      } else {
        return <p class="message-loader">Loading...</p>;
      }
    }
    */
    if (!products || products.length === 0) {
      return <p class="message-loader">Loading...</p>;
    }
    if (fetched && products.length === 0) {
      return <p class="alert-message">No items!</p>;
    }
    const mappedProducts = Object.keys(products).map((key, index) => {
      return <Product key={products[key]._id} {...products[key]} />;
    });

    const mappedProductsFilter = Object.keys(products)
      .filter(key => products[key].categoryId == cat)
      .map((key, index) => {
        return <Product key={products[key]._id} {...products[key]} />;
      });

    return (
      <div>
        {!fetched ? (
          <p class="message-loader">Loading...</p>
        ) : (
          <div class="shop__content grid">{cat ? mappedProductsFilter : mappedProducts }</div>
        )}

      </div>
    )
  }
}
