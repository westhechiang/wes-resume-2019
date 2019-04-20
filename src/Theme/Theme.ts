import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

// global css; only add to this if there are no other options
export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body,
  html,
  #root {
    height: 100%;
  }
`;

const colors = {
  black: '#000000',
  transparent: 'transparent',
  white: '#FFFFFF',
};

const fontSizes = [
  8, // 0
  10, // 1
  12, // 2
  16, // 3
  18, // 4
  20, // 5
  22, // 6
  24, // 7
  26, // 8
  32, // 9
  36, // 10
  40, // 11
  48, // 12
];

const breakpoints = [
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '120em', // 1920px
];

const space = [
  0, // 0
  5, // 1
  10, // 2
  20, // 3
  40, // 4
  60, // 5
];

const fontWeights = [
  200, // 0
  300, // 1
  400, // 2
  500, // 3
  600, // 4
  700, // 5
  800, // 6
  900, // 7
];

const borders = [0, '1px solid', '2px solid'];

const letterSpacings = [];

const radii = [
  0, // 0
  2, // 1
  4, // 2
  8, // 3
];

const lineHeights = [1, 1.125, 1.25, 1.5];

const fonts = {
  body: '"Source Sans Pro", Helvetica, Arial, sans-serif',
};

export const Theme = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  space,
};
