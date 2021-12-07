import Player from "./Player";
import useFetch from "./hooks/useFetch";

const PlayerList = () => {
  const { data: players, isPending, error } = useFetch(
    "http://localhost:8000/players"
  );

  return (
    <div>
      {error && <div>Error</div>}
      {isPending && <div>Loading...</div>}
      {players &&
        players.map((player) => (
          <Player
            key={player.id}
            nickname={player.nickname}
            isPlaying={player.isPlaying}
          />
        ))}
    </div>
  );
};

export default PlayerList;
