import React, { useState } from "react";
import ConversionService from "../services/ConversionService";
import { validateInput } from "../utils/validators";

const bases = ["decimal", "binary", "octal", "hex", "bcd"];

export default function ConversionTool() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("decimal");
  const [toBase, setToBase] = useState("binary");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    if (validateInput(val, fromBase)) {
      setInput(val);
      setError("");
    } else {
      setError(`Invalid input for base: ${fromBase.toUpperCase()}`);
    }
  };

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
        placeholder={`Enter ${fromBase.toUpperCase()} number`}
        value={input}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
      />
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

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
