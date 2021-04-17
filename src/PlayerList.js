import { useState } from "react";
import Player from "./Player";

const PlayerList = () => {
  const [players] = useState([
    { id: 1, nickname: "Josh", isPlaying: true },
    { id: 2, nickname: "Mike", isPlaying: false },
    { id: 3, nickname: "Wen", isPlaying: true },
  ]);

  return (
    <div>
      {players &&
        players.map((player) => (
          <Player
            key={player.id}
            nickname={player.nickname}
            isPlaying={player.isPlaying}
          />
        ))}
    </div>
  );
};

export default PlayerList;
