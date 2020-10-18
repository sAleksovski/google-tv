import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { user } from 'google-tv/data';
import { scrollToY } from 'google-tv/utils';
import React, { useCallback, useState } from 'react';
import Avatar from './avatar';
import HeaderLink from './header-link';
import { AssistantLogo, GoogleTvLogo, HeaderContainer, HeaderLinkBackground, HeaderLinks } from './styled';

const FocusableHeaderLinks = withFocusable()(HeaderLinks);

const FocusableHeaderLink = withFocusable()(HeaderLink);

function Header() {
  const [focused, setFocused] = useState({ height: 0, width: 0, top: 0, left: 0, opacity: 0 });
  const [active, setActive] = useState('For you');

  const changeFocused = useCallback(
    ({ label, ...f }: any) => {
      setFocused({ ...f, opacity: 1 });
      setActive(label);
      scrollToY(0);
    },
    [setFocused, setActive],
  );

  return (
    <HeaderContainer>
      <FocusableHeaderLinks>
        <HeaderLink>
          <GoogleTvLogo />
        </HeaderLink>
        <FocusableHeaderLink active={active === 'Search'} label="Search" setFocused={changeFocused}>
          <AssistantLogo active={active === 'Search'} />
          Search
        </FocusableHeaderLink>
        <FocusableHeaderLink
          focusKey="initial-focus"
          active={active === 'For you'}
          label="For you"
          setFocused={changeFocused}
        >
          For you
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Live'} label="Live" setFocused={changeFocused}>
          Live
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Movies'} label="Movies" setFocused={changeFocused}>
          Movies
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Shows'} label="Shows" setFocused={changeFocused}>
          Shows
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Apps'} label="Apps" setFocused={changeFocused}>
          Apps
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Library'} label="Library" setFocused={changeFocused}>
          Library
        </FocusableHeaderLink>
        <HeaderLinkBackground {...focused} />
      </FocusableHeaderLinks>
      <Avatar name={user.name} avatarUrl={user.avatarUrl} />
    </HeaderContainer>
  );
}

export default Header;
