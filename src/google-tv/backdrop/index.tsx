import { SPOTLIGHT_TV_ITEM } from 'google-tv/data';
import { createGlobalStyle } from 'styled-components';

const Backdrop = createGlobalStyle`
  html {
    background: linear-gradient(rgba(2, 2, 2, .5), rgba(2, 2, 2, .2), rgba(2, 2, 2, 1)), url("${SPOTLIGHT_TV_ITEM.backdropImage}") no-repeat center center fixed;
    background-size: cover;
  }
`;

export default Backdrop;
