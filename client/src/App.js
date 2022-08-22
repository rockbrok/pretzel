import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from "react";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
// components
import Navbar from "./components/Navbar";
// styles
import './index.css';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [query, setQuery] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `${API_URL}/graphql`
  });

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
          <Route path="/" element={<Home query={query} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:slug" element={<Product />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}