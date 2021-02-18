import { useEffect, useRef } from "react";
import GameEngine from "../model/GameEngine";

function drawDots(width, height, cxt) {
  const dots = GameEngine.computeDots(width, height);
  const dotSize = 5;

  cxt.strokeStyle = "white";
  cxt.fillStyle = "white";
  for (var i = dots.startingH; i < width; i += dots.spaceBetweenDotsH) {
    for (var j = dots.startingV; j < height; j += dots.spaceBetweenDotsV) {
      cxt.beginPath();
      cxt.arc(i, j, dotSize, 0, Math.PI * 2, false);
      cxt.fill();
      cxt.stroke();
    }
  }
}

function drawPitch(width, height, cxt) {
  const dots = GameEngine.computeDots(width, height);

  cxt.beginPath();
  cxt.strokeStyle = "white";
  cxt.lineWidth = 5;
  cxt.moveTo(dots.startingH, dots.startingV + dots.spaceBetweenDotsV);
  cxt.lineTo(dots.startingH, dots.startingV + dots.spaceBetweenDotsV * 11);
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 3,
    dots.startingV + dots.spaceBetweenDotsV * 11
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 3,
    dots.startingV + dots.spaceBetweenDotsV * 12
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 5,
    dots.startingV + dots.spaceBetweenDotsV * 12
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 5,
    dots.startingV + dots.spaceBetweenDotsV * 11
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 8,
    dots.startingV + dots.spaceBetweenDotsV * 11
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 8,
    dots.startingV + dots.spaceBetweenDotsV
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 5,
    dots.startingV + dots.spaceBetweenDotsV
  );
  cxt.lineTo(dots.startingH + dots.spaceBetweenDotsH * 5, dots.startingV);
  cxt.lineTo(dots.startingH + dots.spaceBetweenDotsH * 3, dots.startingV);
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 3,
    dots.startingV + dots.spaceBetweenDotsV
  );
  cxt.lineTo(dots.startingH, dots.startingV + dots.spaceBetweenDotsV);
  cxt.stroke();
}

function startDrawingMovesFromTheCenter(width, height, cxt) {
  const dots = GameEngine.computeDots(width, height);

  cxt.beginPath();
  cxt.moveTo(
    dots.startingH + dots.spaceBetweenDotsH * 4,
    dots.startingV + dots.spaceBetweenDotsV * 6
  );
  cxt.lineTo(
    dots.startingH + dots.spaceBetweenDotsH * 4,
    dots.startingV + dots.spaceBetweenDotsV * 6
  );
}

const useCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const engine = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    engine.current = new GameEngine(canvas.width, canvas.height);
    contextRef.current = context;
    context.fillStyle = "rgba(0, 170, 45)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawDots(canvas.width, canvas.height, contextRef.current);
    drawPitch(canvas.width, canvas.height, contextRef.current);
    startDrawingMovesFromTheCenter(
      canvas.width,
      canvas.height,
      contextRef.current
    );
  }, []);

  const handleOnClick = ({ nativeEvent }) => {
    nativeEvent.stopPropagation();
    const { offsetX, offsetY } = nativeEvent;
    const { x, y } = engine.current.realCoordinates(offsetX, offsetY);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
  };

  return [canvasRef, handleOnClick];
};

export default useCanvas;
