class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  computeDistance(given_x, given_y) {
    return Math.sqrt(
      Math.pow(this.x - given_x, 2) + Math.pow(this.y - given_y, 2)
    );
  }
}

export default Point;
