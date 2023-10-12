import { useEffect, useState } from "react";

interface QuizData {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

const data: QuizData[] = [
  {
    id: "1a",
    question: "Which is the tallest mountain in the world?",
    options: ["Mt. Everest", "Fiji", "Fishtail", "Rundle"],
    answer: "Mt. Everest",
  },
  {
    id: "2b",
    question: "Who won the 2020 World Cup?",
    options: ["Nepal", "India", "China", "canada"],
    answer: "Nepal",
  },
  {
    id: "3b",
    question: "Who is the Best?",
    options: ["Mickle Jaskson", "Joe Biden", "Elon Musk", "Prachanda"],
    answer: "Elon Musk",
  },
];

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizOver, setQuizOver] = useState(false);

  const handleOptionClick = (option: string) => {
    if (option === data[quizIndex].answer) {
      console.log("Correct Answer!");
      setScore(score + 1);
    } else {
      console.log("Wrong Answer! Correct one was : ", data[0].answer);
    }
    if (quizIndex <= data.length - 2) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizOver(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setQuizIndex(0);
    setQuizOver(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (quizIndex <= data.length - 2) {
        setQuizIndex(quizIndex + 1);
      }
    }, 10000);

    return () => {
      console.log("what is happening!");
      clearInterval(intervalId);
    };
  }, [quizIndex]);

  return (
    <div className="p-4">
      {quizOver ? (
        <div>
          <h1 className="text-3xl">The Quiz is Over! </h1>
          <button
            onClick={handleRestart}
            className="bg-red-500 p-3 m-4 rounded-lg text-white"
          >
            Restart
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl">{data[quizIndex].question}</h1>
          {data[quizIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="bg-blue-500 m-3 p-3 text-white rounded-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <h1 className="text-3xl m-3">Score: {score}</h1>
    </div>
  );
};

export { Quiz };
