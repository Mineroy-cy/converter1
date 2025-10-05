import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1 className="title">Number System Toolkit</h1>
      <div className="home-buttons">
        <Link to="/conversion" className="btn btn-cyan">
          Conversions
        </Link>
        <Link to="/arithmetic" className="btn btn-indigo">
          Arithmetic
        </Link>
      </div>
    </div>
  );
}
