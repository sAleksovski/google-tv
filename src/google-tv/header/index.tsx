import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React, { useState } from 'react';
import Avatar from './avatar';
import HeaderLink from './header-link';
import { AssistantLogo, HeaderContainer, HeaderLinkBackground, HeaderLinks } from './styled';

const FocusableHeaderLinks = withFocusable()(HeaderLinks);

const FocusableHeaderLink = withFocusable()(HeaderLink);

function Header() {
  const [focused, setFocused] = useState({ height: 0, width: 0, top: 0, left: 0, opacity: 0 });
  const [active, setActive] = useState('For you');

  function changeFocused(f: any, label: string) {
    setFocused({ ...f, opacity: 1 });
    setActive(label);
  }

  return (
    <HeaderContainer>
      <FocusableHeaderLinks>
        <HeaderLink>GoogleTV</HeaderLink>
        <FocusableHeaderLink active={active === 'Search'} setFocused={(f: any) => changeFocused(f, 'Search')}>
          <AssistantLogo active={active === 'Search'} />
          Search
        </FocusableHeaderLink>
        <FocusableHeaderLink
          active={active === 'For you'}
          setFocused={(f: any) => changeFocused(f, 'For you')}
          focusKey="initial-focus"
        >
          For you
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Live'} setFocused={(f: any) => changeFocused(f, 'Live')}>
          Live
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Movies'} setFocused={(f: any) => changeFocused(f, 'Movies')}>
          Movies
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Shows'} setFocused={(f: any) => changeFocused(f, 'Shows')}>
          Shows
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Apps'} setFocused={(f: any) => changeFocused(f, 'Apps')}>
          Apps
        </FocusableHeaderLink>
        <FocusableHeaderLink active={active === 'Library'} setFocused={(f: any) => changeFocused(f, 'Library')}>
          Library
        </FocusableHeaderLink>
        <HeaderLinkBackground {...focused} />
      </FocusableHeaderLinks>
      <Avatar
        name="Stefan"
        avatarUrl="https://media-exp1.licdn.com/dms/image/C5603AQEdh0QjrNpWkA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=W4IWOY1Qbqfk4MLWlurI6zbGkA4sPXKe98oMLt99EmA"
      />
    </HeaderContainer>
  );
}

export default Header;
