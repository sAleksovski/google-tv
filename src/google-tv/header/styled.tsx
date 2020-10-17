import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  padding: 32px 48px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
`;

export const StyledHeaderLink = styled.div<{ active?: boolean }>`
  padding: 12px 16px;
  margin: 0 16px;
  border-radius: 21px;
  color: white;
  display: flex;
  align-items: center;
  opacity: 0.8;
  ${({ active }) =>
    active &&
    `
    color: black;
  `}
  transition: all .35s ease-in-out;
`;

export const HeaderLinkBackground = styled.div<{
  height: number;
  width: number;
  top: number;
  left: number;
  opacity: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  position: absolute;
  ${({ opacity }) => (opacity === 1 ? 'block' : 'display: none')};

  border-radius: 21px;
  background-color: white;
  color: black;

  z-index: -1;
  transition: all 0.35s ease-in-out;
`;

const StyledSVG = styled.svg<{ active: boolean }>`
  margin-right: 8px;

  path {
    transition: all 0.35s ease-in-out;
    fill: ${({ active }) => (active ? 'black' : '#fff')};
  }
`;

export const AssistantLogo = ({ active }: { active: boolean }) => (
  <StyledSVG viewBox="0 0 200 172" shape-rendering="geometricPrecision" height="18px" width="18px" {...{ active }}>
    <path
      d="M176.4 60.2c7.1 0 12.9-5.8 12.9-12.9s-5.8-12.9-12.9-12.9-12.9 5.8-12.9 12.9 5.7 12.9 12.9 12.9"
      fillOpacity="0.8"
    ></path>
    <path
      d="M137.7 103.2c14.3 0 25.8-11.6 25.8-25.8S152 51.6 137.7 51.6s-25.8 11.6-25.8 25.8 11.5 25.8 25.8 25.8"
      fillOpacity="0.8"
    ></path>
    <path
      d="M137.7 172c16.6 0 30.1-13.5 30.1-30.2s-13.5-30.1-30.2-30.1c-16.6 0-30.1 13.5-30.1 30.1 0 16.7 13.5 30.2 30.2 30.2"
      fillOpacity="0.8"
    ></path>
    <path
      d="M51.6 103.2c28.5 0 51.6-23.1 51.6-51.6S80.1 0 51.6 0 0 23.1 0 51.6s23.1 51.6 51.6 51.6"
      fill={active ? 'black' : '#fff'}
      fillOpacity="0.8"
    ></path>
  </StyledSVG>
);
