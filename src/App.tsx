import React, { useState } from "react";
import "./App.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { type } from "os";
import { Button} from "./components/button";
import { Input} from "./components/input";

function App() {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  //state input
  let [title, setTitle] = useState("");
  
  //add new message
  const funProm = (value: string) => {
    let newMes = { message: value };
    setMessage([newMes, ...message]);
  };

  //onclick fun
  const FunButton = () => {
    funProm(title)
    setTitle("")
  }

  return (
    <>
      <Input title={title} setTitle={setTitle} />
      <Button name={"enter"} callback={FunButton} />

      {message.map((elements, index) => {
        return <h2 key={index}>{elements.message}</h2>;
      })}
    </>
  );
}
export default App;
