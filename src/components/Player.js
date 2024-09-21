import React, { useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div className="player-card">
        <h3 className="activeSong-name">Song name</h3>
        <h5 className="activeArtist-name">Artist Name</h5>
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
