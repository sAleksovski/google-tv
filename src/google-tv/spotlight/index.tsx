import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { SPOTLIGHT_TV_ITEM } from 'google-tv/data';
import React from 'react';
import { PlayButton, ShowDescription, ShowProvider, ShowTitle, SpotlightContainer, YoutubeLogo } from './styled';

const FocusablePlayButton = withFocusable()(PlayButton);

const FocusableSpotlightContainer = withFocusable()(SpotlightContainer);

function Spotlight() {
  return (
    <FocusableSpotlightContainer>
      <ShowProvider>
        <YoutubeLogo /> {SPOTLIGHT_TV_ITEM.provider}
      </ShowProvider>
      <ShowTitle>{SPOTLIGHT_TV_ITEM.title}</ShowTitle>
      <ShowDescription>{SPOTLIGHT_TV_ITEM.description}</ShowDescription>
      <FocusablePlayButton>Watch on {SPOTLIGHT_TV_ITEM.provider}</FocusablePlayButton>
    </FocusableSpotlightContainer>
  );
}

export default Spotlight;
