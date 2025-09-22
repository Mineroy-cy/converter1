import React, { useState } from "react";
import ConversionService from "../services/ConversionService";

const bases = ["decimal", "binary", "octal", "hex", "bcd"];

export default function ConversionTool() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("decimal");
  const [toBase, setToBase] = useState("binary");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    try {
      const output = ConversionService.convert(input, fromBase, toBase);
      setResult(output);
    } catch (e) {
      setResult("Error: " + e.message);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Conversion Tool</h2>

      <input
        type="text"
        placeholder="Enter Number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
      />

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <select value={fromBase} onChange={(e) => setFromBase(e.target.value)} style={{ flex: 1, padding: "8px" }}>
          {bases.map(base => <option key={base} value={base}>{base.toUpperCase()}</option>)}
        </select>
        <select value={toBase} onChange={(e) => setToBase(e.target.value)} style={{ flex: 1, padding: "8px" }}>
          {bases.map(base => <option key={base} value={base}>{base.toUpperCase()}</option>)}
        </select>
      </div>

      <button onClick={handleConvert} style={{ width: "100%", padding: "10px" }}>Convert</button>

      {result && <h3 style={{ marginTop: "20px" }}>Result: {result}</h3>}
    </div>
  );
}
