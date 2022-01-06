import GamePlayer from "./GamePlayer";

const GamePlayers = ({ active }) => {
  const computeBackground = (condition) => {
    if (condition) {
      return "#b9f5bf";
    } else {
      return "#ffffff";
    }
  };

  return (
    <div className="game-player">
      <GamePlayer
        username="first"
        background={computeBackground(active === 1)}
      />
      <GamePlayer
        username="second"
        background={computeBackground(active !== 1)}
      />
    </div>
  );
};

export default GamePlayers;
