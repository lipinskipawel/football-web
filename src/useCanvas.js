import { useEffect, useRef } from "react";

const useCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    contextRef.current.beginPath();
    // context.fillStyle = "green";
    context.fillStyle = "rgba(0, 170, 45)";
    context.fillRect(0, 0, canvas.width, canvas.height);
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
