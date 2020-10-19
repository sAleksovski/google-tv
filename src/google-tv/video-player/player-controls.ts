import { useEffect } from 'react';
import YouTube from 'react-youtube';

export function usePlayerControls(isPlaying: boolean, playerRef: any, onEnd: () => void) {
  useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onEnd();
      }

      if (e.code === 'Space' || e.code === 'Enter') {
        if (playerRef.current.getPlayerState() === YouTube.PlayerState.PLAYING) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.playVideo();
        }
      }

      if (e.code === 'ArrowRight') {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
      }

      if (e.code === 'ArrowLeft') {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
      }
    }

    if (isPlaying) {
      document.addEventListener('keydown', onKeyPress);
    }

    return () => document.removeEventListener('keydown', onKeyPress);
  }, [isPlaying, playerRef, onEnd]);
}
