import React, { useEffect, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";

export default function Player({ currentSong, currentIndex }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {}, []);
  return (
    <div>
      <audio ref={audioRef} src={currentSong.music}></audio>
      <div className="player-card">
        {currentSong ? (
          <div>
            <h3 className="activeSong-name">{currentSong.name}</h3>
            <h5 className="activeArtist-name">{currentSong.creator}</h5>
          </div>
        ) : (
          ""
        )}

        <div className="control-icon">
          <RxTrackPrevious color="black" size={50} className="icons" />
          {isPlaying ? (
            <CiPause1
              color="#278234"
              size={70}
              className="icons"
              onClick={togglePlay}
            />
          ) : (
            <CiPlay1
              color="#278234"
              size={70}
              className="icons"
              onClick={togglePlay}
            />
          )}
          <RxTrackNext color="black" size={50} className="icons" />
        </div>
      </div>
    </div>
  );
}
