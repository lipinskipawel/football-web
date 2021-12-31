import Point, { directionToDifference } from "./Point";

describe("canMove", () => {
  it("should allow to move to next right point", () => {
    const point = new Point(55, 25, 0);

    const actual = point.canMove(1);

    expect(actual).toEqual(true);
  });

  it("should allow to move to next left point", () => {
    const point = new Point(55, 25, 2);

    const actual = point.canMove(1);

    expect(actual).toEqual(true);
  });

  it("should not allow to move to the same point", () => {
    const point = new Point(55, 25, 2);

    const actual = point.canMove(new Point(50, 20, 2));

    expect(actual).toEqual(false);
  });

  it("should not allow to move to not next point", () => {
    const point = new Point(55, 25, 2);

    const actual = point.canMove(new Point(50, 20, 19));

    expect(actual).toEqual(false);
  });
});

describe("directionToDifference", () => {
  it("should compute difference of N", () => {
    const diff = directionToDifference("N");

    expect(diff).toEqual(-9);
  });
});

describe("differenceToDirection", () => {
  it("should compute distance correctly with big numbers", () => {
    const point = new Point(55, 25);

    const distance = point.computeDistance(54, 29);

    expect(distance).toEqual(4.123105625617661);
  });

  it("should compute distance equal to 1 when only x differs", () => {
    const point = new Point(5, 5);

    const distance = point.computeDistance(4, 5);

    expect(distance).toEqual(1);
  });

  it("should compute distance equal to 1 when only y differs", () => {
    const point = new Point(5, 5);

    const distance = point.computeDistance(5, 6);

    expect(distance).toEqual(1);
  });

  it("should compute distance when both values are greater by 1", () => {
    const point = new Point(5, 5);

    const distance = point.computeDistance(6, 6);

    expect(distance).toEqual(1.4142135623730951);
  });
});

describe("filterDirections", () => {
  it("should filter all unallowed directions", () => {
    const point = new Point(10, 10);

    point.notAllowToMove(["N", "E"]);
    const actual = Point.filterDirections(point, false);

    expect(actual).toEqual(expect.arrayContaining(["N", "E"]));
  });

  it("should filter all allowed directions", () => {
    const point = new Point(10, 10);

    point.notAllowToMove(["N", "E"]);
    const actual = Point.filterDirections(point, true);

    expect(actual).toEqual(
      expect.arrayContaining(["NW", "W", "SW", "S", "SE", "NE"])
    );
  });
});
