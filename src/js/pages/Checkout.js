import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux"

import CheckoutTable from "../components/CheckoutTable";
import { fetchProducts } from "../actions/productsActions";
import { fetchCart } from "../actions/cartActions"

@connect((store) => {
	return {
		products: store.products.products,
		productsFetched: store.products.fetched,
		cart: populateCartItems(store.cart.cart, store.products.products),
    cartFetched: store.cart.fetched,
	};
})

export default class Checkout extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchProducts())
		this.props.dispatch(fetchCart())
	}

	render() {
		const {
			products,
			productsFetched,
			cart,
			fetched
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

					<h1 class="title">Checkout</h1>
          {products.length === 0 && !fetched ? (
						""
					) : (
						<CheckoutTable
              cart={cart}
						/>
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