import useCanvas from "./ui/useCanvas";

const width = 500;
const height = 600;

const GameFrame = () => {
  const [canvasRef, handleOnClick] = useCanvas();

  return (
    <div className="game-frame">
      <canvas
        onClick={handleOnClick}
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
    </div>
  );
};

export default GameFrame;
