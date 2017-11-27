import React from "react"
import { connect } from "react-redux"

import { fetchProducts } from "../actions/productsActions"

import ProductDetailComponent from "../components/ProductDetailComponent";

@connect((store, props) => {
	return {
		product: store.products.products.find((product) => {
			return product._id == props.params.product;
		}),
		productsFetched: store.products.fetched,
	};
})

export default class ProductDetail extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchProducts())
	}

	render() {
		const { product, fetched, params } = this.props;
		return (
			<div>
				{product ? <ProductDetailComponent {...product} /> : null}
			</div>
		)
	}
}