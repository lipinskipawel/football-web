import { Routes, Route } from "react-router-dom";
import GamePanel from "./game/GamePanel";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePanel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
