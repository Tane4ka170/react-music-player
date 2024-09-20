import "./App.css";
import { audios } from "./audioData";
import { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(audios);

  return (
    <>
      <Player />
      <div className="app-main">
        {songs.map((song, index) => (
          <AudioFiles key={index} song={song} />
        ))}
      </div>
    </>
  );
}

export default App;
