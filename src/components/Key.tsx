import { Button } from "antd";
import "../styles/Key.css";

type KeyProps = {
  letter: string;
};

export default function Key({ letter }: KeyProps) {
  return (
    <>
      <Button className="key">{letter}</Button>
    </>
  );
}
