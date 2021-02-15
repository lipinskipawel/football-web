class GameEngine {
  canMove(position) {
    return true;
  }

  static computeDots(width, height) {
    const spaceBetweenDotsH = width / 9;
    const spaceBetweenDotsV = height / 13;

    const startingPointH = spaceBetweenDotsH / 2;
    const startingPointV = spaceBetweenDotsV / 2;

    const dots = {
      startingH: startingPointH,
      spaceBetweenDotsH: spaceBetweenDotsH,
      startingV: startingPointV,
      spaceBetweenDotsV: spaceBetweenDotsV,
    };
    return dots;
  }
}

export default GameEngine;
