import { useLocation, useParams } from "react-router-dom";
import GameFrame from "./GameFrame";
import GamePlayers from "./GamePlayers";
import "./GamePanel.css";
import { useCallback, useState } from "react";

const GamePanel = () => {
  const params = useParams();
  const location = useLocation();
  const [playerTurn] = useState(location.state);
  const [isFirst, setIsFirst] = useState(1);

  const onPlayer = useCallback((player) => {
    setIsFirst(player);
  }, []);

  return (
    <div className="game-panel">
      <div>GamePanel</div>
      <div className="game-panel-container">
        <GameFrame
          gameId={params.gameId}
          onPlayerChange={onPlayer}
          playerTurn={playerTurn}
        />
        <GamePlayers active={isFirst} />
      </div>
    </div>
  );
};

export default GamePanel;
