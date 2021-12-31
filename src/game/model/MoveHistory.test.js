import GameEngine from "./GameEngine";

describe("currentPlayerMoves", () => {
  it("should return [[]] when no point has been registered yet", () => {
    const engine = new GameEngine(90, 130);

    expect(engine.moveHistory.getAllDirections()).toEqual(
      expect.arrayContaining([[]])
    );
  });

  it("should return [[N]] when N moves was made", () => {
    const engine = new GameEngine(90, 130);
    const points = engine.points;

    engine.makeMove(points[49]);

    expect(engine.moveHistory.getAllDirections()).toEqual(
      expect.arrayContaining([["N"]])
    );
  });

  it("should return [[N], [N]] when N and N was made", () => {
    const engine = new GameEngine(90, 130);
    const points = engine.points;

    engine.makeMove(points[49]);
    engine.makeMove(points[40]);

    expect(engine.moveHistory.getAllDirections()).toEqual(
      expect.arrayContaining([["N"], ["N"]])
    );
  });

  it("should return [[N], [W], [SE, E] when N and W and SE, E was made", () => {
    const engine = new GameEngine(90, 130);
    const points = engine.points;

    engine.makeMove(points[49]);
    engine.makeMove(points[48]);
    engine.makeMove(points[58]);
    engine.makeMove(points[59]);

    expect(engine.moveHistory.getAllDirections()).toEqual(
      expect.arrayContaining([["N"], ["W"], ["SE", "E"]])
    );
  });
});
