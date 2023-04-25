import React, { useState } from "react";
import { Head, HeadType } from "./head";
import { Story } from "@storybook/react";

export default {
  name: "h1",
  component: Head
}

const Template: Story<HeadType> = (args) => <Head {...args} />;


//one test
export const Primary = Template.bind({});
Primary.args = {
  name: "vlad",
  age: 24,
};


//two test
export const Primary2 = Template.bind({});
Primary2.args = {
  name: "Jonh",
  age: 58,
};

export const PrimaryFun = () => {
  const [a,b] = useState<boolean>(false)

  return (
    <div>
      {a && <Head name={"hello"} age ={78} />}
      <button onClick={() => b(!a)} >Change Head</button>
    </div>
  )
}
