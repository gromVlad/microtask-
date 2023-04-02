import React  from "react";


type ButtonType = {
  name: string;
  callback: () => void;
};
export const Button = (props:ButtonType) => {
  const FunHandler = () => {
    props.callback()
  }

  return (
    <button
      onClick={FunHandler}>
      {props.name}
    </button>
  );
};
