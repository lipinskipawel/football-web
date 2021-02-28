import { useEffect, useRef } from "react";
import GameEngine from "../model/GameEngine";

function drawDots(dots, cxt) {
  const dotSize = 3;

  cxt.strokeStyle = "white";
  cxt.fillStyle = "white";
  dots.forEach((dot) => {
    cxt.beginPath();
    cxt.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2, false);
    cxt.fill();
  });
  cxt.stroke();
}

function drawPitch(dots, cxt) {
  cxt.beginPath();
  cxt.strokeStyle = "white";
  cxt.lineWidth = 5;
  cxt.moveTo(dots[9].x, dots[9].y);
  cxt.lineTo(dots[9].x, dots[9].y);
  cxt.lineTo(dots[12].x, dots[12].y);
  cxt.lineTo(dots[3].x, dots[3].y);
  cxt.lineTo(dots[5].x, dots[5].y);
  cxt.lineTo(dots[14].x, dots[14].y);
  cxt.lineTo(dots[17].x, dots[17].y);
  cxt.lineTo(dots[107].x, dots[107].y);
  cxt.lineTo(dots[104].x, dots[104].y);
  cxt.lineTo(dots[113].x, dots[113].y);
  cxt.lineTo(dots[111].x, dots[111].y);
  cxt.lineTo(dots[102].x, dots[102].y);
  cxt.lineTo(dots[99].x, dots[99].y);
  cxt.lineTo(dots[9].x, dots[9].y);
  cxt.stroke();
}

function startDrawingMovesFromTheCenter(dots, cxt) {
  cxt.beginPath();
  cxt.moveTo(dots[58].x, dots[58].y);
  cxt.lineTo(dots[58].x, dots[58].y);
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
    drawDots(engine.current.points, contextRef.current);
    drawPitch(engine.current.points, contextRef.current);
    startDrawingMovesFromTheCenter(engine.current.points, contextRef.current);
  }, []);

  const drawMove = (point) => {
    contextRef.current.lineTo(point.x, point.y);
    contextRef.current.stroke();
  };

  return [canvasRef, drawMove];
};

export default useCanvas;
