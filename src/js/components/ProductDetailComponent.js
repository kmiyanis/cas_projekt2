import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import FontAwesome from "react-fontawesome";
import styled from 'styled-components';
import {addToCart} from "../actions/cartActions"


const HomeMain = styled.main`
  position: relative;
  z-index: 2;
  padding: 6.25rem 0.9375rem;
  margin: 0 auto; 
  @media only screen and (min-width: 768px) {
      padding: 6.25rem 2.5rem;
      max-width: 64rem; 
   } 
`;

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
            <div class="detail__content">
                <div class="detail__img-block"><img class="img--block" src={picture}
                                                    alt="Foto Gemmaicha mit Maccha"/></div>

                <div class="detail__text-block">
                    <h1 class="detail__title">{title}</h1>
                    <p>{text} </p>

                    <div class="detail_preis">100g CHF {price}</div>
                    <button onClick={() => this.addToCart(this.props)}  class="icon__cart-plus detail__button">Warenkorb hinzufügen<i
                        class="fa fa-cart-plus detail-button__icon" aria-hidden="true"></i>
                    </button>
                    {featured &&
                    <div class="card-header">
                        <FontAwesome spin name="star"/> Featured
                    </div>
                    }
                </div>
            </div>
        );
    }
}