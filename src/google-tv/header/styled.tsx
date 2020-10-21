import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem 3rem;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinkBackground = styled.div<{
  height: number;
  width: number;
  top: number;
  left: number;
  display: string;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  position: absolute;
  opacity: 0.2;
  display: ${({ display }) => `${display}`};

  border-radius: ${({ height }) => height / 2}px;
  background-color: white;
  color: black;

  z-index: -1;
  transition: all 0.35s ease-in-out;
`;

export const HeaderLinks = styled.div<{ hasFocusedChild: boolean }>`
  display: flex;

  ${({ hasFocusedChild }) =>
    hasFocusedChild &&
    `
    ${HeaderLinkBackground} {
      opacity: 1;
    }
  `}
`;

export const StyledHeaderLink = styled.div<{ active?: boolean; focused: boolean }>`
  padding: 0.75rem 1rem;
  margin: 0 1rem;
  color: white;
  display: flex;
  align-items: center;
  opacity: 0.8;
  ${({ active, focused }) =>
    active &&
    focused &&
    `
    color: black;
  `}
  transition: all .35s ease-in-out;
`;

const StyledSVG = styled.svg<{ active: boolean }>`
  margin-right: 0.5rem;

  path {
    transition: all 0.35s ease-in-out;
    fill: ${({ active }) => (active ? 'black' : '#fff')};
  }
`;

export const AssistantLogo = ({ active }: { active: boolean }) => (
  <StyledSVG
    viewBox="0 0 200 172"
    shape-rendering="geometricPrecision"
    height="1.125rem"
    width="1.125rem"
    {...{ active }}
  >
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

export const GoogleTvLogo = () => (
  <svg width="5.25rem" height="1.25rem" viewBox="0 0 84 20">
    <path
      fill="#fff"
      d="M7.435 15.729C3.392 15.729 0 12.408 0 8.33 0 4.255 3.392.934 7.435.934c2.229 0 3.826.875 5.03 2.028l-1.42 1.432c-.869-.816-2.012-1.452-3.61-1.452-2.958 0-5.266 2.406-5.266 5.37 0 2.982 2.308 5.368 5.266 5.368 1.913 0 2.998-.775 3.708-1.471.572-.577.947-1.412 1.085-2.546H7.435V7.635h6.745c.079.358.099.796.099 1.253 0 1.511-.415 3.38-1.736 4.733-1.282 1.392-2.919 2.108-5.108 2.108zm61.12-.3V3.973h3.61v-1.61H63.27v1.61h3.629v11.454h1.656zm9.252.023h1.735l4.733-13.065h-1.853l-3.688 10.599h-.079l-3.55-10.6h-1.854l4.556 13.066zm-57.748.272c2.563 0 4.654-2.008 4.654-4.752 0-2.765-2.09-4.753-4.654-4.753s-4.655 1.988-4.655 4.753c0 2.724 2.09 4.752 4.655 4.752zm0-7.636c1.42 0 2.623 1.173 2.623 2.884 0 1.69-1.223 2.883-2.623 2.883-1.42 0-2.623-1.193-2.623-2.883 0-1.71 1.222-2.884 2.623-2.884zm15.086 2.884c0 2.744-2.09 4.752-4.654 4.752s-4.655-2.028-4.655-4.752c0-2.765 2.091-4.753 4.655-4.753 2.564-.02 4.654 1.988 4.654 4.753zm-2.031 0c0-1.71-1.203-2.884-2.623-2.884-1.4 0-2.623 1.173-2.623 2.884 0 1.69 1.203 2.883 2.623 2.883 1.4 0 2.623-1.193 2.623-2.883zm12.208 4.076v-8.55h-1.953v.775h-.079c-.473-.557-1.36-1.054-2.485-1.054-2.347 0-4.516 2.088-4.516 4.772 0 2.665 2.15 4.733 4.516 4.733 1.124 0 2.012-.497 2.485-1.074h.08v.676c0 1.83-.967 2.804-2.525 2.804-1.282 0-2.071-.914-2.386-1.69l-1.815.756C37.157 18.448 38.537 20 40.825 20c2.446 0 4.497-1.432 4.497-4.952zm-4.359-6.96c1.42 0 2.525 1.233 2.525 2.903 0 1.65-1.105 2.864-2.525 2.864s-2.623-1.213-2.623-2.864c0-1.67 1.183-2.903 2.623-2.903zm7.987-6.643v14h-2.07v-14h2.07zm9.782 12.171l-1.617-1.074c-.552.796-1.262 1.313-2.307 1.313s-1.815-.497-2.288-1.452l6.311-2.625-.217-.537c-.394-1.054-1.597-3.022-4.043-3.022-2.426 0-4.378 1.929-4.378 4.752 0 2.665 1.933 4.753 4.615 4.753 2.15 0 3.412-1.332 3.924-2.108zm-2.366-4.554l-4.22 1.77c-.04-1.85 1.42-2.784 2.465-2.784.828 0 1.518.418 1.755 1.014z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);
