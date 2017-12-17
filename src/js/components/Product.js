import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import FontAwesome from "react-fontawesome";

import { addToCart } from "../actions/cartActions"

@connect((store) => { return {}; })

export default class Product extends React.Component {
  addToCart = (product) => {
    this.props.dispatch(addToCart(product._id, 1));
  }

  render() {
    const {
      productId,
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
          {featured &&
            <div class="card-header" >
              <FontAwesome spin name="star" /> Featured
            </div>
          }
          <Link to={"/shop/" + this.props._id}><img class="card-img-top" src={picture} alt="" /></Link>
          <div class="card-body">
            <h4 class="card-title">
              <Link to={"/shop/" + this.props._id}>{title}</Link>
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
