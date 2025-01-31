import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [operation, setOperation] = useState<string>('soma');
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    let calculatedResult: number;

    switch (operation) {
      case 'soma':
        calculatedResult = input1 + input2;
        break;
      case 'subtracao':
        calculatedResult = input1 - input2;
        break;
      case 'multiplicacao':
        calculatedResult = input1 * input2;
        break;
      case 'divisao':
        calculatedResult = input1 / input2;
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult);
  };

  return (
    <div className='calculator'>
      <h1>Task #001 - Simple React Calculator</h1>
      <div>
        <label>
          <input
            type="radio"
            value="soma"
            checked={operation === 'soma'}
            onChange={() => setOperation('soma')}
          />
          Addition
        </label>
        <label>
          <input
            type="radio"
            value="subtracao"
            checked={operation === 'subtracao'}
            onChange={() => setOperation('subtracao')}
          />
          Subtraction
        </label>
        <label>
          <input
            type="radio"
            value="multiplicacao"
            checked={operation === 'multiplicacao'}
            onChange={() => setOperation('multiplicacao')}
          />
          Multiplication
        </label>
        <label>
          <input
            type="radio"
            value="divisao"
            checked={operation === 'divisao'}
            onChange={() => setOperation('divisao')}
          />
          Division
        </label>
      </div>
      <div>
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(Number(e.target.value))}
        />
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(Number(e.target.value))}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Resultado: {result}</div>}
    </div>
  );
};

export default Calculator;