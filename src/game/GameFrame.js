import { useState } from "react";
import GameEngine from "./model/GameEngine";
import useCanvas from "./ui/useCanvas";

const width = 500;
const height = 600;

const GameFrame = () => {
  const [engine, setEngine] = useState(new GameEngine(width, height));
  const [canvasRef, drawMoves] = useCanvas(engine.points);

  const onClick = ({ nativeEvent }) => {
    nativeEvent.stopPropagation();
    const { offsetX, offsetY } = nativeEvent;
    const point = engine.toPoint(offsetX, offsetY);
    const canMove = engine.canMove(point);
    if (canMove) {
      engine.makeMove(point);
      setEngine(engine);
      drawMoves(engine.movesHistory);
    }
  };

  return (
    <div className="game-frame">
      <canvas
        onClick={onClick}
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
    </div>
  );
};

export default GameFrame;
