import { SPOTLIGHT_TV_ITEM, TvItem } from 'google-tv/data';
import React, { useCallback, useState } from 'react';

export interface GoogleTvContextState {
  spotlightItem: TvItem;
  setSpotlightItem: (spotlightItem: TvItem) => void;
  resetSpotlightItem: () => void;
}

const initialState: GoogleTvContextState = {
  spotlightItem: SPOTLIGHT_TV_ITEM,
  setSpotlightItem: (spotlightItem: TvItem) => {},
  resetSpotlightItem: () => {},
};

export const GoogleTvContext = React.createContext<GoogleTvContextState>(initialState);

function GoogleTvProvider({ children }: any) {
  const [googleTvState, setGoogleTvState] = useState(initialState);
  const setSpotlightItem = useCallback(
    (spotlightItem: TvItem) => {
      setGoogleTvState({ ...googleTvState, spotlightItem });
    },
    [googleTvState, setGoogleTvState],
  );
  const resetSpotlightItem = useCallback(() => {
    setGoogleTvState({ ...googleTvState, spotlightItem: SPOTLIGHT_TV_ITEM });
  }, [googleTvState, setGoogleTvState]);
  return (
    <GoogleTvContext.Provider
      value={{
        ...googleTvState,
        setSpotlightItem,
        resetSpotlightItem,
      }}
    >
      {children}
    </GoogleTvContext.Provider>
  );
}

export default GoogleTvProvider;
