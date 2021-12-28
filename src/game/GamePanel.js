import GameFrame from "./GameFrame";
import { useParams } from "react-router-dom";

const GamePanel = () => {
  const params = useParams();

  return (
    <>
      <div>GamePanel</div>
      <GameFrame gameId={params.gameId} />
    </>
  );
};

export default GamePanel;
