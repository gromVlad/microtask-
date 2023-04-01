type MainType = {
  titleMain: string;
};

export const Main = (props: MainType) => {
  return <div>{props.titleMain}</div>;
};
