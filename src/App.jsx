import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginRegisterPages/Login";
import Register from "./pages/LoginRegisterPages/Register";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
