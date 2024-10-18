import "./App.css";
import HomePage from "./pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./pages/navbar";
import Products from "./pages/products";
import GalleryPage from "./pages/galleryPage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <div className="App bg-[#f9f4ea]">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

