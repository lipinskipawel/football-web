import GameFrame from "./GameFrame";
import useWebSocket from "../hooks/useWebSocket";
import config from "../config";

const GamePanel = () => {
  const { send, error } = useWebSocket(config.webSocket.serverUrl);

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
