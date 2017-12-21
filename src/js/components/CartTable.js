import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux"
import { addToCart, removeFromCart } from "../actions/cartActions"

@connect((store) => { return {}; })
export default class CartTable extends React.Component {
	onclick(type, product) {
		const newQty = type === 'sub' ? product.quantity - 1 : product.quantity + 1;
		if (newQty <= 0) {
			this.removeFromCart(product);
		} else {
			this.props.dispatch(addToCart(product.productId, newQty));
		}
	}

	removeFromCart(product) {
		this.props.dispatch(removeFromCart(product.productId));
	}

	render() {
		const { cart } = this.props;
		return (
			<div>
				<div class="body">
					<ul>
						{cart.items.map((item, index) => (
							<li class="product" key={item.productId}>
								<div class="product-image">
									<a href="#0">
										<img src={item.product.picture} alt={item.product.title} />

									</a>
								</div>
								<div class="product-details">
									<h3 class="cd-product-title"><a>{item.product.title}</a></h3>
									<span class="price">CHF {item.product.price}</span>
									<div class="actions">
										<div class="quantity-pill">
											<button onClick={this.onclick.bind(this, 'sub', item)} class="quantity-pill__left">
												<i class="fa fa-minus" aria-hidden="true"></i>
											</button>
											<input
												readOnly
												type="number"
												min="0"
												class="quantity-pill__center quantity__input"
												id={`cd-product-${item.productId}`}
												name={`cd-product-${item.productId}`}
												value={item.quantity}

											/>
											<button onClick={this.onclick.bind(this, 'add', item)} class="quantity-pill__right"
											><i class="fa fa-plus" aria-hidden="true"></i>
											</button>
										</div>
										<a onClick={() => this.removeFromCart(item)} class="delete-item"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div >
				<footer>
					<Link to="/shop/checkout" class="checkout"><em>Checkout - CHF <span>{cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}</span></em></Link>
				</footer>
			</div >
		);
	}
}