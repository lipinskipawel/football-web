import { Routes, Route } from "react-router-dom";
import GameFrame from "./game/GameFrame";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GameFrame />} />
      </Routes>
    </div>
  );
}

export default App;
