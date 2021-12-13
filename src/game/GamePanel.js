import GameFrame from "./GameFrame";
import useWebSocket from "../hooks/useWebSocket";
import config from "../config";
import { useParams } from "react-router-dom";

const GamePanel = () => {
  const params = useParams();
  const { send, error } = useWebSocket(
    `${config.webSocket.serverUrl}/game/${params.gameId}`
  );

  return (
    <>
      {error && <div>Error</div>}
      {!error && (
        <>
          <div>GamePanel</div>
          <GameFrame onMove={(data) => send(JSON.stringify(data))} />
        </>
      )}
    </>
  );
};

export default GamePanel;
