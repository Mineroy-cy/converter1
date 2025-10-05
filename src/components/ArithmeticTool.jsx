import React, { useState } from "react";
import ArithmeticService from "../services/ArithmeticService";

const operations = ["add", "subtract", "multiply", "divide", "1s", "2s"];

export default function ArithmeticTool() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const handleCompute = () => {
    try {
      let output = "";
      switch (operation) {
        case "add": output = ArithmeticService.addBinary(a, b); break;
        case "subtract": output = ArithmeticService.subtractBinary(a, b); break;
        case "multiply": output = ArithmeticService.multiplyBinary(a, b); break;
        case "divide": output = ArithmeticService.divideBinary(a, b); break;
        case "1s": output = ArithmeticService.onesComplement(a); break;
        case "2s": output = ArithmeticService.twosComplement(a); break;
        default: output = "Invalid";
      }
      setResult(output);
    } catch (e) {
      setResult("Error: " + e.message);
    }
  };

  return (
    <div className="card">
      <h2 className="subtitle">Binary Arithmetic</h2>

      <input
        type="text"
        placeholder="Binary A"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Binary B"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="input"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="input"
      >
        {operations.map((op) => (
          <option key={op} value={op}>{op.toUpperCase()}</option>
        ))}
      </select>

      <button onClick={handleCompute} className="btn-convert">
        Compute
      </button>

      {result && <h3 className="result">Result: {result}</h3>}
    </div>
  );
}
