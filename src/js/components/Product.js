import React from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";

import { addToCart } from "../actions/cartActions"

@connect((store) => { return {}; })
export default class Product extends React.Component {
  addToCart = (product) => {
    this.props.dispatch(addToCart(product._id, 1));
  }

  render() {
    const {
      id,
      featured,
      price,
      picture,
      title,
      text,
      categoryId,
     } = this.props;

    return (
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src={picture} alt="" /></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">{title}</a>
            </h4>
            <h5>CHF {price}</h5>
            <p class="card-text">{text}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            <button onClick={() => this.addToCart(this.props)} class="float-right"><FontAwesome name="cart-plus" /></button>
          </div>
        </div>
      </div>
    );
  }
}
