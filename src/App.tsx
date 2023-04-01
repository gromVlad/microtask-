import React from "react";
import "./App.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Main } from "./main/main";
import { ShowPeople } from "./showPeople/showPeople";
import { Console } from "console";

function App() {
  //MouseEvent<HTMLButtonElement>
  const fun1 = () => {
    return console.log("hello my friends!!!");
  }; //hello my friends!!!

  const fun2 = (name: string) => {
    return console.log("hello my friends!!!" + " " + name);
  }; //hello my friends!!! vlad

  return (
    <>
      <button onClick={() => console.log("hello")}>X1</button>
      <button onClick={(event) => console.log("hello")}>X2</button>
      <button onClick={fun1}>X3</button>
      <button onClick={() => fun2("vlad")}>X3</button>
    </>
  );
  //not use without () =>
  //<button onClick={fun2("vlad")}>X3</button> / error
}
export default App;
