import React from "react";
import { Link, Redirect } from "react-router";
import { connect } from "react-redux"

import CheckoutTable from "../components/CheckoutTable";
import OrderForm from "../components/OrderForm";
import { fetchProducts } from "../actions/productsActions";
import { fetchCart } from "../actions/cartActions"
import * as userActions from "../actions/userActions"

@connect((store) => {
  return {
    products: store.products.products,
    productsFetched: store.products.fetched,
    cart: populateCartItems(store.cart.cart, store.products.products),
    cartFetched: store.cart.fetched,
    user: store.user.user,
    loggedin: store.user.loggedin,
  };
})

export default class Order extends React.Component {
  componentWillMount() {
    this.props.dispatch(userActions.fetch())
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchCart())
  }


  render() {
    const {
			products,
      productsFetched,
      cart,
      fetched,
      user,
      loggedin
    } = this.props;


    if (cart.items.length === 0 && productsFetched) {
      return (
        <div>
          <h1 class="title">Checkout</h1>
          <b>Keine Artikel im Warenkorb</b>
        </div>
      )
    }

    return (
      <div>
        <style dangerouslySetInnerHTML={{
          __html: `
          .cd-cart-container { display: none }
        `}} />

        <h1 class="title">Bestellung abschliessen</h1>
        {products.length === 0 && !fetched ? (
          ""
        ) : (
            <div>
              <div class="checkout-content">
                <div class="checkout__products">
                  {cart.items.map((item, index) => (
                    <div class="product" key={item.productId}>
                      <div class="product-image">
                        <a href="#0">
                          <img src={item.product.picture} alt={item.product.title} />
                        </a>
                      </div>
                      <div class="product-details">
                        <h3 class="cd-product-title"><a>{item.quantity} x {item.product.title}</a></h3>
                        <span class="price">CHF {item.product.price}</span>
                      </div>
                    </div>
                  ))}
                  <b>Total: {cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}</b>
                </div>
                <br /><br />
                <hr />
                {loggedin ? (
                  <OrderForm user={user} cart={cart} />
                ) : (
                  <OrderForm cart={cart} />
                )}
              </div>
            </div>
          )}

      </div>
    );
  }
}

const populateCartItems = (cart, products) => ({
  ...cart,
  items: cart.items.map(item => ({
    ...item,
    product: products[item.productId],
  })),
});