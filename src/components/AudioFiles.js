import React from "react";

const AudioFiles = ({ song }) => {
  return (
    <div className="player-container">
      <h4 className="song-name">{song.name}</h4>
    </div>
  );
};

export default AudioFiles;
