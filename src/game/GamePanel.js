import useSockJS from "../useSockJS";
import GameFrame from "./GameFrame";

const GamePanel = () => {
  const { disconnect, send } = useSockJS("/chat", "/topic/messages");

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
