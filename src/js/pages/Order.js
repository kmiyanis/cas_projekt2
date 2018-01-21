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
    //this.props.dispatch(userActions.fetch())
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchCart())
  }


  render() {
    const {
			products,
      productsFetched,
      cart,
      cartFetched,
      user,
      loggedin
    } = this.props;
    console.log('loggedin',loggedin);
    console.log('user',user);
    if (cart.items.length === 0 && cartFetched) {
      return (
        <div>
          <h1 class="title">Checkout</h1>
          <div class="content content--bg-white"><p>Keine Artikel im Warenkorb</p></div>
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
        {products.length === 0 && !productsFetched ? (
          ""
        ) : (
            <div>
              <div class="checkout-content">
                <div class="checkout__products">
                  {cart.items.map((item, index) => (
                    <div class="product" key={item.productId}>
                      <div class="product-image">
                        <Link to={"/shop/product/" + item.productId}>
                          <img src={item.product.picture} alt={item.product.title} />
                        </Link>
                      </div>
                      <div class="product-details">
                        <h3 class="cd-product-title"><Link to={"/shop/product/" + item.productId}>{item.quantity} x {item.product.title}</Link></h3>

                        <span class="price">CHF {(item.product.price * item.quantity).toFixed(2)}</span>
                        <span class="product-price">CHF {item.product.price}</span>
                      </div>
                    </div>
                  ))}
                  <div class="flex-row shipping"><p class="flex-row__item">Versandkosten</p><p class="flex-row__item"> CHF 8</p></div>
                  <div class="flex-row"><p class="order-total">Total</p> <p class="order-total">CHF {cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 8).toFixed(2)}</p></div>
                </div>
              </div>

              <div class="checkout-content">
                <OrderForm user={user} cart={cart} history={this.props.history} />
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