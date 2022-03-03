import useWebSocket from "./hooks/useWebSocket";
import { useCallback, useState } from "react";
import config from "./config";
import Player from "./Player";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

const PlayerList = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  const [nickname] = useLocalStorage("nickname", "anonymous");
  const getPlayerTurn = useCallback(
    (data) => {
      if (nickname === data.first.username) {
        return "first";
      }
      return "second";
    },
    [nickname]
  );
  const onDataCallback = useCallback(
    (data) => {
      if (data.players !== undefined) {
        setPlayers(data.players);
      } else if (data.redirectEndpoint !== undefined) {
        navigate(data.redirectEndpoint, { state: getPlayerTurn(data) });
      }
    },
    [navigate, getPlayerTurn]
  );

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
    send(requestToPlay);
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
