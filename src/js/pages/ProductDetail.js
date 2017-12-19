import React from "react"
import { connect } from "react-redux"

import { fetchProduct } from "../actions/productsActions"

import ProductDetailComponent from "../components/ProductDetailComponent";

@connect((store, props) => {
	return {
		product: store.products.product,
		productsFetched: store.products.fetched,
	};
})

export default class ProductDetail extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchProduct(this.props.params.product))
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