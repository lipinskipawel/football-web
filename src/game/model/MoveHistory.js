import Point, { differenceToDirection } from "./Point";

/**
 * This class is able to record all moves that has been made.
 * It acts like the history of moves made on the game.
 */
class MoveHistory {
  constructor(initialPoint) {
    this.points = [initialPoint];
    this.bucketOfMoves = [[]];
  }

  /**
   * This method is the API entry point of {@link MoveHistory} class.
   * This method takes a { Point } and stores it.
   * This method will automatically detects moves made in other turns and it will
   * put them into a separate bucket. All buckets are kept in bucketOfMoves.
   * Example content of the bucketOfMoves is as follow:
   * [["N"], ["W"], ["SE", "E"], ["N"], ["E"]]. Bucket is defined as an array of directions.
   *
   * @param point { Point } that will be stored
   */
  register(point) {
    const lastPoint = this.points[this.points.length - 1];
    this.points.push(point);
    const direction = differenceToDirection(point.index - lastPoint.index);

    if (this.bucketOfMoves.length === 1 && this.bucketOfMoves[0].length === 0) {
      this._takeLastMoveBucket().push(direction);
      this.bucketOfMoves.push([]);
    } else if (this._isNextPlayer(point)) {
      this._takeLastMoveBucket().push(direction);
      this.bucketOfMoves.push([]);
    } else {
      this._takeLastMoveBucket().push(direction);
    }
  }

  /**
   * This method selects the last bucket of moves from the bucketOfMoves.
   *
   * @returns last set of moves as an { Array }
   */
  _takeLastMoveBucket() {
    return this.bucketOfMoves[this.bucketOfMoves.length - 1];
  }

  _isNextPlayer(point) {
    return (
      this._isGoalArea(point.index) ||
      Point.filterDirections(point, false).length === 1 ||
      Point.filterDirections(point, true).length === 8 ||
      Point.filterDirections(point, true).length === 0
    );
  }

  _isGoalArea(index) {
    return (
      index === 3 ||
      index === 4 ||
      index === 5 ||
      index === 111 ||
      index === 112 ||
      index === 113
    );
  }

  /**
   * This method will return all previously stored points by the {@link MoveHistory#register} method.
   *
   * @returns array of { Point }'s. This array contains initialPoint as well as all registered points
   */
  getAllPoints() {
    return this.points;
  }

  /**
   * This method will return the sequence of directions that represents the exact movement of the ball.
   * Directions are encoded by using { String } characters.
   *
   * @returns double array { Array} of moves
   */
  getAllDirections() {
    let moveBuckets = [...this.bucketOfMoves];
    if (
      moveBuckets.length !== 1 &&
      moveBuckets[moveBuckets.length - 1].length === 0
    ) {
      moveBuckets.pop();
    }
    return moveBuckets;
  }
}

export default MoveHistory;
