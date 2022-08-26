import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from '@apollo/client';
import { useState } from "react";
import { client } from './utils/client';
// pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
// regions
import Africa from "./pages/regions/Africa";
import Asia from "./pages/regions/Asia";
import SouthAmerica from "./pages/regions/SouthAmerica";
// components
import Navbar from "./components/Navbar";
// styles
import './index.css';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query)
  };

  return (
    <Router>
      <ApolloProvider client={client}>
        <ToastContainer />
        <Navbar
          query={query}
          handleChange={handleChange}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/store" element={<Store query={query} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store/:slug" element={<Product />} />
          {/* Regions */}
          <Route path="/store/south-america" element={<SouthAmerica query={query} />} />
          <Route path="/store/south-america/:slug" element={<Product />} />
          <Route path="/store/asia" element={<Asia query={query} />} />
          <Route path="/store/asia/:slug" element={<Product />} />
          <Route path="/store/africa" element={<Africa query={query} />} />
          <Route path="/store/africa/:slug" element={<Product />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}