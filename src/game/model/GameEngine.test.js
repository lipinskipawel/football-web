import GameEngine from "./GameEngine";

const w = 90;
const h = 130;

// makeMove testing
test("should allow move S after moving NE, W", () => {
  const engine = new GameEngine(w, h);
  const NE = engine.points[50];
  const W = engine.points[49];
  const S = engine.points[58];

  engine.makeMove(NE);
  engine.makeMove(W);
  const canMove = engine.canMove(S);

  expect(canMove).toBe(true);
});

test("should not allow move W after moving E", () => {
  const engine = new GameEngine(w, h);
  const E = engine.points[59];
  const W = engine.points[58];

  engine.makeMove(E);
  const canMove = engine.canMove(W);

  expect(canMove).toBe(false);
});

test("should allow move E when no moves were made", () => {
  const engine = new GameEngine(w, h);
  const E = engine.points[59];

  const canMove = engine.canMove(E);

  expect(canMove).toBe(true);
});

// toPoint testing
test("should pick the same point when clicking at that point", () => {
  const engine = new GameEngine(w, h);

  const point = engine.toPoint(5, 5);

  expect(point.index).toEqual(0);
});

test("should pick nearest point when clicking (-1, +4)", () => {
  const engine = new GameEngine(w, h);

  const point = engine.toPoint(54, 29);

  expect(point.index).toEqual(23);
});

test("should pick goal point when clicking at (+3, -2)", () => {
  const engine = new GameEngine(w, h);

  const point = engine.toPoint(48, 3);

  expect(point.index).toEqual(4);
});

test("should pick starting point when clicking at (0, 0)", () => {
  const engine = new GameEngine(w, h);

  const point = engine.toPoint(0, 0);

  expect(point.index).toEqual(0);
});
