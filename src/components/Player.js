import React, { useEffect, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import Music from "../assets/music-rainbow.jpg";

export default function Player({
  currentSong,
  currentIndex,
  nextSong,
  prevSong,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  return (
    <div>
      <audio ref={audioRef} src={currentSong.music}></audio>
      <div className="player-card">
        {currentSong ? (
          <div>
            <div className="image-container">
              <img src={Music} alt="Music" className="music-image" />
            </div>

            <h2 className="activeSong-name">{currentSong.name}</h2>
            <h4 className="activeArtist-name">{currentSong.creator}</h4>
          </div>
        ) : (
          ""
        )}

        <div className="control-icon">
          <RxTrackPrevious
            color="black"
            size={50}
            className="icons"
            onClick={prevSong}
          />
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
          <RxTrackNext
            color="black"
            size={50}
            className="icons"
            onClick={nextSong}
          />
        </div>
      </div>
    </div>
  );
}
