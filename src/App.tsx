import React, { useState } from "react";
import "./App.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { type } from "os";
import { Components } from "./components/components";


 //type filter
  export type FilterType =  "all" | "Dollars" | "RUBLS";

function App() {
  let [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);


  //copy money in new varibals
  let newMoney = money;

  //create new useState for function calcBuncConv then return new filter
  let [filter, setfilter] = useState<FilterType>("all");
  const calcBuncConv = (name: FilterType) => {
    setfilter(name);
  };

  //if filter  then return ...
  if (filter === "all") newMoney = money;
  if (filter === "Dollars")
    newMoney = money.filter((el) => el.banknots === "Dollars");
  if (filter === "RUBLS")
    newMoney = money.filter((el) => el.banknots === "RUBLS");

  return (
    <>
      <Components showinfo={newMoney} fun={calcBuncConv} />
    </>
  );
}
export default App;
