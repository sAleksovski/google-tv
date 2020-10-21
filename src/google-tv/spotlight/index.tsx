import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { GoogleTvContext } from 'google-tv/state';
import { remToPx, scrollToY } from 'google-tv/utils';
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
    startPlayingVideo(spotlightItem, {
      top: top - remToPx(0.75),
      left: left - remToPx(1),
      height: height + remToPx(1.5),
      width: width + remToPx(2),
    });
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
