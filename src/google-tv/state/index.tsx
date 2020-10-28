import { SPOTLIGHT_TV_ITEM, TvItem } from 'google-tv/data';
import React, { useCallback, useState } from 'react';

export interface VideoState {
  videoId: string;
  coor: TvItemCoor;
}

export interface TvItemCoor {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface GoogleTvContextState {
  spotlightItem: TvItem;
  isOnTop: true;
  setSpotlightItem: (spotlightItem: TvItem, isOnTop?: boolean) => void;
  resetSpotlightItem: () => void;

  videoState?: VideoState;
  startPlayingVideo: (item: TvItem, coor: TvItemCoor) => void;
  stopPlayingVideo: () => void;
}

const initialState: GoogleTvContextState = {
  spotlightItem: SPOTLIGHT_TV_ITEM,
  isOnTop: true,
  setSpotlightItem: (spotlightItem: TvItem) => {},
  resetSpotlightItem: () => {},
  startPlayingVideo: () => {},
  stopPlayingVideo: () => {},
};

export const GoogleTvContext = React.createContext<GoogleTvContextState>(initialState);

function GoogleTvProvider({ children }: any) {
  const [googleTvState, setGoogleTvState] = useState(initialState);
  const setSpotlightItem = useCallback(
    (spotlightItem: TvItem, isOnTop = true) => {
      setGoogleTvState({ ...googleTvState, spotlightItem, isOnTop });
    },
    [googleTvState, setGoogleTvState],
  );
  const resetSpotlightItem = useCallback(() => {
    setGoogleTvState({ ...googleTvState, spotlightItem: SPOTLIGHT_TV_ITEM });
  }, [googleTvState, setGoogleTvState]);
  const startPlayingVideo = useCallback(
    (item: TvItem, coor: TvItemCoor) => {
      setGoogleTvState({
        ...googleTvState,
        videoState: {
          videoId: item.youtubeVideoId,
          coor,
        },
      });
    },
    [googleTvState, setGoogleTvState],
  );
  const stopPlayingVideo = useCallback(() => {
    setGoogleTvState(({ videoState, ...rest }) => rest);
  }, [setGoogleTvState]);
  return (
    <GoogleTvContext.Provider
      value={{
        ...googleTvState,
        setSpotlightItem,
        resetSpotlightItem,
        startPlayingVideo,
        stopPlayingVideo,
      }}
    >
      {children}
    </GoogleTvContext.Provider>
  );
}

export default GoogleTvProvider;
