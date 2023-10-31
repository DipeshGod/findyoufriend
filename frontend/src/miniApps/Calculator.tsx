import { ChangeEvent, useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState<number>();
  const [number2, setNumber2] = useState<number>();
  const [answer, setAnswer] = useState<number>();

  const handleNum1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const handleNum2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };

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

  const handleReset = () => {
    setNumber1(undefined);
    setNumber2(undefined);
    setAnswer(undefined);
  };

  return (
    <>
      <h1 className="text-3xl">Calculator App</h1>
      <div className="flex flex-col ">
        <input
          className="border-slate-500 m-4 "
          placeholder="Enter First Number"
          type="number"
          value={number1 || ""}
          onChange={handleNum1Change}
        ></input>
        <input
          className="border-slate-500 m-4 "
          placeholder="Enter Second Number"
          type="number"
          value={number2 || ""}
          onChange={handleNum2Change}
        ></input>
        <button
          className="bg-blue-500 m-3 rounded-lg text-white w-24"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="bg-blue-500 m-3 rounded-lg text-white w-24"
          onClick={handleMultiply}
        >
          Multiply
        </button>
        <button
          className="bg-red-500 m-3 rounded-lg text-white w-24"
          onClick={handleReset}
        >
          Reset
        </button>

        <h2 className="text-3xl">{answer}</h2>
      </div>
    </>
  );
};

export { Calculator };
