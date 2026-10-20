import { Row, Col } from "antd";
import Key from "./Key";

const keyboardGrid = [
  {
    Q: 2,
    W: 2,
    E: 2,
    R: 2,
    T: 2,
    Y: 2,
    U: 2,
    I: 2,
    O: 2,
    P: 2,
  },
  {
    A: 2,
    S: 2,
    D: 2,
    F: 2,
    G: 2,
    H: 2,
    J: 2,
    K: 2,
    L: 2,
  },
  {
    Z: 2,
    X: 2,
    C: 2,
    V: 2,
    B: 2,
    N: 2,
    M: 2,
  },
  {
    Space: 8,
  },
];

export default function GuidingKeyboard() {
  return (
    <>
      <div className="guiding-keyboard-container">
        {keyboardGrid.map((row: { [key: string]: number | undefined }) => {
          const entries = Object.entries(row);
          console.log("[Debug @ KeyBoard] row:", row);
          console.log("[Debug @ KeyBoard] entries:", entries);

          return (
            <div style={{ width: "100%" }}>
              <Row>
                {entries.map(([keyLetter, colSpan]) => {
                  return <Col span={colSpan}>{<Key letter={keyLetter} />}</Col>;
                })}
              </Row>
            </div>
          );
        })}
      </div>
    </>
  );
}
