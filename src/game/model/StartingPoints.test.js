import Point from "./Point";
import preparePoint from "./StartingPoints";

test("should not allow to move N, S when point is on left edge", () => {
  const leftEdge = new Point(20, 20, 18);

  const resultPoint = preparePoint(leftEdge);

  expect(resultPoint.canMove(27)).toBeFalsy();
  expect(resultPoint.canMove(9)).toBeFalsy();
  expect(resultPoint.canMove(28)).toBe(true);
});

test("should not allow to move N, S when point is on right edge", () => {
  const leftEdge = new Point(20, 20, 62);

  const resultPoint = preparePoint(leftEdge);

  expect(resultPoint.canMove(71)).toBeFalsy();
  expect(resultPoint.canMove(53)).toBeFalsy();
  expect(resultPoint.canMove(70)).toBe(true);
});
