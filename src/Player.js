import { Link } from "react-router-dom";
import "./Player.css";

const Player = ({ nickname, isPlaying }) => {
  return (
    <div className="player">
      <Link to="/game">
        <div>{nickname}</div>
      </Link>
    </div>
  );
};

export default Player;
