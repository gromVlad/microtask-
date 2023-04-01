import React from "react";
import "./App.css";
import { Button } from "./button/button";

function App() {
  const fun1 = (name: string, age: number) => {
    console.log(name + " " + age);
  };

  return (
    <>
      <Button name={"one"} logic={() => fun1("cat", 5)} />
      <Button name={"two"} logic={() => fun1("dog", 6)} />
    </>
  );
}
export default App;
