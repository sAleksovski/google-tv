import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import { PlayButton, ShowDescription, ShowProvider, ShowTitle, SpotlightContainer, YoutubeLogo } from './styled';

const FocusablePlayButton = withFocusable()(PlayButton);

const FocusableSpotlightContainer = withFocusable()(SpotlightContainer);

function Spotlight() {
  return (
    <FocusableSpotlightContainer>
      <ShowProvider>
        <YoutubeLogo /> YouTube
      </ShowProvider>
      <ShowTitle>The Mandalorian</ShowTitle>
      <ShowDescription>
        Google TV Staff Pick | A lone gunfighter makes his way through the outer reaches of the galaxy, far from the
        authority of the New Republic.
      </ShowDescription>
      <FocusablePlayButton>Watch on Youtube</FocusablePlayButton>
    </FocusableSpotlightContainer>
  );
}

export default Spotlight;
