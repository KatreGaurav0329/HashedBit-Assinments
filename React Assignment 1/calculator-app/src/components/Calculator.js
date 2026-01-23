import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
      <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>
      <button onClick={() => setResult(Number(num1) * Number(num2))}>×</button>
      <button onClick={() => setResult(Number(num1) / Number(num2))}>÷</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
