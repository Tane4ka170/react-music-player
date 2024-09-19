import "./App.css";
import Player from "./components/Player";
import { audios } from "./audioData";
import { useState } from "react";

function App() {
  const [songs, setSongs] = useState(audios);

  return (
    <div>
      {songs.map((song, index) => (
        <Player key={index} song={song} />
      ))}
    </div>
  );
}

export default App;
