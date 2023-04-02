import React, { useState } from "react";
import "./App.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { type } from "os";
import { Components } from "./components/components";


 

function App() {
  
  let [message, setMessage] = useState([
    {message:"message1"},
    {message:"message2"},
    {message:"message3"},
  ])

  const funProm = (value:string) =>{
    console.log(value);
  }

  return (
    <>
      <Components fun={funProm} />
      {message.map((elements, index) => {
        return <h2 key={index}>{elements.message}</h2>;
      })}
    </>
  );
}
export default App;
