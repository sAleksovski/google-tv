import { TvItem } from 'google-tv/data';
import { GoogleTvContext } from 'google-tv/state';
import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalBackdropStyle = createGlobalStyle<{ spotlightItem: TvItem }>`
  html {
    background: linear-gradient(rgba(2, 2, 2, .5), rgba(2, 2, 2, .2), rgba(2, 2, 2, 1)),
      url("${({ spotlightItem }) => spotlightItem.backdropImage}") no-repeat center center fixed;
    background-size: cover;
  }
`;

function Backdrop() {
  const { spotlightItem } = useContext(GoogleTvContext);

  return <GlobalBackdropStyle spotlightItem={spotlightItem} />;
}

export default Backdrop;
