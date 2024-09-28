// import logo from './logo.svg';
import "./App.css";
import BreadOfTheDay from "./pages/breadDay";
import CakeTouch from "./pages/CakeTouch";
import HomeAbout from "./pages/HomeAbout";
import HomePage from "./pages/homepage";
// import { NavBar } from './pages/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { NavBar } from './pages/navbar';
import { NavBar } from "./pages/navbar";

function App() {
  return (
    <div className="App bg-[#f9f4ea]">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomeAbout />} />
          <Route path="/products" element={<BreadOfTheDay />} />
          <Route path="/contact" element={<CakeTouch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

