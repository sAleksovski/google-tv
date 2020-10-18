import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { GoogleTvContext } from 'google-tv/state';
import { scrollToY } from 'google-tv/utils';
import React, { useCallback, useContext } from 'react';
import ProviderLogo from './provider-logo';
import { PlayButton, ShowDescription, ShowTitle, SpotlightContainer } from './styled';

const FocusableSpotlightContainer = withFocusable({ trackChildren: true })(SpotlightContainer);
const FocusablePlayButton = withFocusable()(PlayButton);

function Spotlight() {
  const { spotlightItem, resetSpotlightItem } = useContext(GoogleTvContext);
  const onBecameFocused = useCallback(() => {
    resetSpotlightItem();
    scrollToY(0);
  }, [resetSpotlightItem]);
  return (
    <FocusableSpotlightContainer onBecameFocused={onBecameFocused}>
      <ProviderLogo provider={spotlightItem.provider} />
      <ShowTitle>{spotlightItem.title}</ShowTitle>
      <ShowDescription>{spotlightItem.description}</ShowDescription>
      <FocusablePlayButton>Watch on {spotlightItem.provider}</FocusablePlayButton>
    </FocusableSpotlightContainer>
  );
}

export default Spotlight;
