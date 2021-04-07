import Point from "./Point";
import preparePoint from "./StartingPoints";

describe("4 corners next to goal area", () => {
  it("should not allow to move S, SW, W  when ball is on left edge near bottom goal area", () => {
    const topBottomEdgeNearLeft = new Point(4, 4, 102);

    const resultPoint = preparePoint(topBottomEdgeNearLeft);

    expect(resultPoint.canMove(111)).toBeFalsy();
    expect(resultPoint.canMove(110)).toBeFalsy();
    expect(resultPoint.canMove(101)).toBeFalsy();
    expect(resultPoint.canMove(103)).toBe(true);
    expect(resultPoint.canMove(112)).toBe(true);
    expect(resultPoint.canMove(93)).toBe(true);
    expect(resultPoint.canMove(93)).toBe(true);
    expect(resultPoint.canMove(94)).toBe(true);
  });

  it("should not allow to move S, SE, E  when ball is on right edge near bottom goal area", () => {
    const topBottomEdgeNearRight = new Point(4, 4, 104);

    const resultPoint = preparePoint(topBottomEdgeNearRight);

    expect(resultPoint.canMove(113)).toBeFalsy();
    expect(resultPoint.canMove(114)).toBeFalsy();
    expect(resultPoint.canMove(105)).toBeFalsy();
    expect(resultPoint.canMove(103)).toBe(true);
    expect(resultPoint.canMove(112)).toBe(true);
    expect(resultPoint.canMove(94)).toBe(true);
    expect(resultPoint.canMove(95)).toBe(true);
    expect(resultPoint.canMove(96)).toBe(true);
  });

  it("should not allow to move N, NW, W when ball is on left edge near top goal area", () => {
    const topEdgeNearGoalLeft = new Point(4, 4, 12);

    const resultPoint = preparePoint(topEdgeNearGoalLeft);

    expect(resultPoint.canMove(3)).toBeFalsy();
    expect(resultPoint.canMove(2)).toBeFalsy();
    expect(resultPoint.canMove(11)).toBeFalsy();
    expect(resultPoint.canMove(4)).toBe(true);
    expect(resultPoint.canMove(13)).toBe(true);
    expect(resultPoint.canMove(20)).toBe(true);
    expect(resultPoint.canMove(21)).toBe(true);
    expect(resultPoint.canMove(22)).toBe(true);
  });

  it("should not allow to move N, NE, E when ball is on right edge near top goal area", () => {
    const topEdgeNearGoalRight = new Point(4, 4, 14);

    const resultPoint = preparePoint(topEdgeNearGoalRight);

    expect(resultPoint.canMove(5)).toBeFalsy();
    expect(resultPoint.canMove(15)).toBeFalsy();
    expect(resultPoint.canMove(6)).toBeFalsy();
    expect(resultPoint.canMove(4)).toBe(true);
    expect(resultPoint.canMove(13)).toBe(true);
    expect(resultPoint.canMove(22)).toBe(true);
    expect(resultPoint.canMove(23)).toBe(true);
    expect(resultPoint.canMove(24)).toBe(true);
  });
});

describe("ball on the top and bottom edge", () => {
  it("should not allow to move E, SE, S, SW, W when ball is on bottom edge of pitch", () => {
    const topEdgeOfPitch = new Point(50, 50, 106);

    const resultPoint = preparePoint(topEdgeOfPitch);

    expect(resultPoint.canMove(105)).toBeFalsy();
    expect(resultPoint.canMove(107)).toBeFalsy();
    expect(resultPoint.canMove(115)).toBeFalsy();
    expect(resultPoint.canMove(114)).toBeFalsy();
    expect(resultPoint.canMove(116)).toBeFalsy();
    expect(resultPoint.canMove(97)).toBe(true);
    expect(resultPoint.canMove(96)).toBe(true);
    expect(resultPoint.canMove(98)).toBe(true);
  });

  it("should not allow to move W, NW, N, NE, E when ball is on top edge of pitch", () => {
    const topEdgeOfPitch = new Point(23, 23, 11);

    const resultPoint = preparePoint(topEdgeOfPitch);

    expect(resultPoint.canMove(10)).toBeFalsy();
    expect(resultPoint.canMove(12)).toBeFalsy();
    expect(resultPoint.canMove(2)).toBeFalsy();
    expect(resultPoint.canMove(1)).toBeFalsy();
    expect(resultPoint.canMove(3)).toBeFalsy();
    expect(resultPoint.canMove(20)).toBe(true);
    expect(resultPoint.canMove(19)).toBe(true);
    expect(resultPoint.canMove(21)).toBe(true);
  });
});

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
