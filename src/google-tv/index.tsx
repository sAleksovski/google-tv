import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import Backdrop from './backdrop';
import { BINGEWORTHY_DRAMAS, IN_YOUR_LIBRARY, SCI_FI_SAGAS, TOP_PICKS, TRENDING } from './data';
import Header from './header';
import HorizontalSection from './horizontal-section';
import Navigation from './navigation';
import Spotlight from './spotlight';
import GoogleTvProvider from './state';
import { useDisableScroll } from './utils';

initNavigation();

function GoogleTV() {
  useDisableScroll();
  return (
    <GoogleTvProvider>
      <Navigation>
        <Backdrop />
        <Header />
        <Spotlight />
        <HorizontalSection title="Top picks" items={TOP_PICKS} scrollToTop />
        <HorizontalSection title="Sci-fi sagas" items={SCI_FI_SAGAS} />
        <HorizontalSection title="Trending" items={TRENDING} />
        <HorizontalSection title="Bingeworthy dramas" items={BINGEWORTHY_DRAMAS} />
        <HorizontalSection title="In your library" items={IN_YOUR_LIBRARY} />
      </Navigation>
    </GoogleTvProvider>
  );
}

export default GoogleTV;
