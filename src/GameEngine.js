import Point from "./Point";

class GameEngine {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.xes = this._computeXes(width);
    this.yes = this._computeYes(height);
    this.points = this.computeAllPoints(width, height);
  }

  realCoordinates(x, y) {
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
    if (realCoordinates[0].distance === realCoordinates[1].distance) {
      return null;
    }
    return this.points[realCoordinates[0].index];
  }

  computeAllPoints(width, height) {
    const x = this._computeXes(width);
    const y = this._computeYes(height);
    var points = [];

    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < y.length; j++) {
        points.push(new Point(x[i], y[j]));
      }
    }
    return points;
  }

  _computeXes(width) {
    const spaceBetweenDots = width / 9;
    const startingPoint = spaceBetweenDots / 2;
    const xes = new Array(9);

    for (var i = 0; i < 9; i++) {
      xes[i] = startingPoint + spaceBetweenDots * i;
    }
    return xes;
  }

  _computeYes(width) {
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

  canMove(position) {
    return true;
  }

  static computeDots(width, height) {
    const spaceBetweenDotsH = width / 9;
    const spaceBetweenDotsV = height / 13;

    const startingPointH = spaceBetweenDotsH / 2;
    const startingPointV = spaceBetweenDotsV / 2;

    const dots = {
      startingH: startingPointH,
      spaceBetweenDotsH: spaceBetweenDotsH,
      startingV: startingPointV,
      spaceBetweenDotsV: spaceBetweenDotsV,
    };
    return dots;
  }
}

export default GameEngine;
