import { TvItemCoor } from 'google-tv/state';
import YouTube from 'react-youtube';
import styled from 'styled-components';

export const YoutubePlayer = styled(YouTube)<{ coor: TvItemCoor; isPlaying: boolean }>`
  position: fixed;
  z-index: 1;
  transition: all 0.35s ease-in-out;
  ${({ coor }) => `
    top: ${coor.top}px;
    left: ${coor.left}px;
    height: ${coor.height}px;
    width: ${coor.width}px;
  `}
  ${({ isPlaying }) =>
    isPlaying &&
    `
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  `}
`;
