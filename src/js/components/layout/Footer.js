import React from "react";
import styled from 'styled-components';

import CartMini from "../CartMini";

const FooterTag = styled.footer`
	text-align:center;
	font-weight:bold;
`;
const FooterLink = styled.a`
	color:#FFFFFF;
	text-decoration:none;
	border-bottom:2px solid transparent;
	&:hover {
	text-decoration:none;
        border-bottom:2px solid #FFFFFF;
        color:#FFFFFF;
	}
`;
export default class Footer extends React.Component {
  render() {
    return (
      <FooterTag class="py-5 bg-dark">
        <CartMini />
        <div class="container">
          <ul class="footer__info text-center text-white">
              <li  class="footer-info__item">MIYA JAPAN TEE</li>
              <li class="footer-info__item">Döltschihalde 19, CH-8055 Zürich</li>
              <li class="footer-info__item"><FooterLink href="tel:0444631093">Tel: +41.44.463.10.93</FooterLink></li>
              <li class="footer-info__item"><FooterLink href="mailto:mail@miya.ch"> mail@miya.ch</FooterLink></li> </ul>
        </div>
      </FooterTag>
    );
  }
}
