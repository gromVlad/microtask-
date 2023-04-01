type ButtonType = {
  name: string;
  logic: () => void;
};

export const Button = (props: ButtonType) => {
  
  // const fun3 = () => {
  //   props.logic();
  // };
  // <button onClick={fun3}>Button number :{props.name}</button>

  return (
    <button onClick={() => props.logic()}>Button number :{props.name}</button>
  );
};
// cat 5
// dog 6
// dog 6
