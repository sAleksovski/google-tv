import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { GoogleTvContext } from 'google-tv/state';
import { scrollToY } from 'google-tv/utils';
import React, { useCallback, useContext, useRef } from 'react';
import ProviderLogo from './provider-logo';
import { PlayButton, ShowDescription, ShowTitle, SpotlightContainer } from './styled';

const FocusableSpotlightContainer = withFocusable({ trackChildren: true })(SpotlightContainer);
const FocusablePlayButton = withFocusable()(PlayButton);

function Spotlight() {
  const playButtonRef = useRef<any>();
  const { spotlightItem, resetSpotlightItem, startPlayingVideo } = useContext(GoogleTvContext);
  const onBecameFocused = useCallback(() => {
    resetSpotlightItem();
    scrollToY(0);
  }, [resetSpotlightItem]);
  const onEnterPress = useCallback(() => {
    const { top, left, height, width } = playButtonRef.current.getBoundingClientRect();
    startPlayingVideo(spotlightItem, { top: top - 12, left: left - 16, height: height + 24, width: width + 32 });
  }, [spotlightItem, startPlayingVideo]);
  return (
    <FocusableSpotlightContainer onBecameFocused={onBecameFocused}>
      <ProviderLogo provider={spotlightItem.provider} />
      <ShowTitle>{spotlightItem.title}</ShowTitle>
      <ShowDescription>{spotlightItem.description}</ShowDescription>
      <FocusablePlayButton onEnterPress={onEnterPress}>
        <div ref={playButtonRef}>Watch on {spotlightItem.provider}</div>
      </FocusablePlayButton>
    </FocusableSpotlightContainer>
  );
}

export default Spotlight;
