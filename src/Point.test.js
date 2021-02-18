import Point from "./Point";

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
