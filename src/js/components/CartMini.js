import React from "react"
import {connect} from "react-redux"

import CartTable from "../components/CartTable";
import {fetchProducts} from "../actions/productsActions";
import {fetchCart} from "../actions/cartActions"

@connect((store) => {
  return {
    products: store.products.products,
    productsFetched: store.products.fetched,
    cart: populateCartItems(store.cart.cart, store.products.products),
    cartFetched: store.cart.fetched,
  };
})

export default class CartMini extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    console.log('location', this.props.location);
  }

  toggleClass() {
    this.setState({opened: !this.state.opened});
  };

  countItem() {
    return this.props.cart.items.reduce((sum, item) => sum + (item.quantity), 0);
  };

  componentWillMount() {
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchCart())

    let isAdmin = this.props.location.pathname.includes('admin');
    console.log('isAdmin',isAdmin);
    if (isAdmin) {
      this.setState({opened: false})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cart.items.length === 0) {
      this.setState({opened: false})
    }
  }

  render() {
    const {
      products,
      productsFetched,
      cart,
      fetched
    } = this.props;
    console.log('this.state.opened',this.state.opened);
    return (
      <div
        class={`cd-cart-container ${this.state.opened ? 'cart-open' : 'empty'} ${cart.items.length === 0 ? 'empty' : ''}`}>
        <a onClick={this.toggleClass} class="cd-cart-trigger">
          Warenkorb
          <ul class="count">
            <li>{this.countItem()}</li>
            <li>0</li>
          </ul>
        </a>

        <div class="cd-cart">
          <div class="wrapper">
            <header>
              <h2>Cart</h2>
              <span class="undo">Item removed. <a >Undo</a></span>
            </header>
            {products.length === 0 && fetched && this.toggleClass}
            {products.length === 0 && !fetched ? (
              ""
            ) : (
              <CartTable
                cart={cart}
              />
            )}
          </div>
        </div>
      </div>

    )
  }
}

const populateCartItems = (cart, products) => ({
  ...cart,
  items: cart.items.map(item => ({
    ...item,
    product: products[item.productId],
  })),
});
