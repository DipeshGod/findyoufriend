import { useState } from "react";

const MoviesApp = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleButton = () => {
    setCounter(Number(counter + 1));
  };
  return (
    <>
      <button onClick={handleButton}>counter: {counter}</button>
    </>
  );
};

export { MoviesApp };
