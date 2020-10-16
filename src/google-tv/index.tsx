import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import Backdrop from './backdrop';
import Header from './header';
import Navigation from './navigation';
import Spotlight from './spotlight';

initNavigation({
  debug: true,
});

function GoogleTV() {
  return (
    <Navigation>
      <Backdrop />
      <Header />
      <Spotlight />
    </Navigation>
  );
}

export default GoogleTV;
