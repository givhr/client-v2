import { createGlobalStyle } from 'styled-components';
import { themeColors } from '../colors';
import { CSSReset } from './CSSReset';
import { Font } from '../fonts';

export const GlobalStyles = createGlobalStyle`
  ${CSSReset};
  html, body {
    font-family: ${Font};
    color: black;
    background-color: ${themeColors.primary1};
  }
  h1 {
    font-size: 32px;
    line-height: 36px;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
  }
  h4 {
    font-size: 16px;
    line-height: 20px;
  }
  h5 {
    font-size: 12px;
    line-height: 16px;
  }
`;
