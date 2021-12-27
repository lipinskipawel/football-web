import GameEngine from "./GameEngine";

const w = 90;
const h = 130;

describe("makeMove", () => {
  it("should allow move S after moving NE, W", () => {
    const engine = new GameEngine(w, h);
    const NE = engine.points[50];
    const W = engine.points[49];
    const S = engine.points[58];

    engine.makeMove(NE);
    engine.makeMove(W);
    const canMove = engine.canMove(S);

    expect(canMove).toBe(true);
  });

  it("should not allow move W after moving E", () => {
    const engine = new GameEngine(w, h);
    const E = engine.points[59];
    const W = engine.points[58];

    engine.makeMove(E);
    const canMove = engine.canMove(W);

    expect(canMove).toBe(false);
  });

  it("should allow move E when no moves were made", () => {
    const engine = new GameEngine(w, h);
    const E = engine.points[59];

    const canMove = engine.canMove(E);

    expect(canMove).toBe(true);
  });
});

describe("toPoint", () => {
  it("should pick the same point when clicking at that point", () => {
    const engine = new GameEngine(w, h);

    const point = engine.toPoint(5, 5);

    expect(point.index).toEqual(0);
  });

  it("should pick nearest point when clicking (-1, +4)", () => {
    const engine = new GameEngine(w, h);

    const point = engine.toPoint(54, 29);

    expect(point.index).toEqual(23);
  });

  it("should pick goal point when clicking at (+3, -2)", () => {
    const engine = new GameEngine(w, h);

    const point = engine.toPoint(48, 3);

    expect(point.index).toEqual(4);
  });

  it("should pick starting point when clicking at (0, 0)", () => {
    const engine = new GameEngine(w, h);

    const point = engine.toPoint(0, 0);

    expect(point.index).toEqual(0);
  });
});

describe("toPoints", () => {
  it("should convert one direction to point", () => {
    const engine = new GameEngine(w, h);

    const points = engine.toPoints(["N"]);

    expect(points[0].index).toBe(49);
  });

  it("should convert array of directions to array of points", () => {
    const engine = new GameEngine(w, h);
    const N = engine.points[49];

    const points = engine.toPoints(["N", "W", "S"]);

    expect(points[0].index).toBe(49);
    expect(points[1].index).toBe(48);
    expect(points[2].index).toBe(57);
    expect(engine.canMove(N)).toBe(true);
  });
});

describe("canMoveToDirections", () => {
  it("should allow moving N, when no move was made", () => {
    const engine = new GameEngine(w, h);

    const canMove = engine.canMoveToDirections(["N"]);

    expect(canMove).toBeTruthy();
  });

  it("should not allow moving S, after moving N", () => {
    const engine = new GameEngine(w, h);
    const N = engine.points[49];
    engine.makeMove(N);

    const canMove = engine.canMoveToDirections(["S"]);

    expect(canMove).toBeFalsy();
  });

  it("should not allow to move when at least one direction is falsy", () => {
    const engine = new GameEngine(w, h);
    const N = engine.points[49];
    engine.makeMove(N);

    const canMove = engine.canMoveToDirections(["N", "S"]);

    expect(canMove).toBeFalsy();
  });
});
