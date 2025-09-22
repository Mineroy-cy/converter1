import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConversionPage from "./pages/ConversionPage";
import ArithmeticPage from "./pages/ArithmeticPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversion" element={<ConversionPage />} />
      <Route path="/arithmetic" element={<ArithmeticPage />} />

      {/* fallback route: anything unknown goes to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
