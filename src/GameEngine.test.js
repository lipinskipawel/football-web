import GameEngine from "./GameEngine";
import Point from "./Point";

test("should pick the same point when clicking at that point", () => {
  const engine = new GameEngine(90, 130);

  const point = engine.realCoordinates(5, 5);

  expect(point).toEqual(new Point(5, 5));
});

test("should pick nearest point when clicking (-1, +4)", () => {
  const engine = new GameEngine(90, 130);

  const point = engine.realCoordinates(54, 29);

  expect(point).toEqual(new Point(55, 25));
});

test("should pick goal point when clicking at (+3, -2)", () => {
  const expectedPoint = new Point(45, 5);
  const engine = new GameEngine(90, 130);

  const actualPoint = engine.realCoordinates(48, 3);

  expect(actualPoint).toEqual(expectedPoint);
});

test("should pick starting point when clicking at (0, 0)", () => {
  const expectedPoint = new Point(5, 5);
  const engine = new GameEngine(90, 130);

  const actualPoint = engine.realCoordinates(0, 0);

  expect(actualPoint).toEqual(expectedPoint);
});

test("should compute staring points and space between points correctly", () => {
  const dots = GameEngine.computeDots(90, 130);

  const firstX = dots.startingH;
  const firstY = dots.startingV;
  const spaceBetweenDotsH = dots.spaceBetweenDotsH;
  const spaceBetweenDotsV = dots.spaceBetweenDotsV;

  expect(firstX).toEqual(5);
  expect(firstY).toEqual(5);
  expect(spaceBetweenDotsH).toEqual(10);
  expect(spaceBetweenDotsV).toEqual(10);
});

test("should allow to make a move", () => {
  const game = new GameEngine();

  const canMove = game.canMove(12);

  expect(canMove).toBe(true);
});
