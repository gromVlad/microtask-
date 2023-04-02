import React, { ChangeEvent, useState } from "react";


type Inpyttype = {
  setTitle:(str:string) => void,
  title:string
}

export const Input = (props: Inpyttype) => {
  //event. target – самый глубокий элемент, на котором произошло событие. event. currentTarget (= this ) – элемент, на котором в данный момент сработал обработчик (до которого «доплыло» событие).
  const funTargetInput = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value);
  };

  //value -> чтобы синхронизировать значения state и input
  return <input value={props.title} onChange={funTargetInput} />;
};
