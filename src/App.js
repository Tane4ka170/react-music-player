import "./App.css";
import { audios } from "./audioData";
import { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(audios);
  const [currentSong, setCurrentSong] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);
  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  return (
    <>
      <div className="player-main">
        <Player currentSong={currentSong} currentIndex={currentIndex} />
      </div>
      <div className="app-main">
        {songs.map((song, index) => (
          <AudioFiles index={index} song={song} getSongData={getSongData} />
        ))}
      </div>
    </>
  );
}

export default App;
