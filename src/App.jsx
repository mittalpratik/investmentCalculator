import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const initialUserValue = {
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
}

function App() {
  const [userValue, setUserValue] = useState(initialUserValue);

  let invalidInput = userValue.duration < 1;

  function handleUserInputValue(key, value){
    setUserValue(prevValue => {
      let newValue = {...prevValue};
      console.log(newValue);
      newValue[key] = +value;
      console.log(newValue);
      invalidInput = newValue.duration < 1;
      return newValue;
    });
    let newResults = calculateInvestmentResults(userValue);
    console.log(newResults);
    setResults(newResults);
  }

  return (
    <>
      <Header />
      <UserInput onUserValue={handleUserInputValue} userValue={userValue} />
      { invalidInput && <p className="center">Please provide valid duration</p>}
      { !invalidInput && <Result userValue={userValue}/>}
    </>
  )
}

export default App
