import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import PageBg from "../components/layout/PageBg";
import styled from 'styled-components';

import Article from "../components/Article";
import {fetchArticles} from "../actions/articleActions";
import CartMini from "../components/CartMini";


import { rem, media, font_h1 } from '../style/styleUtils';

const HomeMain = styled.main`
  position: relative;
  z-index: 2;
  padding: ${rem(100)} ${rem(20)};
  margin: 0 auto; 
  
  ${media.tablet`
    padding: ${rem(130)} ${rem(40)};
      max-width:${rem(1024)}; 
  `}
`;

const HomeTitle = styled.h1`
  color: white;
  ${font_h1()}
  margin-bottom: ${rem(40)};
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
                {/* <CartMini /> */}
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
