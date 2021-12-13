import "./Player.css";

const Player = ({ nickname, isPlaying, onClickCallback }) => {
  return (
    <div className="player" onClick={() => onClickCallback(nickname)}>
      <div>{nickname}</div>
    </div>
  );
};

export default Player;
