import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import PageBg from "../components/layout/PageBg";
import styled from 'styled-components';

import Article from "../components/Article";
import {fetchArticles} from "../actions/articleActions";

import {rem, media} from '../style/styleUtils';


const HomeMain = styled.main`
  position: relative;
  z-index: 2;
  padding: 6.25rem ${rem(20)};
  margin: 0 auto; 
  @media only screen and (min-width: 768px) {
      padding: 6.25rem ${rem(40)};
      max-width: 64rem; 
   } 
`;

const HomeTitle = styled.h1`
  color: white;
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: bold;
  font-weight: bold;
  margin-bottom: 2.5rem; 
  
  @media only screen and (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.625rem; 
  } 
`;


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



@connect((store) => {
    return {
        products: store.articles.products,
        productsFetched: store.articles.fetched,
    };
})

export default class Home extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchArticles())
    }

    render() {
        const {location} = this.props;
console.log('location',location);
        const {products, fetched, params} = this.props;
        const mappedProducts = products
            .filter(p => p.home)
            .map((product, i) => {
                return <Article key={product._id} {...product} />
            });


        return (
            <div>
                <Nav location={location}/>

                <PageBg/>
                <HomeMain class="main" role="main">
                    <div class="content">
                        <HomeTitle>Tee ist wie Wein<br/>Tee ist Geschmacksache<br/>ich bin gespannt, ob meine Geschmack
                            Ihnen zusagt oder ... </HomeTitle>
                    </div>
                    {mappedProducts}

                </HomeMain>
                <Footer />
            </div>
        );
    }
}
