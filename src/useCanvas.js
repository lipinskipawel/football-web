import { useEffect, useRef } from "react";

function drawDots(width, height, cxt) {
  console.log("width: " + width);
  console.log("height: " + height);
  const spaceBetweenDotsH = width / 9;
  const shiftDotsHorizontally = spaceBetweenDotsH / 2;

  const spaceBetweenDotsV = height / 13;
  const shiftDotsVertically = spaceBetweenDotsV / 2;
  const dotMargin = 0;
  const dotSize = 5;

  cxt.strokeStyle = "white";
  cxt.fillStyle = "white";
  for (var i = shiftDotsHorizontally; i < width; i += spaceBetweenDotsH) {
    for (var j = shiftDotsVertically; j < height; j += spaceBetweenDotsV) {
      cxt.beginPath();
      cxt.arc(i - dotMargin, j - dotMargin, dotSize, 0, Math.PI * 2, false);
      cxt.fill();
      cxt.stroke();
    }
  }
}

const useCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // context.fillStyle = "green";
    context.fillStyle = "rgba(0, 170, 45)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawDots(canvas.width, canvas.height, contextRef.current);
    contextRef.current.beginPath();
  }, []);

  const handleOnClick = ({ nativeEvent }) => {
    nativeEvent.stopPropagation();
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return [canvasRef, handleOnClick];
};

export default useCanvas;
