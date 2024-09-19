import React from "react";

const Player = ({ song }) => {
  return (
    <div className="player-container">
      <h4>{song.name}</h4>
    </div>
  );
};

export default Player;
