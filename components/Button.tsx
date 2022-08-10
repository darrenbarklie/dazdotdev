import { FC } from "react";

interface Props {
  text: string;
}

const Button: FC<Props> = ({ text }) => {
  return <button onClick={() => console.log("Clicked")}>{text}</button>;
};
export default Button;
