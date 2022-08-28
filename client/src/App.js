import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from '@apollo/client';
// pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
// regions
import Africa from "./pages/regions/Africa";
import Asia from "./pages/regions/Asia";
import SouthAmerica from "./pages/regions/SouthAmerica";
// components
import Navbar from "./components/Navbar";
// utilities
import { client } from './utils/client';
// styles
import './index.css';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* Regions */}
          <Route path="/store/south-america" element={<SouthAmerica />} />
          <Route path="/store/south-america/:slug" element={<Product />} />
          <Route path="/store/asia" element={<Asia />} />
          <Route path="/store/asia/:slug" element={<Product />} />
          <Route path="/store/africa" element={<Africa />} />
          <Route path="/store/africa/:slug" element={<Product />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}