import Point from "./Point";
import preparePoint from "./StartingPoints";

test("should not allow to move N, S, NW, W, SW when ball is on left edge", () => {
  const leftEdge = new Point(20, 20, 18);

  const resultPoint = preparePoint(leftEdge);

  expect(resultPoint.canMove(27)).toBeFalsy();
  expect(resultPoint.canMove(9)).toBeFalsy();
  expect(resultPoint.canMove(17)).toBeFalsy();
  expect(resultPoint.canMove(26)).toBeFalsy();
  expect(resultPoint.canMove(8)).toBeFalsy();
  expect(resultPoint.canMove(28)).toBe(true);
  expect(resultPoint.canMove(19)).toBe(true);
  expect(resultPoint.canMove(10)).toBe(true);
});

test("should not allow to move N, S, NE, E, SE  when ball is on right edge", () => {
  const leftEdge = new Point(20, 20, 62);

  const resultPoint = preparePoint(leftEdge);

  expect(resultPoint.canMove(71)).toBeFalsy();
  expect(resultPoint.canMove(53)).toBeFalsy();
  expect(resultPoint.canMove(54)).toBeFalsy();
  expect(resultPoint.canMove(63)).toBeFalsy();
  expect(resultPoint.canMove(72)).toBeFalsy();
  expect(resultPoint.canMove(70)).toBe(true);
  expect(resultPoint.canMove(61)).toBe(true);
  expect(resultPoint.canMove(52)).toBe(true);
});
