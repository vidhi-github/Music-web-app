import React, { useRef, useState } from "react";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import "./css/musiccammand.css";
const MusicCammand = ({ audio, nextMuc, prevMuc }) => {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  const handleTimeUpdate = () => {
    setCurrentTime(audioPlayer.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioPlayer.current.duration);
  };

  const handleSeekBarChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioPlayer.current.currentTime = newTime;
  };

  const handlePlayRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    audioPlayer.current.playbackRate = newRate;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioPlayer.current.volume = newVolume;
  };
  const togglePlay = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <audio
        ref={audioPlayer}
        src={audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></audio>
      <div>
        <button onClick={togglePlay} className="cammand-play-pause-button">
          {!isPlaying ? (
            <FaPlay style={{ textAlign: "center" }} />
          ) : (
            <FaPause />
          )}
        </button>
        {/* <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeekBarChange}
        />
        <span>
          {Math.floor(currentTime)} / {Math.floor(duration)}
        </span>
      </div>
      <div>
        <label htmlFor="playbackRate">Playback Rate:</label>
        <input
          id="playbackRate"
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={playbackRate}
          onChange={handlePlayRateChange}
        />
        <span>{playbackRate.toFixed(1)}x</span>
      </div>
      <div>
        <label htmlFor="volume">Volume:</label>
        <input
          id="volume"
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{(volume * 100).toFixed(0)}%</span> */}
      </div>
    </div>
  );
};

export default MusicCammand;
