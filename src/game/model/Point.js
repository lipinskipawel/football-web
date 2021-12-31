class Point {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.directions = new Map();
    this.directions.set("N", true);
    this.directions.set("E", true);
    this.directions.set("S", true);
    this.directions.set("W", true);
    this.directions.set("NE", true);
    this.directions.set("SE", true);
    this.directions.set("SW", true);
    this.directions.set("NW", true);
  }

  notAllowToMove(directionsArray) {
    directionsArray.forEach((dir) => {
      this.directions.set(dir, false);
    });
  }

  computeDistance(given_x, given_y) {
    return Math.sqrt(
      Math.pow(this.x - given_x, 2) + Math.pow(this.y - given_y, 2)
    );
  }

  canMove(destinationIndex) {
    const differenceBetweenPointsInIndex = destinationIndex - this.index;
    return (
      [...this.directions.entries()]
        .filter((e) => e[1] === true)
        .map((direction) => directionToDifference(direction[0]))
        .filter((diff) => diff !== 0)
        .filter((diff) => diff === differenceBetweenPointsInIndex).length !== 0
    );
  }

  makeMove(destination) {
    const direction = differenceToDirection(destination.index - this.index);
    this.directions.set(direction, false);
  }

  /**
   * This method will return the array of directions that met given condition.
   *
   * @param point { Point } that will be examined
   * @param condition { Boolean } that will be checked
   */
  static filterDirections(point, condition) {
    return Array.from(point.directions.entries())
      .filter((el) => el[1] === condition)
      .map((el) => el[0]);
  }
}

/**
 * This function will convert given direction to a numerical representation of the direction.
 * Possible directions are: N, NE, E, SE, S, SW, W, NW
 *
 * @return {Number} numerical representation of direction
 */
export function directionToDifference(direction) {
  switch (direction) {
    case "N":
      return -9;
    case "E":
      return 1;
    case "S":
      return 9;
    case "W":
      return -1;
    case "NE":
      return -8;
    case "SE":
      return 10;
    case "SW":
      return 8;
    case "NW":
      return -10;
    default:
      return 0;
  }
}

export function differenceToDirection(difference) {
  switch (difference) {
    case -9:
      return "N";
    case 1:
      return "E";
    case 9:
      return "S";
    case -1:
      return "W";
    case -8:
      return "NE";
    case 10:
      return "SE";
    case 8:
      return "SW";
    case -10:
      return "NW";
    default:
      return "";
  }
}

export default Point;
