import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1 className="title">Number System Toolkit</h1>

        <div className="home-buttons">
          <Link to="/conversion" className="btn btn-green">
            Conversions
          </Link>
          <Link to="/arithmetic" className="btn btn-alt">
            Arithmetic
          </Link>
        </div>
      </div>
    </>
  );
}
