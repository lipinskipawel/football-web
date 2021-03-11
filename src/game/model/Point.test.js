import Point, { directionToDifference } from "./Point";

// canMove testing
test("should allow to move to next right point", () => {
  const point = new Point(55, 25, 0);

  const actual = point.canMove(1);

  expect(actual).toEqual(true);
});

test("should allow to move to next left point", () => {
  const point = new Point(55, 25, 2);

  const actual = point.canMove(1);

  expect(actual).toEqual(true);
});

test("should not allow to move to the same point", () => {
  const point = new Point(55, 25, 2);

  const actual = point.canMove(new Point(50, 20, 2));

  expect(actual).toEqual(false);
});

test("should not allow to move to not next point", () => {
  const point = new Point(55, 25, 2);

  const actual = point.canMove(new Point(50, 20, 19));

  expect(actual).toEqual(false);
});

// direction to difference and vice versa testing
test("should compute difference of N", () => {
  const diff = directionToDifference("N");

  expect(diff).toEqual(-9);
});

// compute distance testing
test("should compute distance correctly with big numbers", () => {
  const point = new Point(55, 25);

  const distance = point.computeDistance(54, 29);

  expect(distance).toEqual(4.123105625617661);
});

test("should compute distance equal to 1 when only x differs", () => {
  const point = new Point(5, 5);

  const distance = point.computeDistance(4, 5);

  expect(distance).toEqual(1);
});

test("should compute distance equal to 1 when only y differs", () => {
  const point = new Point(5, 5);

  const distance = point.computeDistance(5, 6);

  expect(distance).toEqual(1);
});

test("should compute distance when both values are greater by 1", () => {
  const point = new Point(5, 5);

  const distance = point.computeDistance(6, 6);

  expect(distance).toEqual(1.4142135623730951);
});
