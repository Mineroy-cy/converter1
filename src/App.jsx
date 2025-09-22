import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConversionPage from "./pages/ConversionPage";
import ArithmeticPage from "./pages/ArithmeticPage";

export default function App() {
  return (
    <Router basename="/converter1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversion" element={<ConversionPage />} />
        <Route path="/arithmetic" element={<ArithmeticPage />} />
      </Routes>
    </Router>
  );
}
