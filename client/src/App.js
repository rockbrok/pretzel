import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Product from "./pages/Product";
// components
import Navbar from "./components/Navbar";

import './index.css';

export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Product />} />
          <Route path="/add-product" />
        </Routes>
      </Router>
  );
}
