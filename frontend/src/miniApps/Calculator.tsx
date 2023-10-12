import { ChangeEvent, useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState<number>();
  const [number2, setNumber2] = useState<number>();
  const [answer, setAnswer] = useState<number>();

  const handleAdd = () => {
    if (number1 && number2) {
      setAnswer(number1 + number2);
    }
  };

  const handleMultiply = () => {
    if (number1 && number2) {
      setAnswer(number1 * number2);
    }
  };

  const handleNum1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const handleNum2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };

  return (
    <>
      <div>
        <input
          placeholder="Enter First Number"
          type="number"
          value={number1}
          onChange={handleNum1Change}
        />
      </div>
      <div>
        <input
          placeholder="Enter Second Number"
          type="number"
          value={number2}
          onChange={handleNum2Change}
        />
      </div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMultiply}>Multiply</button>

      <h1>{answer}</h1>
    </>
  );
};

export { Calculator };
