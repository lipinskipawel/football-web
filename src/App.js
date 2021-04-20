import { Routes, Route } from "react-router-dom";
import GameFrame from "./game/GameFrame";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameFrame />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
