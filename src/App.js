import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 120,
    expectedReturn: 12,
    duration: 10,
  });

  function handleChange(initialIdentfier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [initialIdentfier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;
