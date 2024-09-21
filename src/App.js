import "./App.css";
import { audios } from "./audioData";
import { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(audios);
  const [currentSong, setCurrentSong] = useState({});
  const getSongData = (song) => {};

  return (
    <>
      <div className="player-main">
        <Player />
      </div>
      <div className="app-main">
        {songs.map((song, index) => (
          <AudioFiles key={index} song={song} getSongData={getSongData} />
        ))}
      </div>
    </>
  );
}

export default App;
