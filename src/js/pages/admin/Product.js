import React from "react"
import {connect} from "react-redux"

import {fetchProduct} from "../../actions/productsActions"
import {fetchCategories} from "../../actions/productsActions"

import ProductForm from "./ProductForm";

@connect((store, props) => {
  return {
    product: store.products.product,
    fetched: store.products.fetched,
    catFetched: store.products.catFetched,
    categories: store.products.categories,
  };
})

export default class ProductDetail extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProduct(this.props.params.product))
    this.props.dispatch(fetchCategories())
  }

  render() {
    const {product, fetched, categories, catFetched} = this.props;

    if (product && categories && fetched && catFetched) {
      return (
        <div>
          <ProductForm {...product} categories={categories}/>
        </div>
      )
    } else {
      return (
        <div class="admin">
          <div class="content content--bg-error">
            Leider konnte gesuchte Produkte oder Kategorie nicht gefunden werden!
          </div>
        </div>
      )
    }
  }
}