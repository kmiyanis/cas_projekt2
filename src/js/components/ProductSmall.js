import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import FontAwesome from "react-fontawesome";

import { addToCart } from "../actions/cartActions"

@connect((store) => {
  return {};
})

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
      <div class="grid__item">
        <div class="grid__img-box"><img class="grid__img" src={picture} alt={title} /></div>
        <div class="grid__text-block">
          <h2 class="grid__title">
            {title}
          </h2>
          <p class="grid__preis">100g CHF {price}</p>
          <p class="grid__text">{text}</p>
        </div>

        <Link to={"/admin/products/" + this.props._id}>
          <button class="icon__cart-plus grid__button checkout__login"><em>editeren</em></button>
        </Link>
      </div>
    );
  }
}
