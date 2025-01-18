import { useState } from "react";

export default function Change() {
  const [fontcolor, setColor] = useState("black");
  const [changetext, setText] = useState("검은색 글씨");
  function redColor() {
    setColor("red");
    setText("빨간색 글씨");
  }
  function blueColor() {
    setColor("blue");
    setText("파란색 글씨");
  }

  return (
    <div>
      <p style={{ color: fontcolor }}>{changetext}</p>
      <br />
      <button onClick={redColor}>빨간색</button>
      <button onClick={blueColor}>파란색</button>
    </div>
  );
}
