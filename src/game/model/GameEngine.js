import Point from "./Point";

class GameEngine {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.points = this.getAllDots();
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
    if (realCoordinates[0].distance === realCoordinates[1].distance) {
      return null;
    }
    return this.points[realCoordinates[0].index];
  }

  getAllDots() {
    const x = this._computeXes(this.width);
    const y = this._computeYes(this.height);
    var points = [];

    for (var i = 0; i < y.length; i++) {
      for (var j = 0; j < x.length; j++) {
        points.push(new Point(x[j], y[i]));
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
}

export default GameEngine;
