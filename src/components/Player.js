import React from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";

export default function Player() {
  return (
    <div>
      <div className="player-card">
        <div className="control-icon">
          <RxTrackPrevious color="#278234" size={50} />
          <CiPlay1 color="#278234" size={50} />
          <CiPause1 color="#278234" size={50} />
          <RxTrackNext color="#278234" size={50} />
        </div>
      </div>
    </div>
  );
}
