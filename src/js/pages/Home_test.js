import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import PageBg from "../components/layout/PageBg";
import styled from 'styled-components';

import HomeProduct from "../components/HomeProduct";
import { fetchProducts } from "../actions/productsActions";

const HomeMain = styled.main`
	padding-top: 160px;
    position: relative;
    z-index: 2;
    padding: 140px 40px;
    max-width: 1024px;
    margin: 0 auto;
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

@connect((store) => {
    return {
        products: store.products.products,
        productsFetched: store.products.fetched,
    };
})

export default class Home extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchProducts())
    }

  render() {
    const { location } = this.props;

      const { products, fetched, params } = this.props;
      const mappedProducts = products
          .filter(p => p.featured)
          .map((product, i) => {
              return <HomeProduct key={product._id} {...product} />
          });

      return

    const containerStyle = {
      marginTop: "1.5rem"
    };
    return (
      <div>
        <Nav location={location} />

          <PageBg/>
          <HomeMain class="main" role="main">
              {mappedProducts}

              <div class="content">
                  <HomeTitle>Tee ist wie Wein<br/>Tee ist Geschmacksache<br/>ich bin gespannt, ob meine Geschmack Ihnen zusagt oder ... </HomeTitle>
              </div>
              <HomeArticle>
                  <HomeTeaserTitle>Sind Sie Grüntee Anfängerin? </HomeTeaserTitle>
                  <HomeTeaserImg><img class="img--block" src="assets/img/tee/gemmacha-mit-maccha.jpg" alt="Foto Gemmaicha mit Maccha"/></HomeTeaserImg>
                  <div class="home-teaser__text-block">
                      <HomeTeaserLead>Dann werde ich ihnen "Gemmaicha mit Maccha" Tee emphelen. </HomeTeaserLead>
                      <p>Gar nicht bitter und dank der gerösteter Volkornreiskörner sehr knussplig wie Popkorn. Mit Maccha verschwächen sie nicht Grüntee Geschmack. Der Teewasser ist ganz schöne Grun. Als ich kind war, habe ich nur diesen Tee gerne gehabt. </p>
                  </div>
              </HomeArticle>
              <HomeArticle>
                  <HomeTeaserTitle>Für Sie muss Grüntee "Bio" sein, aber muss er auch gut Schmecken? </HomeTeaserTitle>
                  <HomeTeaserImg><img class="img--block" src="assets/img/tee/sencha.jpg" alt="Foto Sencha"/></HomeTeaserImg>
                  <div class="home-teaser__text-block">
                      <HomeTeaserLead>Dann werde ich ihnen "Bio Sencha" aus Shizuoka emphelen. </HomeTeaserLead>
                      <p>Der Grüntee ist sehr gut für das Gesundheit dank ihrer Katekin (Bitterstoff), Vitamin C. Sie möchten gerne für Ihre Gesundheit trinken und dabei sicher sein, der Tee Pestizide frei ist.<br/>
                          Jawohl! Dieser Tee ist Bio Qualität und dazu noch sehr aromatisch und wundervoll.  </p>
                  </div>
              </HomeArticle>
              <HomeArticle>
                  <HomeTeaserTitle>Maccha ist jetzt hip und trendy? </HomeTeaserTitle>
                  <HomeTeaserImg><img class="img--block" src="assets/img/tee/maccha.jpg" alt="Foto Maccha"/></HomeTeaserImg>
                  <div class="home-teaser__text-block">
                      <HomeTeaserLead>Zuerst probieren Sie Koko no Shiro Nieveau</HomeTeaserLead>
                      <p>Es gibt 2 verschiedene Maccha Klasse. Erste ist Usucha (Dünne Tee in Teezeremonie), andere ist Koicha (Dicke Tee in Teezeremonie). Da diese unterschiedliche Konsistent sind, ist der Tee Karakter auch verschieden. <br/>
                          Koicha Qualität ist weniger bitter und sehr aromatisch. Usucha Qualität ist frisch. </p>
                  </div>
              </HomeArticle>

          </HomeMain>
        <Footer />
      </div>
    );
  }
}
