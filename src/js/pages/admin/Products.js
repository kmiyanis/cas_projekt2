import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import AdminSidebar from "./AdminSidebar";
import ProductSmall from "../../components/ProductSmall";
import { updateProductCompleted, emptyProduct, fetchProducts,deleteeProductCompleted } from "../../actions/productsActions";

@connect((store) => {
  return {
    products: store.products.products,
    fetched: store.products.fetched,
  };
})

export default class Products extends React.Component {
  componentWillMount() {
    this.props.dispatch(emptyProduct())
    this.props.dispatch(updateProductCompleted())
    this.props.dispatch(deleteeProductCompleted())
  }
  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }
  render() {
    const cat = this.props.params.filter;
    const { products, fetched, params, location } = this.props;

    if (!products || products.length === 0) {
      return <p class="message-loader">Loading...</p>;
    }
    if (fetched && products.length === 0) {
      return <p class="alert-message">No items!</p>;
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
      <div class="admin">
        <h1 class="title">Produkte Admin</h1>
        <AdminSidebar location={location} />
        <Link class="btn-white" to="/admin/addProduct"><em>Produkt erstellen</em></Link><br />

        {!fetched ? (
          <p class="message-loader">Loading...</p>
        ) : (
            <div class="shop__content grid">{cat ? mappedProductsFilter : mappedProducts}</div>
          )}

      </div>
    )
  }
}
