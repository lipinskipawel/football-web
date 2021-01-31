import { useEffect, useRef } from "react";

const width = 500;
const height = 600;

const GameFrame = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
  }, []);

  const handleOnClick = (event) => {
    console.log(contextRef);
    event.stopPropagation();
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    contextRef.current.fillRect(x, y, 20, 20);
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
