import { useCallback, useState } from "react";
import config from "../config";
import useWebSocket from "../hooks/useWebSocket";
import GameEngine from "./model/GameEngine";
import useCanvas from "./ui/useCanvas";

const width = 500;
const height = 600;

/**
 * This component is responsible for displaying a game field as well as using
 * network (useWebSocket) to communicate with the opponent about the game state changes.
 *
 * It understands clicks on the game field made by user as moves to make and draw.
 * It understands received moves from opponent as moves to make and draw.
 *
 * This component makes and validates moves by using GameEngine.
 * This component draws moves by using useCanvas hook.
 *
 * @component
 * @param gameId this is a gameId used to connect to game
 * @param onPlayerChange is a callback function that takes 1 or 0 to indicate player to move
 * @param playerTurn indicates on which turn the application user should move
 */
const GameFrame = ({ gameId, onPlayerChange, playerTurn }) => {
  const [engine, setEngine] = useState(new GameEngine(width, height));
  const [canvasRef, drawMoves] = useCanvas(engine.points);
  const dataReceivedFromOpponent = useCallback(
    (data) => {
      if (data.move !== undefined) {
        const canMove = engine.canMoveToDirections(data.move);
        if (canMove) {
          const points = engine.toPoints(data.move);
          points.forEach((point) => engine.makeMove(point));
          setEngine(engine);
          drawMoves(engine.getPointsThatWereClicked());
          onPlayerChange(engine.currentPlayer());
        }
      }
    },
    [engine, drawMoves, onPlayerChange]
  );
  const { send } = useWebSocket(
    `${config.webSocket.serverUrl}/game/${gameId}`,
    dataReceivedFromOpponent
  );

  const onClick = ({ nativeEvent }) => {
    nativeEvent.stopPropagation();
    const { offsetX, offsetY } = nativeEvent;
    const point = engine.toPoint(offsetX, offsetY);
    const canMove = engine.canMove(point);
    if (canMove && canMoveAccordingTo(engine.currentPlayer())) {
      engine.makeMove(point);
      setEngine(engine);
      drawMoves(engine.getPointsThatWereClicked());
      onPlayerChange(engine.currentPlayer());
      send(moveEnvelop(engine.currentPlayerMoves()));
    }
  };

  /**
   * Checks whether the user of the application (playerTurn) can move.
   * This function does that by comparing the playerNumber with the playerTurn.
   *
   * @param playerNumber { Number } that is 1 or 0
   */
  const canMoveAccordingTo = (playerNumber) => {
    return playerTurn === (playerNumber === 1 ? "first" : "second");
  };

  const moveEnvelop = (arrayOfMoves) => {
    return { move: arrayOfMoves };
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
