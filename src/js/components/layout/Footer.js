import React from "react";
import styled from 'styled-components';
import {rem, media, theme, font_h3} from '../../style/styleUtils';

import CartMini from "../CartMini";


const FooterLink = styled.a`
	color:#FFFFFF;
	text-decoration:none;
	border-bottom:1px solid #FFFFFF;
	position:relative;
	transition: all .3s;
	display:inline-block;
	&:hover {
	    text-decoration:none;
        color:#FFFFFF;
	}
	&:hover:after {
        width: 100%;
    }
	&:after {
        bottom: -3px;
        position:absolute;
        left: 0;
        right: 0;
        content: '';
		color: transparent;
        margin: auto;
        width: 0%;
        background: #FFFFFF;
        height: 1px;
        transition: all .3s;
    }
`;
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <CartMini />
        <div class="container">
          <ul class="footer__info">
              <li  class="footer-info__item">MIYA JAPAN TEE</li>
              <li class="footer-info__item">Döltschihalde 19, CH-8055 Zürich</li>
              <li class="footer-info__item"><FooterLink href="tel:0444631093">Tel: +41.44.463.10.93</FooterLink></li>
              <li class="footer-info__item"><FooterLink href="mailto:mail@miya.ch"> mail@miya.ch</FooterLink></li> </ul>
        </div>
      </footer>
    );
  }
}
