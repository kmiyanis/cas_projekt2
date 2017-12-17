import React from "react";
import { Link } from "react-router";
import {addToCart} from "../actions/cartActions"

export default class CartTable extends React.Component {
    onclick(type,qty, id, item ){
        console.log('type',type);
        console.log('id',id);
        console.log('qty',qty);
        const newQty = type === 'sub' ?  qty - 1 : qty + 1;
       console.log(item);
        addToCart(id,newQty);

    }

	render() {
		const { cart } = this.props;

		return (
			<ul>
            {cart.items.map((item, index )=> (

				<li class="product" key={index}>
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
								<button onClick={this.onclick.bind(this, 'sub',item.quantity, item.productId, item)} class="quantity-pill__left"><i class="fa fa-minus" aria-hidden="true"></i>
                                </button>
                                <input type="number" min="0" class="quantity-pill__center quantity__input" id={`cd-product-${item.productId}`} name={`cd-product-${item.productId}`} defaultValue={item.quantity} />
                                <button onClick={this.onclick.bind(this, 'add',item.quantity, item.productId)} class="quantity-pill__right"><i class="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>
							<a class="delete-item"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
						</div>
					</div>
				</li>
    		))}
			</ul>
		);
	}
}