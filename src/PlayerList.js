import useWebSocket from "./hooks/useWebSocket";
import { useCallback, useState } from "react";
import config from "./config";
import Player from "./Player";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const onDataCallback = useCallback((data) => {
    setPlayers(data.players);
  }, []);
  const { error } = useWebSocket(config.webSocket.lobbyUrl, onDataCallback);

  return (
    <div>
      {error && <div>Error</div>}
      {players.map((player) => (
        <Player
          key={player.username}
          nickname={player.username}
          isPlaying={false}
        />
      ))}
    </div>
  );
};

export default PlayerList;
