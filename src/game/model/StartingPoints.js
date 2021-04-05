const preparePoint = (point) => {
  if (
    isInSideGoal(point.index) ||
    isInTheCorner(point.index) ||
    isOutSideOfPitch(point.index)
  ) {
    point.notAllowToMove(["N", "NE", "NW", "E", "W", "S", "SE", "SW"]);
    return point;
  }
  if (isLeftWall(point.index)) {
    point.notAllowToMove(["N", "S", "NW", "W", "SW"]);
    return point;
  }
  if (isRightWall(point.index)) {
    point.notAllowToMove(["N", "S", "NE", "E", "SE"]);
    return point;
  }
  return point;
};

function isOutSideOfPitch(index) {
  return (
    index === 0 ||
    index === 1 ||
    index === 2 ||
    index === 6 ||
    index === 7 ||
    index === 8 ||
    index === 108 ||
    index === 109 ||
    index === 110 ||
    index === 114 ||
    index === 115 ||
    index === 116
  );
}

function isInTheCorner(index) {
  return index === 9 || index === 17 || index === 99 || index === 107;
}

function isInSideGoal(index) {
  return (
    index === 3 ||
    index === 4 ||
    index === 5 ||
    index === 111 ||
    index === 112 ||
    index === 113
  );
}

function isLeftWall(index) {
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

function isRightWall(index) {
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
