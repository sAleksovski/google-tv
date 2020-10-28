import { GoogleTvContext } from 'google-tv/state';
import React, { useContext } from 'react';
import { StyledBackdrop, StyledBackdropGradient } from './styled';

function Backdrop() {
  const { spotlightItem, isOnTop } = useContext(GoogleTvContext);

  return (
    <>
      <StyledBackdrop spotlightItem={spotlightItem} />
      <StyledBackdropGradient isOnTop={isOnTop} />
    </>
  );
}

export default Backdrop;
