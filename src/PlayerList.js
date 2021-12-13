import useWebSocket from "./hooks/useWebSocket";
import { useCallback, useState } from "react";
import config from "./config";
import Player from "./Player";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const onDataCallback = useCallback((data) => {
    if (data.players !== undefined) {
      setPlayers(data.players);
    }
  }, []);

  const { send, error } = useWebSocket(
    config.webSocket.lobbyUrl,
    onDataCallback
  );

  const onClickPlayer = (clickedUsername) => {
    const requestToPlay = {
      opponent: {
        username: clickedUsername,
      },
    };
    send(JSON.stringify(requestToPlay));
  };

  return (
    <div>
      {error && <div>Error</div>}
      {players.map((player) => (
        <Player
          key={player.username}
          nickname={player.username}
          isPlaying={false}
          onClickCallback={onClickPlayer}
        />
      ))}
    </div>
  );
};

export default PlayerList;
