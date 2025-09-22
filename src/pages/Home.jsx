import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Number System Toolkit</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/conversion"><button style={{ margin: "10px", padding: "10px 20px" }}>Conversions</button></Link>
        <Link to="/arithmetic"><button style={{ margin: "10px", padding: "10px 20px" }}>Arithmetic</button></Link>
      </div>
    </div>
  );
}
