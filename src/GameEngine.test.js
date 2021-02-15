import GameEngine from "./GameEngine";

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
