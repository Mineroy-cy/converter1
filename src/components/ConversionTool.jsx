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
    <div className="card">
      <h2 className="subtitle">Conversion Tool</h2>

      <input
        type="text"
        placeholder={`Enter ${fromBase.toUpperCase()} number`}
        value={input}
        onChange={handleChange}
        className="input"
      />
      {error && <p className="error">{error}</p>}

      <div className="row">
        <select
          value={fromBase}
          onChange={(e) => setFromBase(e.target.value)}
          className="input"
        >
          {bases.map((b) => (
            <option key={b} value={b}>{b.toUpperCase()}</option>
          ))}
        </select>
        <select
          value={toBase}
          onChange={(e) => setToBase(e.target.value)}
          className="input"
        >
          {bases.map((b) => (
            <option key={b} value={b}>{b.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}className="btn-convert">
        Convert
      </button>

      {result && <h3 className="result">Result: {result}</h3>}
    </div>
  );
}
