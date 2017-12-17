import { css } from 'styled-components'

export const theme = {
    red1: '#C42E2E',
    red2: '#CE3031',
    red3: '#BB2C2A',
    red4: '#C02C2E',
    pale_red: 'rgba(206, 48, 49, 0.3)',
    pale_white: 'rgba(255, 255, 255, 0.5)',
    red1_hover:'rgba(196,46,46, 0.8)',
    header_bg: 'rgba(52,58,64,0.9)',
    font_regular: 	'"bariol_serifregular",Arial, sans-serif',
    font_italic:    '"bariolitalic", Arial, sans-serif',
};

export function rem(size) {
    return  `${(size / 16) * 1}rem`;
}
export function clearfix() {
    return  `&:after {
                content: "";
                display: table;
                clear: both;
                }
            }`;
}

const sizes = {
    giant: 1200,
    desktop: 1024,
    tablet: 768,
    phone: 576
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const remSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (max-width: ${remSize}rem) {
      ${css(...args)}
    }
  `
    return accumulator
}, {})




export function font_h1() {
    return `
        font-size:${rem(28)};
        line-height:${rem(36)};
        font-weight:bold;
    
        @include respond-to({$sizes.tablet}) {
            font-size:${rem(36)};
            line-height:${rem(42)};
        }
    `
}

 export function font_h2() {
     return `
    font-size:${rem(24)};
    line-height:${rem(32)};
    font-weight:bold;

    @include respond-to({$sizes.tablet}) {
        font-size:${rem(36)};
        line-height:${rem(48)};
    }
    `
}
export function font_h3() {
return `
    font-size:${rem(20)};
    line-height:${rem(28)};
    font-weight:bold;

    @include respond-to({$sizes.tablet}) {
        font-size:${rem(28)};
        line-height:${rem(34)};
    }
    `
}
export function font_h4() {
    return `
        font-size:${rem(17)};
        line-height:${rem(24)};
        font-weight:bold;
    `
}

export function font_lead() {
return `
    font-size:${rem(17)};
    line-height:${rem(24)};
    font-weight:bold;

    @include respond-to({$sizes.tablet}) {
        font-size:${rem(24)};
        line-height:${rem(32)};
    }
    `
}
export function font_body() {
    return `
        font-size:${rem(16)};
        line-height:${rem(24)};
    `
}

export function font_sml() {
    return `
        font-size:${rem(15)};
        line-height:${rem(20)};
    `
}

/*
Beispiel How to use

import {rem, clearfix} from '../../style/styleUtils';
import * as styleUtils from '../style/styleUtils';

${media.tablet`padding: 0 10px;`}
height:${rem(1000)}
${clearfix()}

*/
