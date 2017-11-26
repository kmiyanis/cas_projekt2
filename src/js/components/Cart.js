import React from "react"
import { connect } from "react-redux"

import CartTable from "../components/CartTable";
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

export default class Cart extends React.Component {
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

		return (
			<div class="col-lg-3">
				<h1 class="my-4">Warenkorb</h1>
				<div class="list-group">
					{fetched ? (
						"Loading..."
					) : (
							<CartTable
								cart={cart}
							/>
						)}
				</div>
			</div>
		)
	}
}

const getProductById = (products, productId) => products.find(p => p._id === productId);

const populateCartItems = (cart, products) => ({
	...cart,
	items: cart.items.map(item => ({
		...item,
		product: getProductById(products, item.productId),
	})),
});
