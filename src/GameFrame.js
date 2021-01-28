import { useRef } from "react";

const width = 500;
const height = 600;

const GameFrame = () => {
  const canvasRef = useRef(null);
  const handleOnClick = (event) => {
    event.stopPropagation();
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const cxt = canvasRef.current.getContext("2d");
    cxt.fillRect(x, y, 20, 20);
  };

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
