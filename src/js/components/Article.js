import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import FontAwesome from "react-fontawesome";

import {addToCart} from "../actions/cartActions"

import styled from 'styled-components';


const HomeArticle = styled.article`
  margin: 2.5rem auto;
  padding: 1.25rem 1.56rem;
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
    border-radius:18.75rem;
    max-width: 18.75rem;
    overflow: hidden;
    width:100%;
    
     @media only screen and (min-width: 768px) {
        float: left;
        margin: 0 1.875rem 1.875rem 0;
     }    
 `;

const HomeTeaserLead = styled.p`
    font-size: 1.5rem;
  line-height: 1.75rem;
  margin-bottom: 1.25rem;  
 `;




@connect((store) => {
    return {};
})

export default class Article extends React.Component {
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

            <HomeArticle>
                <HomeTeaserTitle>{title}  </HomeTeaserTitle>
                <HomeTeaserImg><img class="img--block" src={picture} alt="Foto Gemmaicha mit Maccha"/></HomeTeaserImg>
                <div class="home-teaser__text-block">
                    <HomeTeaserLead>{lead} </HomeTeaserLead>
                    <p>{text} </p>
                </div>
                <Link class="box__link" to={"/shop/" + this.props._id}>Detail Site</Link>
                <button onClick={() => this.addToCart(this.props)} class="float-right icon__cart-plus"><FontAwesome  name="cart-plus"/>
                </button>
            </HomeArticle>

        );
    }
}
