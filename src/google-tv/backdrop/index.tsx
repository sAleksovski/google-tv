import { createGlobalStyle } from 'styled-components';

const Backdrop = createGlobalStyle`
  html {
    background: linear-gradient(rgba(2, 2, 2, .5), rgba(2, 2, 2, .2), rgba(2, 2, 2, 1)), url("https://image.tmdb.org/t/p/original/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg") no-repeat center center fixed;
    background-size: cover;
  }
`;

export default Backdrop;
