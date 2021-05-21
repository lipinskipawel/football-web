import { Routes, Route } from "react-router-dom";
import GameFrame from "./game/GameFrame";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameFrame />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
