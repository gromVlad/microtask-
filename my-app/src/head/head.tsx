import React from "react";

export type HeadType = {
  name:string,
  age:number
} 

export const Head = (props:HeadType) => {
  let {name,age} = props
  return (
    <div>
      hello
      {" " + name}
      {" " + (age + 1)}
    </div>
  );
}