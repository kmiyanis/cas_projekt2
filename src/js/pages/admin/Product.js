import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router";
import {fetchProduct} from "../../actions/productsActions"
import {fetchCategories} from "../../actions/productsActions"
import ProductForm from "./ProductForm";

@connect((store, props) => {
  return {
    product: store.products.product,
    fetched: store.products.fetched,
    catFetched: store.products.catFetched,
    categories: store.products.categories,
    deleted: store.products.deleted,
    deletedproduct: store.products.deletedproduct,
  };
})

export default class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProduct(this.props.params.product))
    this.props.dispatch(fetchCategories())
  }

  render() {
    const {product, fetched, categories, catFetched, deleted} = this.props;

    if (deleted) {
      return (
        <div class="admin">
          <div class="content content--bg-white">
            <div class="box--bg-green">
              <p>Produkt <strong>" {this.props.deletedproduct} "</strong> wurde gelöscht!</p>
            </div>
            <br/>
            <Link to="/admin/products" class="link--inline">&#x3C;&#x3C; Produkt Übersicht</Link>
          </div>
        </div>
      )
    }

    if (product && categories && fetched && catFetched) {
      return (
        <div>
          <ProductForm {...product} categories={categories}/>
        </div>
      )

    } else {

      return (
        <div class="admin">
          <div class="content content--bg-white">
            <div class="box--bg-error">
              <p>Die gesuchte Produkte ist nicht vorhanden!</p>
            </div>
            <br/>
            <Link to="/admin/products" class="link--inline">&#x3C;&#x3C; Produkt Übersicht</Link>
          </div>
        </div>
      )
    }
  }
}