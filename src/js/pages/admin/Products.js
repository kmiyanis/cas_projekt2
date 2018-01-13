import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import ProductSmall from "../../components/ProductSmall";
import { fetchProducts, fetchCategories } from "../../actions/productsActions";

@connect((store) => {
  return {
    products: store.products.products,
    productsFetched: store.products.fetched,
  };
})

export default class Products extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const cat = this.props.params.filter;
    const { products, fetched, params } = this.props;

    if (products.length === 0 && !fetched) {
      if (fetched) {
        return <p class="alert-message">No items!</p>;
      } else {
        return <p class="message-loader">Loading...</p>;
      }
    }

    const mappedProducts = Object.keys(products).map((key, index) => {
      return <ProductSmall key={products[key]._id} {...products[key]} />;
    });

    const mappedProductsFilter = Object.keys(products)
      .filter(key => products[key].categoryId == cat)
      .map((key, index) => {
        return <ProductSmall key={products[key]._id} {...products[key]} />;
      });

      return (
      <div>
        <h1>Produkte Admin</h1>
        <Link to="/admin/products/new">Produkt erstellen</Link>
        {fetched ? (
          "Loading..."
        ) : (
            <div class="shop__content grid">{cat ? mappedProductsFilter : mappedProducts}</div>
          )}

      </div>
    )
  }
}
