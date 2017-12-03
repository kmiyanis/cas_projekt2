import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import FontAwesome from "react-fontawesome";
import { addToCart } from "../actions/cartActions"

import styled from 'styled-components';


@connect((store) => { return {}; })

/*
const HomeArticle = styled.article`
  margin: 2.5rem auto;
  padding: 0.9375rem 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  -webkit-box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.15); 
          
  @media only screen and (min-width: 768px) {
      margin: 6.25rem auto;
      max-width: 50rem;
      padding: 1.5625rem 1.875rem; 
      
      &:after {
        content: "";
        display: table;
        clear: both; 
        }
   }
 `;
const HomeTeaserTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: bold;
  margin-bottom: 1.25rem; 
  @media only screen and (min-width: 768px) {
      font-size: 1.75rem;
      line-height: 2.125rem; 
      margin-bottom: 1.875rem;
  } 
`;
const HomeTeaserImg = styled.div`
    margin:20px auto;
    border-radius: 300px;
    width: 300px;
    overflow: hidden;
    
     @media only screen and (min-width: 768px) {
        float: left;
        margin: 0 30px 30px 0;
     }    
 `;

const HomeTeaserLead = styled.p`
    font-size:24px;
    line-height: 28px;
    margin-bottom:20px;  
 `;

*/
export default class HomeProduct extends React.Component {
  addToCart = (product) => {
    this.props.dispatch(addToCart(product._id, 1));
  }

  render() {
    const {
      productId,
      featured,
        home,
      price,
      picture,
      title,
        lead,
      text,
      categoryId,
     } = this.props;

    return (

    <article class="home-teaser__block">
      <h2 class="home-teaser__title">{title} </h2>
      <div class="home-teaser__text-img"><img class="img--block" src={picture} alt="Foto Gemmaicha mit Maccha"/></div>
      <div class="home-teaser__text-block">
        <p class="lead">{lead} </p>
        <p>{text} </p>
        <Link to={"/shop/" + this.props._id}>Detail Site</Link>
        <button onClick={() => this.addToCart(this.props)} class="float-right"><FontAwesome name="cart-plus" /></button>
      </div>
    </article>

/*
      <HomeArticle>
        <HomeTeaserTitle>{title}  </HomeTeaserTitle>
        <HomeTeaserImg><img class="img--block" src="{picture}" alt="Foto Gemmaicha mit Maccha"/></HomeTeaserImg>
        <div class="home-teaser__text-block">
          <HomeTeaserLead>{lead} </HomeTeaserLead>
          <p>{text} </p>
        </div>
        <Link to={"/shop/" + this.props._id}>Detail Site</Link>
        <button onClick={() => this.addToCart(this.props)} class="float-right"><FontAwesome name="cart-plus" /></button>
      </HomeArticle>
  */
    );
  }
}
