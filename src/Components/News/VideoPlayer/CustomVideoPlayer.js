import ReactPlayer from 'react-player';
import React, { createRef, useState } from 'react';
import ControlsReactPlayer from './ControlsReactPlayer';
import PropTypes from 'prop-types';
import './CustomVideoPlayer.css';
export default function CustomReactPlayer ({ url }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(null);
  const [seek, setSeek] = useState({ currentSeek: 0 });
  const playerRef = createRef();
  const handleMuted = () => {
    setMuted(!muted);
  };
  const handlePlaying = () => {
    setPlaying(!playing);
  };
  const handleVolume = volume => {
    setVolume(volume);
  };

  const handleSeek = progressSelected => {
    setSeek(progressSelected);
    playerRef.current.seekTo(progressSelected);
  };

  return (
    <div className='video__container'>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        muted={muted}
        width='100%'
        height='100%'
        fallback={5}
        onSeek={e => console.log(e)}
        onDuration={durationVideo => setDuration(durationVideo)}
        onProgress={e => setSeek({ currentSeek: e.playedSeconds })}
        playsinline
      />
      <ControlsReactPlayer
        onReady={handlePlaying}
        playing={playing}
        onVolume={handleVolume}
        volume={volume}
        onMuted={handleMuted}
        muted={muted}
        played={seek}
        handleSeek={handleSeek}
        duration={duration}
      />
    </div>
  );
}
CustomReactPlayer.propTypes = {
  url: PropTypes.string,
};
