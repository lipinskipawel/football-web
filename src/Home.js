import Navbar from "./Navbar";
import PlayerList from "./PlayerList";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <PlayerList />
      </div>
    </>
  );
};

export default Home;
