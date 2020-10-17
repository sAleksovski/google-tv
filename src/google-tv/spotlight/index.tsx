import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { SPOTLIGHT_TV_ITEM } from 'google-tv/data';
import React from 'react';
import ProviderLogo from './provider-logo';
import { PlayButton, ShowDescription, ShowTitle, SpotlightContainer } from './styled';

const FocusableSpotlightContainer = withFocusable({ trackChildren: true })(SpotlightContainer);
const FocusablePlayButton = withFocusable()(PlayButton);

function Spotlight() {
  return (
    <FocusableSpotlightContainer>
      <ProviderLogo provider={SPOTLIGHT_TV_ITEM.provider} />
      <ShowTitle>{SPOTLIGHT_TV_ITEM.title}</ShowTitle>
      <ShowDescription>{SPOTLIGHT_TV_ITEM.description}</ShowDescription>
      <FocusablePlayButton>Watch on {SPOTLIGHT_TV_ITEM.provider}</FocusablePlayButton>
    </FocusableSpotlightContainer>
  );
}

export default Spotlight;
