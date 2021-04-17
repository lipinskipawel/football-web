const Player = ({ nickname, isPlaying }) => {
  return (
    <div style={{ backgroundColor: isPlaying ? "gray" : "white" }}>
      <div>{nickname}</div>
    </div>
  );
};

export default Player;
