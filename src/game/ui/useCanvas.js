import { useCallback, useEffect, useMemo, useRef } from "react";

function setUpPlayField(cxt, width, height) {
  cxt.fillStyle = "rgba(0, 170, 45)";
  cxt.fillRect(0, 0, width, height);
}

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

function drawBall(cxt, ball) {
  const dotSize = 4;
  cxt.beginPath();
  cxt.arc(ball.x, ball.y, dotSize, 0, Math.PI * 2, false);
  cxt.fill();
  cxt.stroke();
}

function clearCanvas(cxt, width, height) {
  cxt.clearRect(0, 0, width, height);
}

const useCanvas = (points) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const dots = useMemo(() => [...points], [points]);

  const drawMoves = useCallback(
    (moves) => {
      clearCanvas(
        contextRef.current,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setUpPlayField(
        contextRef.current,
        canvasRef.current.width,
        canvasRef.current.height
      );
      drawDots(dots, contextRef.current);
      drawPitch(dots, contextRef.current);
      startDrawingMovesFromTheCenter(dots, contextRef.current);
      moves.forEach((move) => {
        contextRef.current.lineTo(move.x, move.y);
        contextRef.current.stroke();
      });
      const ball =
        moves[moves.length - 1] === undefined
          ? dots[58]
          : moves[moves.length - 1];
      drawBall(contextRef.current, ball);
    },
    [dots]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    drawMoves([]);
  }, [drawMoves]);

  return [canvasRef, drawMoves];
};

export default useCanvas;
