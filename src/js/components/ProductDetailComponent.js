import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import FontAwesome from "react-fontawesome";
import styled from 'styled-components';
import { addToCart } from "../actions/cartActions"


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
            <div>
            <h1 class="title">{title}</h1>
            <div class="detail__content">

                <div class="detail__img-block"><img class="img--block" src={picture}
                    alt={"Foto von " + title} /></div>

                <div class="detail__text-block">
                    {featured &&
                    <div class="featured">
                        <span class="featured__icon"><img src="/assets/img/sakura.svg" /></span>Miyas Empfelung
                    </div>
                    }

                    <p class="detail__text">{text} </p>

                    <div class="detail__preis">100g CHF {price}</div>
                    <button onClick={() => this.addToCart(this.props)} class="detail__button"><em>Warenkorb hinzufügen</em><i
                        class="fa fa-cart-plus detail-button__icon" aria-hidden="true"></i>
                    </button>

                </div>
            </div>
            </div>
        );
    }
}