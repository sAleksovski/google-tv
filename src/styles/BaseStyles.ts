import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Reset box-sizing */
  * {
    box-sizing: border-box;
  }

  :root {
    --base-font-size: 12px;
    @media(min-height: 1080px) {
      --base-font-size: 16px;
    }

    @media(min-height: 1440px) {
      --base-font-size: 21px;
    }

    @media(min-height: 2160px) {
      --base-font-size: 32px;
    }
  }


  html, body {
    min-height: 100%;
    font-size: var(--base-font-size);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;
