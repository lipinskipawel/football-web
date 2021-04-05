import Point from "./Point";
import preparePoint from "./StartingPoints";

describe("ball can not move", () => {
  const parameters = [
    {
      description:
        "should not allow to move anywhere when ball is outside of the pitch",
      input: new Point(20, 20, 1),
      toBeFalse: [2, 3, 9, 10, 11],
    },
    {
      description:
        "should not allow to move anywhere when ball is inside the corner",
      input: new Point(20, 20, 107),
      toBeFalse: [97, 98, 99, 106, 108, 115, 116],
    },
    {
      description:
        "should not allow to move anywhere when ball is inside the bottom goal area",
      input: new Point(20, 20, 113),
      toBeFalse: [112, 114, 103, 104, 105],
    },
    {
      description:
        "should not allow to move anywhere when ball is inside the top goal area",
      input: new Point(20, 20, 4),
      toBeFalse: [3, 5, 12, 13, 14],
    },
  ];

  parameters.forEach((test) => {
    it(test.description, () => {
      const resultPoint = preparePoint(test.input);

      test.toBeFalse.forEach((number) => {
        expect(resultPoint.canMove(number)).toBeFalsy();
      });
    });
  });
});

describe("left and right case", () => {
  it("should not allow to move N, S, NW, W, SW  when ball is on left edge", () => {
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

  it("should not allow to move N, S, NE, E, SE  when ball is on right edge", () => {
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
});
