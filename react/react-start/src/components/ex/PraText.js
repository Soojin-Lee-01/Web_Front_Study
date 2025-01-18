import { useState } from "react";

export default function PraText() {
  const [text, setText] = useState("안녕하세요");
  const [buttonText, setBtnText] = useState("사라져라");

  function changeText() {
    if (text == "안녕하세요") {
      setText("");
      setBtnText("보여라");
    } else {
      setText("안녕하세요");
      setBtnText("사라져라");
    }
  }
  return (
    <div>
      <button onClick={changeText}>{buttonText}</button>
      <h1>{text}</h1>
    </div>
  );
}
