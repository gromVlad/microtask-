import { type} from "os";
//import ChangeEvent, useState
import React, {ChangeEvent, useState } from "react";

type ComponentsType = {
  fun:(value:string) => void
}

export const Components = (props: ComponentsType) => {
  let [title, settitle] = useState("");

  //event. target – самый глубокий элемент, на котором произошло событие. event. currentTarget (= this ) – элемент, на котором в данный момент сработал обработчик (до которого «доплыло» событие)
  const funTargetInput = (event: ChangeEvent<HTMLInputElement>) => {
    settitle(event.currentTarget.value);
  };

  return (
    <>
      <input onChange={funTargetInput} />
      <button onClick={() => props.fun(title)}>+</button>
    </>
  );
};

