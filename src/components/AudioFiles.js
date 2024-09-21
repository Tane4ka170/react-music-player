import React from "react";

const AudioFiles = ({ song, getSongData }) => {
  return (
    <div className="player-container" onClick={() => getSongData(song)}>
      <h4 className="song-name">{song.name}</h4>
    </div>
  );
};

export default AudioFiles;
