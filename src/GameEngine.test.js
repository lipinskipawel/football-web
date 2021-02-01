import GameEngine from "./GameEngine";

test("should allow to make a move", () => {
  const game = new GameEngine();

  const canMove = game.canMove(12);

  expect(canMove).toBe(true);
});
