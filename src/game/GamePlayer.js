const GamePlayer = ({ username, background }) => {
  return (
    <>
      <div style={{ backgroundColor: background }}>Player {username}</div>
    </>
  );
};

export default GamePlayer;
