import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

@connect((store) => {
  return {};
})

export default class ProductSmall extends React.Component {

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

        <Link to={"/admin/product/" + this.props._id}>
          <button class="checkout-btn"><em>editeren</em></button>
        </Link>
      </div>
    );
  }
}
