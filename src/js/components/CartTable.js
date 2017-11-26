import React from "react";
import { Link } from "react-router";

export default class CartTable extends React.Component {
	render() {
		const { cart } = this.props;
		return (
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
						<td>Quantity</td>
					</tr>
				</thead>
				<tbody>
					{cart.items.map(item => (
						<tr key={item.productId}>
							<td>{item.product.title}</td>
							<td>{item.product.price}</td>
							<td>{item.quantity}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}