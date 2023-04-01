import React, { useState } from "react";
import "./App.css";

function App() {
  let [i,setI] = useState(1)

  const plusvalue = () => {
    setI(++i)
  }

  const nullvalue = () => {
    setI(0)
  }

  return (
    <>
      <h1>{i}</h1>
      <button onClick={plusvalue}>+</button>
      <button onClick={nullvalue}>0</button>
    </>
  );
}
export default App;
