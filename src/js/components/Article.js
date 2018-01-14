import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import FontAwesome from "react-fontawesome";
import {rem, media, theme, font_h2,font_h3} from '../style/styleUtils';

import {addToCart, fetchCart} from "../actions/cartActions"

import styled from 'styled-components';


const HomeArticle = styled.article`
  margin: 2.5rem auto;
  padding: 1.25rem 1.56rem;
 background: #FFFFFF;
  -webkit-box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.15); 
          
  @media only screen and (min-width: 768px) {
      margin: 5.25rem auto;
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
    ${font_h2()}
    margin-bottom:${rem(20)};

  ${media.tablet`
       margin-bottom:${rem(30)};
  `}

  margin-bottom: 1.25rem; 
  @media only screen and (min-width: 768px) {
      font-size: 1.75rem;
      line-height: 2.125rem; 
      margin-bottom: 1.875rem;
  } 
`;
const HomeTeaserImg = styled.div`
    margin:20px auto;
    border-radius:18.75rem;
    max-width: 18.75rem;
    overflow: hidden;
    width:80%;
    
     @media only screen and (min-width: 768px) {
        float: left;
        margin: 0 1.875rem 1.875rem 0;
     }    
 `;

const HomeTeaserLead = styled.p`
    ${font_h3()}
  margin-bottom: 1.25rem;  
 `;


@connect((store) => {
    return {};
})

export default class Article extends React.Component {

    addToCart = (product) => {
        this.props.dispatch(addToCart(product._id, 1));
    }
    addToCartShow () {
      if(!this.props.link) {
          return (
            <div class="home__cart-plus icon__cart-plus" onClick={() => this.addToCart(this.props)} >
                <FontAwesome  name="cart-plus"/>
            </div>
          )
      } else {
        return <div></div>
      }
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
            cart,
            link,
            categoryId,
        } = this.props;

        return (

            <HomeArticle>
                <HomeTeaserTitle>{title}  </HomeTeaserTitle>
                <HomeTeaserImg><Link  to={this.props.link ? this.props.link : "/shop/product/" + this.props._id}><img class="img--block" src={picture} alt={title} /></Link></HomeTeaserImg>
                <div class="home-teaser__text-block">
                    <HomeTeaserLead>{lead} </HomeTeaserLead>
                    <p>{text} </p>
                </div>
                <div class="home-teaser__footer">
                    <Link class="box__link" to={this.props.link ? this.props.link : "/shop/product/" + this.props._id}>Weiter</Link>
                     { this.addToCartShow ()}

                </div>
            </HomeArticle>

        );
    }
}
