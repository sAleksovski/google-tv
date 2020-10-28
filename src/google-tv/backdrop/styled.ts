import { TvItem } from 'google-tv/data';
import styled from 'styled-components';

export const StyledBackdrop = styled.div<{ spotlightItem: TvItem }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: url('${({ spotlightItem }) => spotlightItem.backdropImage}') no-repeat center center fixed;
  background-size: cover;
  transition: background 0.35s ease-in-out;
  z-index: -3;
`;

export const StyledBackdropGradient = styled.div<{ isOnTop: boolean }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(2, 2, 2, 0.5),
      rgba(2, 2, 2, 0.2),
      rgba(2, 2, 2, 0.8),
      rgba(2, 2, 2, 0.85),
      rgba(2, 2, 2, 0.85),
      rgba(2, 2, 2, 0.85)
    )
    no-repeat center center fixed;
  background-size: 100% 200%;
  background-position: 0% 100%;
  ${({ isOnTop }) => isOnTop && `background-position: 0% 0%;`}
  transition: background 0.35s ease-in-out;
  z-index: -2;
`;
