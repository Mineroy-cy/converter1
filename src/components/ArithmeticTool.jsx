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
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Binary Arithmetic</h2>

      <input type="text" placeholder="Binary A" value={a} onChange={(e) => setA(e.target.value)} style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
      <input type="text" placeholder="Binary B" value={b} onChange={(e) => setB(e.target.value)} style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />

      <select value={operation} onChange={(e) => setOperation(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px" }}>
        {operations.map(op => <option key={op} value={op}>{op.toUpperCase()}</option>)}
      </select>

      <button onClick={handleCompute} style={{ width: "100%", padding: "10px" }}>Compute</button>

      {result && <h3 style={{ marginTop: "20px" }}>Result: {result}</h3>}
    </div>
  );
}
