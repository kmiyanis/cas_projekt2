import React from "react";
import styled from 'styled-components';

const FooterTag = styled.footer`
	text-align:center;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterTag class="py-5 bg-dark">
        <div class="container">
          <ul class="footer__info text-center text-white"><li  class="footer-info__item">MIYA JAPAN TEE</li><li class="footer-info__item">Döltschihalde 19, CH-8055 Zürich</li><li class="footer-info__item">tel: +41.44.463.10.93</li><li class="footer-info__item">Email: mail@miya.ch</li> </ul>
        </div>
      </FooterTag>
    );
  }
}
