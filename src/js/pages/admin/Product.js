import React from "react"
import { connect } from "react-redux"

import { fetchProduct } from "../../actions/productsActions"
import { fetchCategories } from "../../actions/productsActions"

import ProductForm from "./ProductForm";

@connect((store, props) => {
  return {
    product: store.products.product,
    fetched: store.products.fetched,
    categories: store.products.categories,
  };
})

export default class ProductDetail extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchProduct(this.props.params.product))
  }

  render() {
    const { product, fetched, categories } = this.props;
    return (
      <div class="admin">
        {product && categories && fetched ? <ProductForm {...product} categories={categories} /> : null}
      </div>
    )
  }
}