import { useParams } from "react-router-dom";
import GameFrame from "./GameFrame";
import GamePlayers from "./GamePlayers";
import "./GamePanel.css";
import { useState } from "react";

const GamePanel = () => {
  const params = useParams();
  const [isFirst, setIsFirst] = useState(1);

  const onPlayer = (player) => {
    setIsFirst(player);
  };

  return (
    <div className="game-panel">
      <div>GamePanel</div>
      <div className="game-panel-container">
        <GameFrame gameId={params.gameId} onPlayerChange={onPlayer} />
        <GamePlayers active={isFirst} />
      </div>
    </div>
  );
};

export default GamePanel;
