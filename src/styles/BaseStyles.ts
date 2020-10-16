import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Reset box-sizing */
  * {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
  }
`;
