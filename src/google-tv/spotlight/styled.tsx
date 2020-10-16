import React from 'react';
import styled from 'styled-components';

export const SpotlightContainer = styled.div`
  padding: 128px 80px 24px;
`;

export const ShowProvider = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
  opacity: 0.9;
  display: flex;
`;

export const ShowTitle = styled.h1`
  color: white;
  opacity: 0.9;
  font-size: 48px;
  margin-top: 0;
`;

export const ShowDescription = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 20px;
  margin-bottom: 32px;
`;

export const PlayButton = styled.span<{ focused: boolean }>`
  display: inline-block;
  padding: 12px 16px;
  border-radius: 21px;
  color: black;
  background-color: white;
  opacity: 0;
  font-weight: bold;
  ${({ focused }) =>
    focused &&
    `
    opacity: 1;
    box-shadow: 0 0 0 2pt white;
  `}
  transition: all .35s ease-in-out;
`;

const StyledSvg = styled.svg`
  margin-right: 8px;

  .outline {
    fill: #fff;
    opacity: 0.8;
  }
`;

export const YoutubeLogo = () => (
  <StyledSvg viewBox="0 0 160 110" height="24px" width="30px">
    <path
      className="outline"
      d="M154.3 17.5a19.6 19.6 0 0 0-13.8-13.8C128.4.4 79.7.4 79.7.4S31 .5 18.9 3.8A19.6 19.6 0 0 0 5.1 17.6C1.44 39.1.02 71.86 5.2 92.5A19.6 19.6 0 0 0 19 106.3c12.1 3.3 60.8 3.3 60.8 3.3s48.7 0 60.8-3.3a19.6 19.6 0 0 0 13.8-13.8c3.86-21.53 5.05-54.27-.1-75z"
    />
    <path fill="#858585" d="M64.2 78.4L104.6 55 64.2 31.6z" />
  </StyledSvg>
);
