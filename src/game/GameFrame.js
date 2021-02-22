import GameEngine from "./model/GameEngine";
import useCanvas from "./ui/useCanvas";

const width = 500;
const height = 600;

const GameFrame = () => {
  const [canvasRef, drawMove] = useCanvas();
  const engine = new GameEngine(width, height);

  const onClick = ({ nativeEvent }) => {
    nativeEvent.stopPropagation();
    const { offsetX, offsetY } = nativeEvent;
    const { x, y } = engine.realCoordinates(offsetX, offsetY);
    drawMove(x, y);
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
