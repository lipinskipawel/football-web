import GameFrame from "./GameFrame";
import useWebSocket from "../useWebSocket";
import config from "../config";

const GamePanel = () => {
  const { send } = useWebSocket(config.webSocket.serverUrl);

  return (
    <>
      <div>GamePanel</div>
      <GameFrame onMove={send} />
    </>
  );
};

export default GamePanel;
