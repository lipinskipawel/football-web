import MoveHistory from "./MoveHistory";
import Point, { directionToDifference } from "./Point";
import preparePoint from "./StartingPoints";

class GameEngine {
  constructor(width, height) {
    this.points = GameEngine.getAllPoints(width, height);
    this.ball = this.points[58];
    this.moveHistory = new MoveHistory(this.ball);
  }

  copy(gameEngine) {
    const copy = new GameEngine(gameEngine.width, gameEngine.height);
    copy.points = gameEngine.points;
    copy.ball = copy.points[gameEngine.ball.index];
    copy.moveHistory = gameEngine.moveHistory;
    return copy;
  }

  toPoint(x, y) {
    const realCoordinates = this.points
      .map((point, index) => {
        const distance = point.computeDistance(x, y);
        const result = { distance: distance, index: index };
        return result;
      })
      .sort((a, b) => {
        return a.distance - b.distance;
      })
      .slice(0, 4);
    return this.points[realCoordinates[0].index];
  }

  /**
   * This method will convert directions to Point's.
   *
   * @param directions is an array of Directions such as [N, NE, E, SE, S, SW, W, NE]
   * @return array of Point's
   */
  toPoints(directions) {
    let virtualBallPosition = this.ball.index;
    return directions
      .map((dir) => directionToDifference(dir))
      .map((diff) => this.points[(virtualBallPosition += diff)]);
  }

  /**
   * This method return an array of points.
   * Those points represent the ball movement throughout the game.
   *
   * @returns array of { Point }'s
   */
  getPointsThatWereClicked() {
    return this.moveHistory.getAllPoints();
  }

  /**
   * This method creates all logical { Point }'s that are needed to represent the game state.
   */
  static getAllPoints(width, height) {
    const x = GameEngine._computeXes(width);
    const y = GameEngine._computeYes(height);
    var index = 0;
    var points = [];

    for (var i = 0; i < y.length; i++) {
      for (var j = 0; j < x.length; j++) {
        const point = new Point(x[j], y[i], index);
        points.push(preparePoint(point));
        index++;
      }
    }
    return points;
  }

  static _computeXes(width) {
    const spaceBetweenDots = width / 9;
    const startingPoint = spaceBetweenDots / 2;
    const xes = new Array(9);

    for (var i = 0; i < 9; i++) {
      xes[i] = startingPoint + spaceBetweenDots * i;
    }
    return xes;
  }

  static _computeYes(width) {
    const spaceBetweenDots = width / 13;
    const startingPoint = spaceBetweenDots / 2;
    const xes = new Array(9);

    for (var i = 0; i < 13; i++) {
      xes[i] = startingPoint + spaceBetweenDots * i;
    }
    return xes;
  }

  helper_printing_all_points() {
    return this.points;
  }

  makeMove(point) {
    this.ball.makeMove(point);
    this.points[point.index].makeMove(this.ball);
    this.ball = this.points[point.index];
    this.moveHistory.register(point);
  }

  /**
   * This method will always return an array of current player moves.
   *
   * @returns moves as { Array }
   */
  currentPlayerMoves() {
    const moves = this.moveHistory.getAllDirections();
    return moves[moves.length - 1];
  }

  canMove(point) {
    return this.ball.canMove(point.index);
  }

  /**
   * This method will check whether the ball can move to given directions.
   *
   * @param directions is an array of {String}. Possible strings are [N, NE, E, SE, S, SW, W, NW]
   * @return bool, true only when ball can be moved by given directions otherwise false
   */
  canMoveToDirections(directions) {
    const copy = this.copy(this);
    return this.toPoints(directions).every((point) => {
      if (copy.canMove(point)) {
        copy.makeMove(point);
        return true;
      }
      return false;
    });
  }
}

export default GameEngine;
