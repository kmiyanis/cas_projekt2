import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import FontAwesome from "react-fontawesome";
import {rem, media, theme} from '../style/styleUtils';

import {addToCart} from "../actions/cartActions"

import styled from 'styled-components';


const HomeArticle = styled.article`
  margin: 2.5rem auto;
  padding: 1.25rem 1.56rem;
 background: #FFFFFF;
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
    width:80%;
    
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

const ButtonSml = styled.button`
	color: white;
	border: 0;
	border-radius: ${rem(40)};
	background: ${theme.red2};
	width: ${rem(60)};
	height: ${rem(40)};
	margin:${rem(24)} 0;
	font-size:${rem(22)};
	cursor: pointer;
	float:right;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  
	&:hover {
		 -webkit-transform: scale(1.1);
    transform: scale(1.1);
	}


  
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
                <HomeTeaserImg><Link  to={"/shop/" + this.props._id}><img class="img--block" src={picture} alt="Foto Gemmaicha mit Maccha"/></Link></HomeTeaserImg>
                <div class="home-teaser__text-block">
                    <HomeTeaserLead>{lead} </HomeTeaserLead>
                    <p>{text} </p>
                </div>
                <Link class="box__link" to={"/shop/" + this.props._id}>Detail Site</Link>
                <ButtonSml onClick={() => this.addToCart(this.props)} ><FontAwesome  name="cart-plus"/>
                </ButtonSml>
            </HomeArticle>

        );
    }
}
