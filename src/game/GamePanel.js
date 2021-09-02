import GameFrame from "./GameFrame";
import useWebSocket from "../useWebSocket";
import config from "../config";

const GamePanel = () => {
  const { disconnect, send } = useWebSocket(config.webSocket.serverUrl);

  const dis = () => {
    disconnect();
  };

  return (
    <>
      <div>GamePanel</div>
      <GameFrame onMove={send} />
      <button onClick={dis}>Disconnect</button>
    </>
  );
};

export default GamePanel;
