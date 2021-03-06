import React from 'react';
import { AmcLogo, DisneyPlusLogo, FxLogo, HboLogo, NetflixLogo, PrimeVideoLogo, YoutubeLogo } from './styled';

interface ProviderLogoProps {
  provider: string;
}

const logoMap: { [key: string]: any } = {
  'Prime Video': PrimeVideoLogo,
  HBO: HboLogo,
  AMC: AmcLogo,
  FX: FxLogo,
  Netflix: NetflixLogo,
  YouTube: YoutubeLogo,
  'Disney+': DisneyPlusLogo,
  fallback: () => null,
};

function ProviderLogo({ provider }: ProviderLogoProps) {
  const Logo = logoMap[provider] || logoMap.fallback;
  return <Logo />;
}

export default ProviderLogo;
