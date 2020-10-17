import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { GoogleTvContext } from 'google-tv/state';
import React, { useContext } from 'react';
import ProviderLogo from './provider-logo';
import { PlayButton, ShowDescription, ShowTitle, SpotlightContainer } from './styled';

const FocusableSpotlightContainer = withFocusable({ trackChildren: true })(SpotlightContainer);
const FocusablePlayButton = withFocusable()(PlayButton);

function Spotlight() {
  const { spotlightItem, resetSpotlightItem } = useContext(GoogleTvContext);
  return (
    <FocusableSpotlightContainer onBecameFocused={resetSpotlightItem}>
      <ProviderLogo provider={spotlightItem.provider} />
      <ShowTitle>{spotlightItem.title}</ShowTitle>
      <ShowDescription>{spotlightItem.description}</ShowDescription>
      <FocusablePlayButton>Watch on {spotlightItem.provider}</FocusablePlayButton>
    </FocusableSpotlightContainer>
  );
}

export default Spotlight;
