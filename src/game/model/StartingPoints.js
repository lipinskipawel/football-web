const preparePoint = (point) => {
  if (leftWall(point.index)) {
    point.notAllowToMove(["N", "S", "NW", "W", "SW"]);
    return point;
  }
  if (rightWall(point.index)) {
    point.notAllowToMove(["N", "S", "NE", "E", "SE"]);
    return point;
  }
  return point;
};

function leftWall(index) {
  return (
    index === 18 ||
    index === 27 ||
    index === 36 ||
    index === 45 ||
    index === 54 ||
    index === 63 ||
    index === 72 ||
    index === 81 ||
    index === 90
  );
}

function rightWall(index) {
  return (
    index === 26 ||
    index === 35 ||
    index === 44 ||
    index === 53 ||
    index === 62 ||
    index === 71 ||
    index === 80 ||
    index === 89 ||
    index === 98
  );
}

export default preparePoint;
