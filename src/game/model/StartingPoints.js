const preparePoint = (point) => {
  if (
    isInSideGoal(point.index) ||
    isInTheCorner(point.index) ||
    isOutSideOfPitch(point.index)
  ) {
    point.notAllowToMove(["N", "NE", "NW", "E", "W", "S", "SE", "SW"]);
    return point;
  }
  if (isTopEdgeOfPitch(point.index)) {
    point.notAllowToMove(["W", "NW", "N", "NE", "E"]);
    return point;
  }
  if (isBottomEdgeOfPitch(point.index)) {
    point.notAllowToMove(["E", "SE", "S", "SW", "W"]);
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
  if (isTopEdgeNearGoalRight(point.index)) {
    point.notAllowToMove(["N", "NE", "E"]);
    return point;
  }
  if (isTopEdgeNearGoalLeft(point.index)) {
    point.notAllowToMove(["N", "NW", "W"]);
    return point;
  }
  if (isBottomEdgeNearGoalRight(point.index)) {
    point.notAllowToMove(["S", "SE", "E"]);
    return point;
  }
  if (isBottomEdgeNearGoalLeft(point.index)) {
    point.notAllowToMove(["S", "SW", "W"]);
    return point;
  }
  return point;
};

function isBottomEdgeNearGoalLeft(index) {
  return index === 102;
}

function isBottomEdgeNearGoalRight(index) {
  return index === 104;
}

function isTopEdgeNearGoalLeft(index) {
  return index === 12;
}

function isTopEdgeNearGoalRight(index) {
  return index === 14;
}

function isTopEdgeOfPitch(index) {
  return index === 10 || index === 11 || index === 15 || index === 16;
}

function isBottomEdgeOfPitch(index) {
  return index === 100 || index === 101 || index === 105 || index === 106;
}

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
