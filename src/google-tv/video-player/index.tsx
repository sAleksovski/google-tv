import { GoogleTvContext } from 'google-tv/state';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { Options } from 'react-youtube';
import { usePlayerControls } from './player-controls';
import { YoutubePlayer } from './styled';

const opts: Options = {
  playerVars: {
    autoplay: 1,
  },
  width: '100%',
  height: '100%',
};

function VideoPlayer() {
  const { videoState, stopPlayingVideo } = useContext(GoogleTvContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  const onPlay = useCallback(
    (event: { target: any }) => {
      playerRef.current = event.target;
      setIsPlaying(true);
    },
    [setIsPlaying],
  );

  const onEnd = useCallback(() => {
    playerRef.current = null;
    setIsPlaying(false);
    stopPlayingVideo();
  }, [setIsPlaying, stopPlayingVideo]);

  usePlayerControls(isPlaying, playerRef, onEnd);

  return videoState ? (
    <YoutubePlayer
      isPlaying={isPlaying}
      coor={videoState.coor}
      videoId={videoState.videoId}
      opts={opts}
      onPlay={onPlay}
      onEnd={onEnd}
    />
  ) : null;
}

export default VideoPlayer;
