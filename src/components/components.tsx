import { type } from "os";
import { FilterType } from "../App";


type Object = {
  banknots:string,
  value:number,
  number: string
}

type CompType = {
  showinfo: Object[];
  fun: (name: FilterType) => void;
};

export const Components = (props: CompType) => {
  
  return (
    <>
      {props.showinfo.map((el) => {
        return (
          <div>
            {" "}
            Money: {el.banknots} / Value: {el.value} / Number: {el.number}
          </div>
        );
      })}
      <button onClick={() => props.fun("all")}>All</button>
      <button onClick={() => props.fun("RUBLS")}>RUBLS</button>
      <button onClick={() => props.fun("Dollars")}>Dollars</button>
    </>
  );
};