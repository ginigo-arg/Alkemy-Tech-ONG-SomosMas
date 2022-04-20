import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './ControlsReactPlayer.css';
import {
  BsFillPlayFill,
  BsPauseFill,
  BsVolumeUpFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';
function ControlsReactPlayer ({
  onReady,
  playing,
  onVolume,
  volume,
  onMuted,
  muted,
  played,
  handleSeek,
  duration,
}) {
  function handlePlay () {
    onReady();
  }

  return (
    <div className='controlls'>
      <div className='controls_play' onClick={handlePlay}></div>
      <div className='controlls__toolbar '>
        <span onClick={handlePlay} role='button'>
          {playing
            ? (
              <BsPauseFill fontSize={22} />
            )
            : (
              <BsFillPlayFill fontSize={22} />
            )}
        </span>
        <span className='controlls__toolbar--vol'>
          <span role='button' onClick={() => onMuted()}>
            {muted || volume <= 0
              ? (
                <BsFillVolumeMuteFill fontSize={20} />
              )
              : (
                <BsVolumeUpFill fontSize={20} />
              )}
          </span>
          <input
            type='range'
            defaultValue={volume}
            min={0}
            max={100}
            onChange={e => onVolume(e.target.value * 0.01)}
          />
        </span>
        <span className='controlls__toolbar--progress'>
          <input
            type='range'
            min={0}
            max={duration - 1}
            step='0.01'
            value={played.currentSeek}
            onChange={e => handleSeek(parseFloat(e.target.value))}
          />
        </span>
      </div>
    </div>
  );
}

export default memo(ControlsReactPlayer);

ControlsReactPlayer.propTypes = {
  onReady: PropTypes.func,
  playing: PropTypes.bool,
  onVolume: PropTypes.func,
  volume: PropTypes.number,
  onMuted: PropTypes.func,
  muted: PropTypes.bool,
  played: PropTypes.object,
  duration: PropTypes.number,
  handleSeek: PropTypes.func,
};
