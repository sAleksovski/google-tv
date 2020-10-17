import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import Backdrop from './backdrop';
import { SCI_FI_SAGAS, TOP_PICKS, TRENDING } from './data';
import Header from './header';
import HorizontalSection from './horizontal-section';
import Navigation from './navigation';
import Spotlight from './spotlight';

initNavigation();

function GoogleTV() {
  return (
    <Navigation>
      <Backdrop />
      <Header />
      <Spotlight />
      <HorizontalSection title="Top picks" items={TOP_PICKS} />
      <HorizontalSection title="Sci-fi sagas" items={SCI_FI_SAGAS} />
      <HorizontalSection title="Trending" items={TRENDING} />
    </Navigation>
  );
}

export default GoogleTV;
